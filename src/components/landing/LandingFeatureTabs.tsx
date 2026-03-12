"use client";

import { useMemo, useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { landingContent } from "@/lib/content";

export function LandingFeatureTabs() {
  const [activeId, setActiveId] = useState(landingContent.tabs[0].id);
  const activeIndex = useMemo(
    () => landingContent.tabs.findIndex((tab) => tab.id === activeId),
    [activeId],
  );

  return (
    <SectionShell>
      <div id="system" className="landing-stack anim-section">
        <SectionHeading
          eyebrow="Perspectives"
          title="같은 시스템, 다른 우선순위"
          body="운영자는 판단과 추적을, 강사는 응답과 확인을 먼저 봅니다. Free-B는 같은 상태를 역할에 맞게 보여줍니다."
        />
        <div className="landing-tab-shell">
          <div className="landing-tabbar" role="tablist" aria-label="Landing viewpoints">
            <span
              className="landing-tabbar-indicator"
              aria-hidden="true"
              style={{
                width: `${100 / landingContent.tabs.length}%`,
                transform: `translateX(${Math.max(activeIndex, 0) * 100}%)`,
              }}
            />
            {landingContent.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={tab.id === activeId}
                aria-controls={`landing-tab-panel-${tab.id}`}
                className={tab.id === activeId ? "is-active" : ""}
                onClick={() => setActiveId(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="landing-tab-panel-viewport">
            {landingContent.tabs.map((tab) => (
              <div
                key={tab.id}
                role="tabpanel"
                id={`landing-tab-panel-${tab.id}`}
                aria-hidden={tab.id !== activeId}
                className={`landing-tab-panel-layer ${tab.id === activeId ? "is-active" : ""}`}
              >
                <SurfaceCard accent="blue" className="landing-tab-panel">
                  <p className="deck-card-kicker">{tab.label}</p>
                  <h3>{tab.title}</h3>
                  <p>{tab.body}</p>
                  <ul className="landing-bullets">
                    {tab.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </SurfaceCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
