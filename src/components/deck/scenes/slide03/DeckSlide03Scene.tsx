import styles from "./DeckSlide03Scene.module.css";

type DeckSlide03SceneProps = {
  substep?: number;
};

const falseSignals = [
  "배정 · 계약 · 체크인이 느리다",
  "같은 수업을 채널별로 따로 확인한다",
  "확인 전화가 업무처럼 쌓인다",
];

const trueSignals = [
  "배정 요청 상태가 동시에 보이지 않는다",
  "서명 완료가 흐름으로 연결되지 않는다",
  "출발 · 도착 상태가 실시간으로 공유되지 않는다",
];

export function DeckSlide03Scene({ substep = 0 }: DeckSlide03SceneProps) {
  const revealTruth = substep >= 1;

  return (
    <div className={styles.scene}>
      <section className={styles.quoteBand}>
        <span className={styles.quoteKicker}>Reframe</span>
        <strong>문제는 느린 연락이 아니라 상태 가시성이었습니다.</strong>
      </section>

      <section className={styles.compare} aria-label="보이는 문제와 진짜 문제 비교">
        <article className={[styles.frame, styles.falseFrame, styles.isVisible].join(" ")}>
          <div className={styles.frameHead}>
            <span className={styles.frameLabel}>보이는 문제</span>
            <strong>연락이 느리다</strong>
          </div>
          <div className={styles.signalList}>
            {falseSignals.map((item) => (
              <div key={item} className={styles.signalItem}>
                <span className={styles.signalDot} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </article>

        <div className={styles.arrowRail} aria-hidden="true">
          <span className={[styles.arrow, revealTruth ? styles.arrowActive : ""].join(" ")}>→</span>
          <span className={styles.zeroCall}>0 통의 확인 전화</span>
        </div>

        <article
          className={[
            styles.frame,
            styles.trueFrame,
            revealTruth ? styles.isVisible : styles.isHidden,
          ].join(" ")}
        >
          <div className={styles.frameHead}>
            <span className={styles.frameLabel}>진짜 문제</span>
            <strong>같은 상태를 같은 시간에 보지 못한다</strong>
          </div>
          <div className={styles.signalList}>
            {trueSignals.map((item) => (
              <div key={item} className={styles.signalItem}>
                <span className={styles.signalDot} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
