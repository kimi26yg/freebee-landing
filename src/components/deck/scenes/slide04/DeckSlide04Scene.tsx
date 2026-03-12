import styles from "./DeckSlide04Scene.module.css";

type DeckSlide04SceneProps = {
  substep?: number;
};

const states = [
  {
    step: "State 01",
    title: "배정 확정",
    body: "AI 추천으로 후보를 정렬하고, 운영자가 최종 선택합니다.",
    cue: "추천 + 선택",
  },
  {
    step: "State 02",
    title: "계약 서명",
    body: "전자서명과 확인 시점을 같은 흐름 안에서 실시간으로 묶습니다.",
    cue: "서명 + 동기화",
  },
  {
    step: "State 03",
    title: "출강 체크인",
    body: "출발·도착·로그 기록이 운영 근거로 자동 연결됩니다.",
    cue: "체크인 + 로그",
  },
];

export function DeckSlide04Scene({ substep = 0 }: DeckSlide04SceneProps) {
  const isLinked = substep >= 1;

  return (
    <div className={styles.scene}>
      <section className={styles.premise}>
        <span className={styles.premiseKicker}>State Flow</span>
        <strong>개별 기능을 따로 자동화하지 않고, 상태 전이의 연결부터 다시 설계했습니다.</strong>
      </section>

      <section className={styles.board} aria-label="배정 계약 체크인 상태 흐름">
        <div className={`${styles.track} ${isLinked ? styles.trackLinked : ""}`} aria-hidden="true" />

        <div className={styles.grid}>
          {states.map((state, index) => (
            <article
              key={state.step}
              className={[
                styles.card,
                substep === 0 ? styles.cardVisible : "",
                isLinked ? styles.cardLinked : "",
              ].join(" ")}
            >
              <div className={styles.cardTop}>
                <span className={styles.step}>{state.step}</span>
                <span className={styles.cue}>{state.cue}</span>
              </div>
              <h3>{state.title}</h3>
              <p>{state.body}</p>
              <div className={styles.nodeRow}>
                <span className={styles.node} />
                {index < states.length - 1 ? <span className={styles.miniLink} /> : null}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryBlock}>
            <span>운영자</span>
            <strong>같은 지도를 봅니다</strong>
          </div>
          <div className={styles.summaryBlock}>
            <span>AI</span>
            <strong>추천과 알림을 흐름 위에 얹습니다</strong>
          </div>
        </div>
      </section>
    </div>
  );
}
