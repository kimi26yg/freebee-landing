import Link from "next/link";

import { LandingDeckDisabledButton } from "@/components/landing/LandingDeckDisabledButton";
import { SectionShell } from "@/components/ui/SectionShell";
import { landingContent } from "@/lib/content";

export function LandingCtaCluster() {
  const content = landingContent.ctaCluster;

  return (
    <SectionShell className="landing-section-tint">
      <div id="cta" className="cta-cluster anim-section">
        <div className="cta-cluster-copy">
          <p className="section-eyebrow">Get Started</p>
          <h2>{content.title}</h2>
          <p className="section-body">{content.body}</p>
          <div className="landing-hero-actions">
            <Link href="#top" className="button button-ghost">
              처음부터 다시 보기
            </Link>
            <LandingDeckDisabledButton />
          </div>
        </div>
        <div className="cta-cluster-cards">
          {content.cards.map((card, index) => (
            <article key={card.title} className={`cta-mini-card accent-${index + 1}`}>
              <span>{card.title}</span>
              <strong>{card.body}</strong>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
