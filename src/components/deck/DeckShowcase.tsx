import { BeeAccent } from "@/components/ui/BeeAccent";
import { Pill } from "@/components/ui/Pill";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { deckShowcase } from "@/lib/content";

export function DeckShowcase() {
  return (
    <>
      <SectionShell maxWidth="var(--deck-max)" style={{ paddingTop: "4rem" }}>
        <div className="deck-cover">
          <div className="deck-cover-copy">
            <Pill tone="ink">{deckShowcase.cover.eyebrow}</Pill>
            <h1>{deckShowcase.cover.title}</h1>
            <p>{deckShowcase.cover.lead}</p>
          </div>
          <div className="deck-cover-aside">
            <BeeAccent size={96} />
            <div className="deck-rules">
              <strong>Deck Rules</strong>
              <span>타이틀 크기 고정</span>
              <span>본문 폭 고정</span>
              <span>카드 패딩 고정</span>
              <span>모션 지연값 고정</span>
            </div>
          </div>
        </div>
      </SectionShell>
      <SectionShell maxWidth="var(--deck-max)">
        <div className="deck-slides">
          {deckShowcase.sampleSlides.map((slide, index) => (
            <section key={slide.step} className="deck-slide reveal">
              <div className="deck-slide-header">
                <span className="deck-step">{slide.step}</span>
                <div>
                  <p className="deck-eyebrow">{slide.eyebrow}</p>
                  <h2>{slide.title}</h2>
                </div>
              </div>
              <div className="deck-slide-body">
                <div className="deck-copy-column">
                  <p>{slide.body}</p>
                  <div className="deck-metrics">
                    <div>
                      <span className="deck-metric-value">64px</span>
                      <span className="deck-metric-label">title baseline</span>
                    </div>
                    <div>
                      <span className="deck-metric-value">12 cols</span>
                      <span className="deck-metric-label">content rhythm</span>
                    </div>
                  </div>
                </div>
                <div className="deck-card-column">
                  <SurfaceCard accent={index === 0 ? "gold" : index === 1 ? "blue" : "green"}>
                    <p className="deck-card-kicker">Component Sample</p>
                    <h3>장면형 설명 카드</h3>
                    <p>
                      텍스트를 많이 넣기 전에, 발표 장면이 어떤 밀도와 간격으로
                      반복될지 먼저 확인하는 용도의 샘플 카드입니다.
                    </p>
                  </SurfaceCard>
                </div>
              </div>
            </section>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
