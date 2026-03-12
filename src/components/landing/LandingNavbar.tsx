"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LandingDeckDisabledButton } from "@/components/landing/LandingDeckDisabledButton";
import { BeeAccent } from "@/components/ui/BeeAccent";
import { Container } from "@/components/ui/Container";
import { landingContent } from "@/lib/content";

export function LandingNavbar() {
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const nextScrollY = window.scrollY;

      if (nextScrollY <= 24) {
        setIsCompact(false);
        setIsMenuOpen(false);
      } else if (nextScrollY > lastScrollY && nextScrollY > 120) {
        setIsCompact(true);
        setIsMenuOpen(false);
      }

      lastScrollY = nextScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isExpanded = !isCompact || isMenuOpen;
  const menuContent = (
    <>
      <nav className="landing-nav-links" aria-label="Primary">
        {landingContent.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="landing-nav-actions">
        <LandingDeckDisabledButton compact label="발표 페이지 준비 중" />
      </div>
    </>
  );

  return (
    <header
      className={`landing-navbar-wrap ${isCompact ? "is-compact" : ""} ${isMenuOpen ? "is-menu-open" : ""}`}
    >
      <Container>
        <div className="landing-navbar-shell">
          <div className="landing-navbar">
            {isCompact ? (
              <button
                type="button"
                className={`landing-brand landing-brand-toggle ${isExpanded ? "is-active" : ""}`}
                aria-expanded={isExpanded}
                aria-label={isExpanded ? "메뉴 닫기" : "메뉴 열기"}
                onClick={() => setIsMenuOpen((current) => !current)}
              >
                <BeeAccent size={36} className="landing-navbar-toggle-bee" />
              </button>
            ) : (
              <Link href="/" className="landing-brand">
                <BeeAccent size={28} />
                <span>Free-B</span>
              </Link>
            )}
            {!isCompact ? <div className="landing-navbar-panel is-expanded">{menuContent}</div> : null}
          </div>
          {isCompact ? (
            <div className={`landing-navbar-compact-menu ${isMenuOpen ? "is-open" : ""}`}>{menuContent}</div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
