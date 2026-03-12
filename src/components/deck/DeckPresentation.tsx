"use client";

import { startTransition, useCallback, useEffect, useState } from "react";

import { BeeAccent } from "@/components/ui/BeeAccent";
import { deckPresentation } from "@/lib/content";
import type { DeckPresentationContent } from "./types";
import { DeckSlideAside } from "./DeckSlideAside";
import { DeckSlideShell } from "./DeckSlideShell";

function clampIndex(index: number, slideCount: number) {
  return Math.max(0, Math.min(index, slideCount - 1));
}

type DeckPresentationProps = {
  content?: DeckPresentationContent;
};

export function DeckPresentation({ content = deckPresentation }: DeckPresentationProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [substeps, setSubsteps] = useState<Record<string, number>>({});
  const slides = content.slides;
  const lastStep = slides[slides.length - 1]?.step ?? "00";

  const activeSlide = slides[activeIndex];
  const activeSubstep = substeps[activeSlide.id] ?? 0;

  const moveToSlide = useCallback((nextIndex: number, resetSubstep = true) => {
    startTransition(() => {
      setActiveIndex(nextIndex);
      if (resetSubstep) {
        const nextSlide = slides[nextIndex];
        setSubsteps((current) => ({ ...current, [nextSlide.id]: 0 }));
      }
    });
  }, [slides]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const currentSlide = slides[activeIndex];
      const currentSubstep = substeps[currentSlide.id] ?? 0;
      const maxSubstep = currentSlide.motionSteps ?? 0;

      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        if (currentSubstep < maxSubstep) {
          setSubsteps((current) => ({ ...current, [currentSlide.id]: currentSubstep + 1 }));
          return;
        }

        moveToSlide(clampIndex(activeIndex + 1, slides.length));
      }

      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        if (currentSubstep > 0) {
          setSubsteps((current) => ({ ...current, [currentSlide.id]: currentSubstep - 1 }));
          return;
        }

        const previousIndex = clampIndex(activeIndex - 1, slides.length);
        const previousSlide = slides[previousIndex];
        moveToSlide(previousIndex, false);
        setSubsteps((current) => ({
          ...current,
          [previousSlide.id]: previousSlide.motionSteps ?? 0,
        }));
      }

      if (event.key === "Home") {
        event.preventDefault();
        moveToSlide(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        moveToSlide(slides.length - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, moveToSlide, slides, substeps]);

  return (
    <main className="page-deck page-deck-presentation">
      <div className="deck-presentation-topbar">
        <div className="deck-presentation-brand">
          <BeeAccent size={30} />
          <span>{content.title}</span>
        </div>
        <div className="deck-presentation-status">
          <span>
            {activeSlide.step} / {lastStep}
          </span>
          {activeSlide.motionSteps ? (
            <span>
              Beat {activeSubstep + 1} / {activeSlide.motionSteps + 1}
            </span>
          ) : null}
          <span>{content.hint}</span>
        </div>
      </div>

      <div className="deck-presentation-stage">
        <div className="deck-presentation-track">
          {slides.map((slide, index) => (
            <DeckSlideShell
              key={slide.id}
              slide={slide}
              active={index === activeIndex}
              substep={substeps[slide.id] ?? 0}
              aside={slide.isBlank ? null : <DeckSlideAside slide={slide} substep={substeps[slide.id] ?? 0} />}
            />
          ))}
        </div>
      </div>

      <div className="deck-presentation-footer">
        <div className="deck-progress-dots" aria-label="Slide progress">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              aria-label={`${slide.step} ${slide.eyebrow}`}
              onClick={() => moveToSlide(index)}
            />
          ))}
        </div>
        <div className="deck-nav-buttons">
          <button
            type="button"
            onClick={() => {
              if (activeSubstep > 0) {
                setSubsteps((current) => ({ ...current, [activeSlide.id]: activeSubstep - 1 }));
                return;
              }

              const previousIndex = clampIndex(activeIndex - 1, slides.length);
              const previousSlide = slides[previousIndex];
              moveToSlide(previousIndex, false);
              setSubsteps((current) => ({
                ...current,
                [previousSlide.id]: previousSlide.motionSteps ?? 0,
              }));
            }}
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => {
              if (activeSubstep < (activeSlide.motionSteps ?? 0)) {
                setSubsteps((current) => ({ ...current, [activeSlide.id]: activeSubstep + 1 }));
                return;
              }

              moveToSlide(clampIndex(activeIndex + 1, slides.length));
            }}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
