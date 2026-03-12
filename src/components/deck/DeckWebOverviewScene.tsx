import { BeeAccent } from "@/components/ui/BeeAccent";
import type { DeckWebOverviewSlide } from "./types";

type DeckWebOverviewSceneProps = {
  slide: DeckWebOverviewSlide;
};

const calendarBadges: Record<number, Array<"gold" | "brown" | "green">> = {
  1: ["gold", "brown"],
  3: ["gold", "brown", "green"],
  5: ["brown", "gold", "brown"],
  8: ["green", "gold"],
  10: ["gold", "brown", "gold"],
  12: ["green", "gold", "green"],
  15: ["gold", "green", "brown"],
  17: ["brown", "gold", "green"],
  19: ["green", "brown", "gold"],
  22: ["gold", "brown"],
  24: ["green", "gold", "brown"],
  26: ["brown", "gold"],
  29: ["gold", "green"],
  31: ["brown", "gold", "green"],
  33: ["green", "brown"],
  36: ["gold", "brown", "gold"],
  38: ["green", "gold"],
  40: ["brown", "green", "gold"],
  43: ["gold", "brown"],
  45: ["green", "gold", "brown"],
  47: ["brown", "gold"],
  50: ["gold", "green"],
  52: ["brown", "gold", "green"],
  54: ["green", "brown"],
  57: ["gold", "brown", "gold"],
  59: ["green", "gold"],
  61: ["brown", "green", "gold"],
};

export function DeckWebOverviewScene({ slide }: DeckWebOverviewSceneProps) {
  return (
    <div className="deck-web-scene">
      <div className="deck-web-shell">
        <div className="deck-web-sidebar">
          <div className="deck-web-brand">
            <BeeAccent size={28} />
            <span>free-b</span>
          </div>
          <div className="deck-web-nav">
            {["Dashboard", "Instructors", "Schedules", "Contracts", "Settlements"].map((item, index) => (
              <div key={item} className={`deck-web-nav-item ${index === 0 ? "is-active" : ""}`}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="deck-web-main">
          <div className="deck-web-toolbar">
            <div>
              <p className="deck-card-kicker">Admin Console</p>
              <strong>대시보드</strong>
            </div>
            <div className="deck-web-toolbar-actions">
              <span>실시간 운영</span>
              <button type="button">김</button>
            </div>
          </div>

          <div className="deck-web-stats">
            {slide.overview.stats.map((stat) => (
              <article key={stat.title} className="deck-web-stat-card">
                <p>{stat.title}</p>
                <strong>{stat.value}</strong>
                <span>운영 지표</span>
                <div className="deck-web-stat-bar">
                  <i style={{ width: stat.color }} />
                </div>
                <small>{stat.subValue}</small>
              </article>
            ))}
          </div>

          <div className="deck-web-board">
            <section className="deck-web-panel deck-web-panel-calendar">
              <header>
                <strong>월간 배정 현황</strong>
                <div className="deck-web-calendar-controls">
                  <button type="button">‹</button>
                  <span>2026년 3월</span>
                  <button type="button">›</button>
                </div>
              </header>
              <div className="deck-web-calendar-grid">
                {Array.from({ length: 63 }).map((_, index) => {
                  const badges = calendarBadges[index] ?? [];

                  return (
                    <div key={index} className={`deck-web-calendar-cell ${badges.length ? "has-event" : ""}`}>
                      <div className="deck-web-calendar-badges" aria-hidden="true">
                        {badges.map((tone, badgeIndex) => (
                          <span key={`${index}-${tone}-${badgeIndex}`} className={`tone-${tone}`} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <div className="deck-web-rail">
              <section className="deck-web-panel deck-web-panel-live">
                <header>
                  <strong>오늘 수업 현황</strong>
                  <span>LIVE</span>
                </header>
                <div className="deck-web-live-list">
                  {slide.overview.liveItems.map((item) => (
                    <article key={`${item.time}-${item.title}`} className={`deck-web-live-item tone-${item.tone}`}>
                      <div className="deck-web-live-meta">
                        <strong>{item.title}</strong>
                        <p>{item.location}</p>
                        <small>{item.state}</small>
                      </div>
                      <div className="deck-web-live-time">
                        <span>{item.time}</span>
                        <small>{item.badge}</small>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="deck-web-panel deck-web-panel-ai">
                <header>
                  <div className="deck-web-ai-badge">AI</div>
                  <button type="button">추천 내역 확인</button>
                </header>
                <strong>AI 대강 추천</strong>
                <p>미배정 수업에 적합한 강사를 자동 추천합니다.</p>
                <div className="deck-web-ai-stats">
                  <div>
                    <span>미배정 대기</span>
                    <strong>{slide.overview.recommendation.waiting}</strong>
                  </div>
                  <div>
                    <span>추천 가능 수업</span>
                    <strong>{slide.overview.recommendation.available}</strong>
                  </div>
                  <div>
                    <span>1순위 매칭 완료</span>
                    <strong>{slide.overview.recommendation.matched}</strong>
                  </div>
                </div>
              </section>

              <section className="deck-web-panel deck-web-panel-summary">
                <p className="deck-card-kicker">운영 현황 요약</p>
                <strong>{slide.overview.summary}</strong>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
