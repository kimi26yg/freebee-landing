"use client";

import { useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { landingContent } from "@/lib/content";

export function LandingHoverStoryAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionShell>
      <div className="landing-stack">
        <SectionHeading
          eyebrow="Hover Accordion"
          title="hover-driven accordion은 남기되, 화면을 흔들지 않게 정리합니다"
          body="카드 높이와 내부 레이아웃을 고정해 hover할 때 페이지 전체가 밀리지 않도록 했습니다. 비활성 카드는 제목 위주로 남기고, 활성 카드만 본문을 부드럽게 드러냅니다."
        />
        <div className="story-accordion" aria-label="Story focus accordion">
          {landingContent.focusRail.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={item.title}
                className={`story-accordion-card ${isActive ? "is-active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
              >
                <div className="story-accordion-shell">
                  <div className="story-accordion-topline">
                    <p className="story-accordion-eyebrow">{item.eyebrow}</p>
                    <span className="story-accordion-step">0{index + 1}</span>
                  </div>
                  <div className="story-accordion-core">
                    <h3>{item.title}</h3>
                    <div className="story-accordion-body">
                      <p>{item.body}</p>
                      <div className="story-accordion-meta">
                        <span>story cue</span>
                        <strong>문제 인식에서 구조 전환으로 넘어가는 장면입니다.</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
