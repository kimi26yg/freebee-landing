import styles from "./DeckSlide02Scene.module.css";

type DeckSlide02SceneProps = {
  substep?: number;
};

const stages = [
  {
    time: "배정 직후",
    channel: "요청 발송",
    title: "강사에게 카톡을 보내고 답을 기다립니다",
    body: "새 일을 시작하는 게 아니라, 요청이 제대로 전달됐는지부터 다시 확인합니다.",
    tags: ["후보 연락", "답변 대기", "확정 불명확"],
    impactTitle: "불확실 · 기다림",
    impactBody: "요청 상태가 어딘가에 기록돼 있길 원합니다.",
  },
  {
    time: "다음날 아침",
    channel: "계약 확인",
    title: "계약서가 나갔는지 메일함을 다시 뒤집니다",
    body: "어제 끝났어야 할 일이 맞는지 다시 확인합니다. 발송 여부와 진행 상태가 한 곳에 남아 있지 않습니다.",
    tags: ["메일 재검색", "서명 확인", "진행 상태 공백"],
    impactTitle: "혼란 · 피로",
    impactBody: "완료 상태를 한 화면에서 바로 보고 싶습니다.",
  },
  {
    time: "수업 당일",
    channel: "출발 재확인",
    title: "출발했는지 또 연락하고 전화를 겹칩니다",
    body: "당일 운영도 판단보다 재확인의 연속입니다. 이미 알아야 할 상태를 카톡과 전화로 다시 묻습니다.",
    tags: ["카톡 재확인", "출발 전화", "도착 예측 없음"],
    impactTitle: "긴장 · 체념",
    impactBody: "도착 전 상태를 운영자가 먼저 알고 싶습니다.",
  },
];

export function DeckSlide02Scene({ substep = 0 }: DeckSlide02SceneProps) {
  const activeIndex = Math.min(substep, stages.length - 1);

  return (
    <div className={styles.scene}>
      <section className={styles.timeline} aria-label="관리자의 하루 반복 장면">
        {stages.map((stage, index) => (
          <div key={stage.time} className={styles.row}>
            <article className={styles.timeCard}>
              <span className={styles.timeLabel}>Moment</span>
              <strong className={styles.timeValue}>{stage.time}</strong>
            </article>

            <article
              className={[
                styles.stageCard,
                styles.isVisible,
                index === activeIndex ? styles.isAccent : "",
              ].join(" ")}
            >
              <div className={styles.stageTop}>
                <span className={styles.stagePill}>
                  <i aria-hidden="true" />
                  {stage.channel}
                </span>
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
              <div className={styles.channelRow}>
                {stage.tags.map((item) => (
                  <span key={item} className={styles.channelChip}>
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <aside
              className={[
                styles.impactCard,
                styles.isVisible,
                index === activeIndex ? styles.isAccentCard : "",
              ].join(" ")}
            >
              <span className={styles.impactTag}>need {index + 1}</span>
              <strong>{stage.impactTitle}</strong>
              <p>{stage.impactBody}</p>
            </aside>
          </div>
        ))}
      </section>
    </div>
  );
}
