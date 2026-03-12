"use client";

import { useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { landingContent } from "@/lib/content";

export function LandingStoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = landingContent.insightArc[activeIndex];

  return (
    <SectionShell>
      <div id="insight" className="landing-stack anim-section">
        <SectionHeading
          eyebrow="Define → Ideate"
          title="관찰에서 설계 결정까지, 하나의 흐름으로 이어집니다"
          body="현장에서 발견한 인사이트가 HMW 질문을 거쳐 핵심 설계 결정으로 이어졌습니다."
        />
        <div className="story-timeline">
          <div className="story-timeline-rail" role="tablist" aria-label="Insight arc">
            {landingContent.insightArc.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`story-timeline-item ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="story-timeline-dotbox" aria-hidden="true">
                    <span className="story-timeline-dot" />
                    {index < landingContent.insightArc.length - 1 ? (
                      <span className="story-timeline-line" />
                    ) : null}
                  </span>
                  <span className="story-timeline-copy">
                    <span className="story-timeline-eyebrow">{item.eyebrow}</span>
                    <strong>{item.title}</strong>
                  </span>
                </button>
              );
            })}
          </div>
          <SurfaceCard accent="gold" className="story-timeline-detail">
            <div className="story-timeline-detail-top">
              <p className="deck-card-kicker">{activeItem.eyebrow}</p>
              <span className="story-timeline-index">0{activeIndex + 1}</span>
            </div>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.body}</p>
          </SurfaceCard>
        </div>
      </div>
    </SectionShell>
  );
}
