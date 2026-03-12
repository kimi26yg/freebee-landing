import { BeeAccent } from "@/components/ui/BeeAccent";
import { SectionShell } from "@/components/ui/SectionShell";
import { landingContent } from "@/lib/content";

export function LandingSplitSections() {
  return (
    <SectionShell>
      <div className="landing-split-stack anim-section">
        {landingContent.splitSections.map((section, index) => (
          <section key={section.title} className="landing-split-section">
            <div className="landing-split-copy">
              <p className="section-eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
              <p className="section-body">{section.body}</p>
              <div className="split-points">
                {section.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </div>
            <div className="landing-split-visual">
              <div className={`split-preview split-preview-${index + 1}`}>
                <BeeAccent size={index === 0 ? 78 : 64} className="split-preview-bee" />
                <div className="split-preview-bar" />
                <div className="split-preview-panel">
                  <div className="split-preview-kicker">{section.eyebrow}</div>
                  <div className="split-preview-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </SectionShell>
  );
}
