import { BeeAccent } from "@/components/ui/BeeAccent";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { landingContent } from "@/lib/content";

import type { DeckSlide } from "./types";
import { DeckHorizontalTimeline } from "./DeckHorizontalTimeline";
import { DeckStrategicScene } from "./DeckStrategicScene";
import { DeckSystemLine } from "./DeckSystemLine";
import { DeckWebOverviewScene } from "./DeckWebOverviewScene";
import { DeckSlide02Scene } from "./scenes/slide02/DeckSlide02Scene";
import { DeckSlide03Scene } from "./scenes/slide03/DeckSlide03Scene";

type DeckSlideAsideProps = {
  slide: DeckSlide;
  substep: number;
};

export function DeckSlideAside({ slide, substep }: DeckSlideAsideProps) {
  if (slide.id === "operator-day") {
    return <DeckSlide02Scene substep={substep} />;
  }

  if (slide.id === "reframe") {
    return <DeckSlide03Scene substep={substep} />;
  }

  if (slide.sideType === "canvas") {
    return <DeckStrategicScene slide={slide} />;
  }

  if (slide.sideType === "rules") {
    return (
      <div className="deck-cover-scene deck-cover-scene--fill">
        <SurfaceCard accent="gold" className="deck-side-card deck-cover-scene-main is-revealed">
          <div className="deck-cover-scene-head">
            <p className="deck-card-kicker">{slide.sideTitle}</p>
            <BeeAccent size={52} />
          </div>
          <div className="deck-side-list">
            {slide.sideItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </SurfaceCard>
      </div>
    );
  }

  if (slide.sideType === "cards") {
    return (
      <div className="deck-friction-scene">
        {slide.cards.map((card, index) => (
          <SurfaceCard
            key={card.title}
            accent={index === 0 ? "gold" : index === 1 ? "blue" : "green"}
            className={`deck-side-card deck-friction-card deck-friction-card-${index + 1} ${substep >= index ? "is-revealed" : ""}`}
          >
            <p className="deck-card-kicker">{card.eyebrow}</p>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </SurfaceCard>
        ))}
      </div>
    );
  }

  if (slide.sideType === "quote") {
    return (
      <div className="deck-design-scene">
        <SurfaceCard accent="gold" className="deck-side-card deck-side-quote deck-design-quote is-revealed">
          <p className="deck-card-kicker">Reframe</p>
          <blockquote>{slide.quote}</blockquote>
          <p>{slide.quoteBody}</p>
        </SurfaceCard>
        <SurfaceCard
          accent="blue"
          className={`deck-side-card deck-design-note ${substep >= 1 ? "is-revealed" : ""}`}
        >
          <p className="deck-card-kicker">Shared Journey</p>
          <div className="deck-design-note-grid">
            <div>
              <span>operator</span>
              <strong>판단</strong>
            </div>
            <div>
              <span>instructor</span>
              <strong>응답</strong>
            </div>
            <div>
              <span>contract</span>
              <strong>확인</strong>
            </div>
          </div>
        </SurfaceCard>
      </div>
    );
  }

  if (slide.sideType === "rail") {
    return (
      <div className="deck-systems-scene">
        <SurfaceCard accent="gold" className="deck-side-card deck-side-rail is-revealed">
          <div className="deck-side-card-heading">
            <p className="deck-card-kicker">State Line</p>
            <strong>One visible operating flow</strong>
          </div>
          <DeckSystemLine items={slide.rail} />
        </SurfaceCard>
        <SurfaceCard
          accent="blue"
          className={`deck-side-card deck-systems-note ${substep >= 1 ? "is-revealed" : ""}`}
        >
          <p className="deck-card-kicker">System Effect</p>
          <p>각 상태가 분리된 작업이 아니라 하나의 전이로 연결되면, 운영자와 제품이 같은 타이밍을 보게 됩니다.</p>
        </SurfaceCard>
      </div>
    );
  }

  if (slide.sideType === "timeline") {
    return (
      <div className="deck-horizontal-scene deck-horizontal-scene--fill">
        <SurfaceCard accent="gold" className="deck-side-card deck-horizontal-scene-main is-revealed">
          <DeckHorizontalTimeline items={slide.timeline} substep={substep} />
        </SurfaceCard>
      </div>
    );
  }

  if (slide.sideType === "board") {
    return (
      <div className="deck-product-scene deck-product-scene--fill">
        <SurfaceCard accent="blue" className="deck-side-card deck-side-board is-revealed">
          <div className="deck-board-header">
            <div>
              <p className="deck-card-kicker">{slide.board.header}</p>
              <strong>{slide.board.summary}</strong>
            </div>
            <BeeAccent size={58} />
          </div>
          <div className="deck-board-stats">
            {slide.board.stats.map((stat) => (
              <div key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
          <div className="deck-board-flow">
            {slide.board.flow.map((item) => (
              <div key={item}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </div>
    );
  }

  if (slide.sideType === "web-overview") {
    return <DeckWebOverviewScene slide={slide} />;
  }

  if (slide.sideType === "proof") {
    return (
      <div className="deck-proof-scene">
        {landingContent.proofStats.map((item, index) => (
          <SurfaceCard
            key={item.label}
            accent={index === 0 ? "gold" : index === 1 ? "blue" : "green"}
            className={`deck-side-card deck-proof-card ${substep >= index ? "is-revealed" : ""}`}
          >
            <strong className="deck-proof-value">{item.value}</strong>
            <span className="deck-proof-label">{item.label}</span>
            <p>{item.body}</p>
          </SurfaceCard>
        ))}
      </div>
    );
  }

  if (slide.sideType === "tabs") {
    const activeTabIndex = Math.min(substep, landingContent.tabs.length - 1);
    const activeTab = landingContent.tabs[activeTabIndex];

    return (
      <div className="deck-tabs-scene">
        <SurfaceCard accent="blue" className="deck-side-card deck-tabs-shell is-revealed">
          <div className="deck-tabs-bar" role="tablist" aria-label="Deck tabs demo">
            <span
              className="deck-tabs-indicator"
              aria-hidden="true"
              style={{ width: `${100 / landingContent.tabs.length}%`, transform: `translateX(${activeTabIndex * 100}%)` }}
            />
            {landingContent.tabs.map((tab, index) => (
              <button key={tab.id} type="button" className={index === activeTabIndex ? "is-active" : ""}>
                {tab.label}
              </button>
            ))}
          </div>
          <div className="deck-tabs-panel">
            <p className="deck-card-kicker">{activeTab.label}</p>
            <h3>{activeTab.title}</h3>
            <p>{activeTab.body}</p>
            <ul className="deck-tabs-bullets">
              {activeTab.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </SurfaceCard>
      </div>
    );
  }

  if (slide.sideType === "accordion") {
    const activeItemIndex = Math.min(substep, landingContent.focusRail.length - 1);

    return (
      <div className="deck-accordion-scene">
        {landingContent.focusRail.map((item, index) => {
          const distance = Math.abs(index - activeItemIndex);
          const stateClass =
            index === activeItemIndex
              ? "is-active"
              : distance === 1
                ? "is-collapsed is-near"
                : distance === 2
                  ? "is-collapsed is-mid"
                  : "is-collapsed is-far";

          return (
            <article key={item.title} className={`deck-side-card deck-accordion-card is-revealed ${stateClass}`}>
              <div className="deck-accordion-top">
                <span>0{index + 1}</span>
                <p className="deck-card-kicker">{item.eyebrow}</p>
              </div>
              <h3>{item.title}</h3>
              <div className="deck-accordion-copy">
                <p>{item.body}</p>
              </div>
            </article>
          );
        })}
      </div>
    );
  }

  if (slide.sideType === "carousel") {
    const activeCardIndex = Math.min(substep, landingContent.carousel.length - 1);

    return (
      <div className="deck-carousel-scene">
        <div
          className="deck-carousel-track"
          style={{ transform: `translateX(-${activeCardIndex * 18}%)` }}
        >
          {landingContent.carousel.map((item, index) => (
            <SurfaceCard
              key={item.title}
              accent={index % 3 === 0 ? "gold" : index % 3 === 1 ? "blue" : "green"}
              className={`deck-side-card deck-carousel-card ${index === activeCardIndex ? "is-active is-revealed" : "is-revealed"}`}
            >
              <p className="deck-card-kicker">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </SurfaceCard>
          ))}
        </div>
      </div>
    );
  }

  if (slide.sideType === "carousel-large") {
    const activeCardIndex = Math.min(substep, landingContent.carousel.length - 1);

    return (
      <div className="deck-carousel-scene deck-carousel-scene--large">
        <div
          className="deck-carousel-track deck-carousel-track--large"
          style={{ transform: `translateX(-${activeCardIndex * 66}%)` }}
        >
          {landingContent.carousel.map((item, index) => (
            <SurfaceCard
              key={item.title}
              accent={index % 3 === 0 ? "gold" : index % 3 === 1 ? "blue" : "green"}
              className={`deck-side-card deck-carousel-card deck-carousel-card--large ${index === activeCardIndex ? "is-active is-revealed" : "is-revealed"}`}
            >
              <p className="deck-card-kicker">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </SurfaceCard>
          ))}
        </div>
      </div>
    );
  }

  if (slide.sideType === "next") {
    return (
      <div className="deck-closing-scene">
        {slide.nextCards.map((card, cardIndex) => (
          <SurfaceCard
            key={card.title}
            accent={cardIndex === 0 ? "gold" : "none"}
            className={`deck-side-card deck-closing-card ${cardIndex === 1 ? "is-ink" : ""} ${substep >= cardIndex ? "is-revealed" : ""}`}
          >
            <p className="deck-card-kicker">{card.title}</p>
            <p>{card.body}</p>
          </SurfaceCard>
        ))}
      </div>
    );
  }

  return (
    <div />
  );
}
