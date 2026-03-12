import styles from "./DeckSlide01Scene.module.css";

type DeckSlide01SceneProps = {
  substep?: number;
};

const stages = [
  {
    time: "배정 직후",
    channel: "카카오톡",
    title: "누가 갈 수 있는지 몰라서 후보를 다시 확인합니다",
    body: "후보는 있어도 상태가 안 보여서 운영자는 메신저를 보내고, 답이 없으면 전화를 겹쳐서 하게 됩니다.",
    impactTitle: "전화 반복",
    impactBody: "판단이 아니라 확인이 먼저 시작됩니다.",
    channels: ["후보 6명", "회신 불명확", "전화 재시도"],
  },
  {
    time: "다음날 아침",
    channel: "이메일",
    title: "서명 완료 여부를 다시 묻기 위해 메일함을 뒤집니다",
    body: "계약은 발송됐지만 완료 상태가 실시간으로 보이지 않아, 메일과 메신저를 다시 열어 같은 질문을 반복합니다.",
    impactTitle: "재확인 누적",
    impactBody: "계약 상태가 기록이 아니라 기억에 남습니다.",
    channels: ["서명 대기", "메일 재검색", "다시 확인"],
  },
  {
    time: "수업 직전",
    channel: "전화",
    title: "출발했는지 모르니 최악을 가정하고 먼저 연락합니다",
    body: "도착 예상이 없어서 운영자는 늘 지연을 전제로 움직이고, 강사는 이동 중에도 응답 압박을 받습니다.",
    impactTitle: "불안 운영",
    impactBody: "준비가 아니라 걱정이 업무를 잡아먹습니다.",
    channels: ["출발 문의", "도착 미확정", "현장 대비"],
  },
];

export function DeckSlide01Scene({ substep = 0 }: DeckSlide01SceneProps) {
  const activeIndex = Math.min(substep, stages.length - 1);

  return (
    <div className={styles.scene}>
      <section className={styles.timeline} aria-label="관리자의 반복 확인 장면">
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
                {stage.channels.map((item) => (
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
              <span className={styles.impactTag}>friction {index + 1}</span>
              <strong>{stage.impactTitle}</strong>
              <p>{stage.impactBody}</p>
            </aside>
          </div>
        ))}
      </section>
    </div>
  );
}
