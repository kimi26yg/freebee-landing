import Link from "next/link";

import { LandingDeckDisabledButton } from "@/components/landing/LandingDeckDisabledButton";
import { BeeAccent } from "@/components/ui/BeeAccent";
import { Container } from "@/components/ui/Container";
import { landingContent } from "@/lib/content";

export function LandingFooter() {
  return (
    <footer id="cta" className="landing-footer-wrap">
      <Container>
        <div className="landing-footer">
          <div className="landing-footer-main">
            <div className="landing-footer-brand">
              <div className="landing-brand">
                <BeeAccent size={28} />
                <span>{landingContent.footer.title}</span>
              </div>
              <p className="landing-footer-caption">{landingContent.footer.caption}</p>
              <p>{landingContent.footer.body}</p>
            </div>
            <div className="landing-footer-links" aria-label="Footer links">
              {landingContent.footer.linkGroups.map((group) => (
                <div key={group.title} className="landing-footer-link-group">
                  <strong>{group.title}</strong>
                  <div className="landing-footer-link-list">
                    {group.links.map((link) => (
                      link.disabled ? (
                        <span
                          key={link.label}
                          className="landing-footer-text-disabled"
                          aria-disabled="true"
                          title="발표 페이지는 별도 프로젝트로 분리해 두었습니다."
                        >
                          {link.label}
                        </span>
                      ) : (
                        <Link key={link.href} href={link.href}>
                          {link.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="landing-footer-actions">
            <Link href="#top" className="button button-ghost">
              처음으로
            </Link>
            <LandingDeckDisabledButton />
          </div>
          <div className="landing-footer-meta">
            <span>{landingContent.footer.legal}</span>
            <Link href="#top">Back to top</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
