"use client";

import { useMemo } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { landingContent } from "@/lib/content";

export function LandingCarousel() {
  const loopLength = landingContent.principles.length;
  const marqueeSlides = useMemo(
    () => [...landingContent.principles, ...landingContent.principles],
    [],
  );

  return (
    <SectionShell className="landing-section-tint">
      <div className="landing-stack anim-section">
        <SectionHeading
          eyebrow="Design Principles"
          title="이 네 가지 원칙이 모든 설계 결정의 기준입니다"
          body="기능 우선순위, 인터페이스 결정, 카피 방향 — 이 원칙은 Free-B 전체에 적용됩니다."
        />
        <div className="landing-carousel">
          <div className="landing-carousel-viewport">
            <div className="landing-carousel-track marquee-track">
              {marqueeSlides.map((slide, index) => (
                <div
                  key={`${slide.title}-${index}`}
                  className="landing-carousel-slide"
                  aria-hidden={index >= loopLength}
                >
                  <SurfaceCard
                    accent={index % 4 === 0 ? "gold" : index % 4 === 1 ? "blue" : index % 4 === 2 ? "green" : "gold"}
                    className="landing-carousel-card"
                  >
                    <p className="deck-card-kicker">{slide.kicker}</p>
                    <h3>{slide.title}</h3>
                    <p>{slide.body}</p>
                  </SurfaceCard>
                </div>
              ))}
            </div>
          </div>
          <div className="landing-carousel-controls">
            <p className="landing-carousel-hint">
              자동으로 흐르며, 마우스를 올리면 잠시 멈춥니다.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
