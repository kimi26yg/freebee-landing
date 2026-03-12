import type { ReactNode } from "react";

import { BeeAccent } from "@/components/ui/BeeAccent";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import type { DeckSlide } from "./types";

type DeckSlideShellProps = {
  slide: DeckSlide;
  active: boolean;
  substep: number;
  aside: ReactNode;
};

export function DeckSlideShell({ slide, active, substep, aside }: DeckSlideShellProps) {
  const metricsRevealStep = slide.sideType === "web-overview" ? 1 : 2;
  const hasCanvasScene = slide.sideType === "canvas";

  if (slide.sideType === "hero") {
    return (
      <section
        className={`deck-scene deck-scene-hero ${active ? "is-active" : ""}`}
        aria-hidden={!active}
        data-substep={substep}
      >
        <div className="deck-scene-frame deck-hero-frame">
          <div className="deck-hero-panel">
            <div className="deck-hero-copy">
              <h1>{slide.lead}</h1>
              <p>
                운영을 하나의 흐름으로
                <br />
                다시 설계합니다
              </p>
            </div>
            <div className="deck-hero-brand">
              <SurfaceCard accent="gold" className="deck-hero-brand-card">
                <BeeAccent size={220} />
              </SurfaceCard>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (slide.isBlank) {
    return (
      <section
        className={`deck-scene ${active ? "is-active" : ""}`}
        aria-hidden={!active}
        data-substep={substep}
        data-layout={slide.layout ?? "standard"}
      >
        <div className="deck-scene-frame">
          <div className="deck-scene-title-card">
            <div className="deck-scene-head">
              <span className="deck-scene-step">{slide.step}</span>
              <p className="deck-eyebrow">{slide.eyebrow}</p>
            </div>
            <h1>{slide.title}</h1>
          </div>

          <div className={`deck-scene-panel deck-scene-panel--blank deck-scene-panel--${slide.id}`}>
            <div className="deck-scene-canvas">
              <span className="deck-scene-glow deck-scene-glow-a" aria-hidden="true" />
              <span className="deck-scene-glow deck-scene-glow-b" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`deck-scene ${active ? "is-active" : ""}`}
      aria-hidden={!active}
      data-substep={substep}
      data-layout={slide.layout ?? "standard"}
      data-side-type={slide.sideType}
    >
      <div className="deck-scene-frame">
        <div className="deck-scene-title-card">
          <div className="deck-scene-head">
            <span className="deck-scene-step">{slide.step}</span>
            <p className="deck-eyebrow">{slide.eyebrow}</p>
          </div>
          <h1>{slide.title}</h1>
        </div>

        <div className={`deck-scene-panel deck-scene-panel--${slide.id}`}>
          <div className="deck-scene-canvas">
            <span className="deck-scene-glow deck-scene-glow-a" aria-hidden="true" />
            <span className="deck-scene-glow deck-scene-glow-b" aria-hidden="true" />
            <div className="deck-scene-copy">
              {slide.lead ? <p>{slide.lead}</p> : null}
              {!hasCanvasScene && slide.summary?.length ? (
                <div className={`deck-summary-rail ${substep >= 1 ? "is-revealed" : ""}`}>
                  <div className="deck-summary-rail-head">
                    <span aria-hidden="true" />
                    <p>핵심 변화</p>
                  </div>
                  <div className="deck-summary-track">
                    {slide.summary.map((item) => (
                      <div key={item} className="deck-summary-pill">
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              {!hasCanvasScene && slide.chips?.length ? (
                <div className={`deck-scene-chips ${substep >= 1 ? "is-revealed" : ""}`}>
                  {slide.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              ) : null}
              {!hasCanvasScene && slide.metrics?.length ? (
                <div className={`deck-scene-metrics ${substep >= metricsRevealStep ? "is-revealed" : ""}`}>
                  {slide.metrics.map((metric) => (
                    <article key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                      <p>{metric.body}</p>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="deck-scene-aside">{aside}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
