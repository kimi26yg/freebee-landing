import type { DeckCanvasSlide } from "./types";
import styles from "./DeckStrategicScene.module.css";

type DeckStrategicSceneProps = {
  slide: DeckCanvasSlide;
};

export function DeckStrategicScene({ slide }: DeckStrategicSceneProps) {
  switch (slide.id) {
    case "state-flow":
      return <StateFlowScene slide={slide} />;
    case "web-ai-recommendation":
      return <WebAiScene slide={slide} />;
    case "web-journey":
      return <WebJourneyScene slide={slide} />;
    case "app-overview":
      return <AppOverviewScene slide={slide} />;
    case "app-contract-sign":
      return <ContractSyncScene slide={slide} />;
    case "app-checkin":
      return <CheckinScene slide={slide} />;
    case "app-mlkit":
      return <MlkitScene slide={slide} />;
    case "app-gps":
      return <GpsScene slide={slide} />;
    case "app-performance":
      return <PerformanceScene slide={slide} />;
    case "app-summary":
      return <AppSummaryScene slide={slide} />;
    case "impact-metrics":
      return <ImpactScene slide={slide} />;
    case "market-opportunity":
      return <MarketScene slide={slide} />;
    case "competition":
      return <CompetitionScene slide={slide} />;
    case "before-after":
      return <BeforeAfterScene slide={slide} />;
    case "expansion-vision":
      return <ExpansionScene slide={slide} />;
    case "ai-briefing":
      return <BriefingScene slide={slide} />;
    case "pricing":
      return <PricingScene slide={slide} />;
    case "closing-card":
      return <ClosingScene slide={slide} />;
    default:
      return null;
  }
}

function StateFlowScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.stateFlowScene}`}>
      {slide.canvas.metrics.map((metric, index) => (
        <article key={metric.label} className={styles.stateFlowStage}>
          <span>{metric.value}</span>
          <strong>{metric.label}</strong>
          <p>{metric.body}</p>
          {index < slide.canvas.metrics.length - 1 ? <i className={styles.stateFlowArrow}>→</i> : null}
        </article>
      ))}
      <div className={styles.stateFlowFooter}>
        {slide.canvas.columns.map((column) => (
          <section key={column.title}>
            <h3>{column.title}</h3>
            {column.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

function WebAiScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.webAiScene}`}>
      <div className={styles.webAiRail}>
        {slide.canvas.columns.map((column, index) => (
          <article key={column.title} className={styles.webAiStep}>
            <span>{`0${index + 1}`}</span>
            <div>
              <h3>{column.title}</h3>
              {column.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className={styles.webAiPanel}>
        <p>{slide.canvas.badge}</p>
        <strong>{slide.canvas.emphasis}</strong>
        <div className={styles.webAiMetrics}>
          {slide.canvas.metrics.map((metric) => (
            <article key={metric.label}>
              <span>{metric.value}</span>
              <strong>{metric.label}</strong>
              <p>{metric.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function WebJourneyScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.webJourneyScene}`}>
      {slide.canvas.metrics.map((metric, index) => (
        <article key={metric.label} className={styles.webJourneyPhase}>
          <span>{metric.value}</span>
          <strong>{metric.label}</strong>
          <p>{metric.body}</p>
          {index < slide.canvas.metrics.length - 1 ? <i>→</i> : null}
        </article>
      ))}
      <div className={styles.webJourneySummary}>
        {slide.canvas.columns.map((column) => (
          <section key={column.title}>
            <h3>{column.title}</h3>
            {column.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

function AppOverviewScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.appOverviewScene}`}>
      <div className={styles.appOverviewCore}>
        <p>{slide.canvas.badge}</p>
        <strong>{slide.canvas.emphasis}</strong>
      </div>
      {slide.canvas.metrics.map((metric, index) => (
        <article key={metric.label} className={`${styles.appOverviewNode} ${styles[`appOverviewNode${index + 1}`] ?? ""}`}>
          <span>{metric.value}</span>
          <strong>{metric.label}</strong>
          <p>{metric.body}</p>
        </article>
      ))}
    </div>
  );
}

function ContractSyncScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.contractSyncScene}`}>
      {slide.canvas.metrics.map((metric, index) => (
        <article key={metric.label} className={styles.contractSyncCard}>
          <span>{metric.value}</span>
          <strong>{metric.label}</strong>
          <p>{metric.body}</p>
          {index < slide.canvas.metrics.length - 1 ? <i>→</i> : null}
        </article>
      ))}
    </div>
  );
}

function CheckinScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.checkinScene}`}>
      <div className={styles.checkinTrack}>
        {slide.canvas.metrics.map((metric) => (
          <article key={metric.label} className={styles.checkinPoint}>
            <span>{metric.value}</span>
            <strong>{metric.label}</strong>
            <p>{metric.body}</p>
          </article>
        ))}
      </div>
      <div className={styles.checkinSummary}>
        {slide.canvas.columns.map((column) => (
          <section key={column.title}>
            <h3>{column.title}</h3>
            {column.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

function MlkitScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.mlkitScene}`}>
      <div className={styles.mlkitSources}>
        {slide.canvas.columns[0].lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <div className={styles.mlkitEngine}>
        <p>{slide.canvas.badge}</p>
        <strong>{slide.canvas.emphasis}</strong>
      </div>
      <div className={styles.mlkitResults}>
        {slide.canvas.metrics.map((metric) => (
          <article key={metric.label}>
            <span>{metric.value}</span>
            <strong>{metric.label}</strong>
            <p>{metric.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function GpsScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.gpsScene}`}>
      <div className={styles.gpsRadar}>
        <div className={styles.gpsPulse} />
        <strong>GPS</strong>
      </div>
      <div className={styles.gpsAlerts}>
        {slide.canvas.metrics.map((metric) => (
          <article key={metric.label}>
            <span>{metric.value}</span>
            <strong>{metric.label}</strong>
            <p>{metric.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function PerformanceScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.performanceScene}`}>
      <div className={styles.performanceMetrics}>
        {slide.canvas.metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.body}</p>
          </article>
        ))}
      </div>
      <div className={styles.performanceGrid}>
        {slide.canvas.columns.map((column) => (
          <section key={column.title}>
            <h3>{column.title}</h3>
            {column.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

function AppSummaryScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.appSummaryScene}`}>
      <div className={styles.appPath}>
        {slide.canvas.metrics.map((metric, index) => (
          <div key={metric.label} className={styles.appStep}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{metric.label}</strong>
              <p>{metric.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.appManifest}>
        <p>{slide.canvas.badge}</p>
        <strong>{slide.canvas.emphasis}</strong>
        <h3>{slide.canvas.footer}</h3>
      </div>
    </div>
  );
}

function ImpactScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.impactScene}`}>
      {slide.canvas.metrics.map((metric, index) => (
        <article key={metric.label} className={`${styles.impactPoster} ${styles[`impactPoster${index + 1}`] ?? ""}`}>
          <span>{metric.label}</span>
          <strong>{metric.value}</strong>
          <p>{metric.body}</p>
        </article>
      ))}
    </div>
  );
}

function MarketScene({ slide }: DeckStrategicSceneProps) {
  const [population, volume, growth] = slide.canvas.metrics;

  return (
    <div className={`${styles.scene} ${styles.marketScene}`}>
      <div className={styles.marketOrbit}>
        <div className={styles.marketRingOuter}>
          <strong>{population.value}</strong>
          <span>{population.label}</span>
        </div>
        <div className={styles.marketRingMid}>
          <strong>{volume.value}</strong>
          <span>{volume.label}</span>
        </div>
        <div className={styles.marketRingInner}>
          <strong>{growth.value}</strong>
          <span>{growth.label}</span>
        </div>
      </div>
      <div className={styles.marketNotes}>
        {slide.canvas.columns.map((column) => (
          <section key={column.title}>
            <h3>{column.title}</h3>
            {column.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

function CompetitionScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.competitionScene}`}>
      <article className={styles.competitionPanel}>
        <p>현재 운영</p>
        <div className={styles.competitionChaos}>
          {slide.canvas.columns[0].lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </article>
      <article className={`${styles.competitionPanel} ${styles.competitionPanelCenter}`}>
        <p>{slide.canvas.columns[1].title}</p>
        <strong>흐름이 끊기면 판단 근거도 남지 않습니다.</strong>
        <div className={styles.competitionNotes}>
          {slide.canvas.columns[1].lines.map((line) => (
            <em key={line}>{line}</em>
          ))}
        </div>
      </article>
      <article className={`${styles.competitionPanel} ${styles.competitionPanelResolve}`}>
        <p>Free-B</p>
        <strong>하나의 상태 흐름</strong>
        <div className={styles.competitionResolve}>
          {slide.canvas.columns[2].lines.map((line) => (
            <b key={line}>{line}</b>
          ))}
        </div>
      </article>
    </div>
  );
}

function BeforeAfterScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.beforeAfterScene}`}>
      {slide.canvas.columns.map((column) => {
        const [beforeLine, afterLine] = column.lines;

        return (
          <section key={column.title} className={styles.compareLane}>
            <h3>{column.title}</h3>
            <div className={styles.compareBlock}>
              <span>Before</span>
              <p>{beforeLine.replace("Before: ", "")}</p>
            </div>
            <div className={styles.compareArrow}>→</div>
            <div className={`${styles.compareBlock} ${styles.compareBlockAfter}`}>
              <span>After</span>
              <p>{afterLine.replace("After: ", "")}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function ExpansionScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.expansionScene}`}>
      <div className={styles.expansionHub}>Free-B</div>
      {slide.canvas.metrics.map((metric, index) => (
        <div key={metric.label} className={`${styles.expansionNode} ${styles[`expansionNode${index + 1}`] ?? ""}`}>
          <span>{metric.label}</span>
          <strong>{metric.value}</strong>
          <p>{metric.body}</p>
        </div>
      ))}
    </div>
  );
}

function BriefingScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.briefingScene}`}>
      <div className={styles.briefingHeader}>
        <p>{slide.canvas.badge}</p>
        <strong>{slide.canvas.emphasis}</strong>
      </div>
      <div className={styles.briefingFeed}>
        {slide.canvas.columns.map((column, index) => (
          <article key={column.title} className={styles.briefingItem}>
            <span>{`${String(index + 8).padStart(2, "0")}:00`}</span>
            <div>
              <h3>{column.title}</h3>
              {column.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function PricingScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.pricingScene}`}>
      {slide.canvas.metrics.map((metric, index) => (
        <div key={metric.label} className={`${styles.pricingTier} ${styles[`pricingTier${index + 1}`] ?? ""}`}>
          <span>{metric.label}</span>
          <strong>{metric.value}</strong>
          <p>{metric.body}</p>
        </div>
      ))}
    </div>
  );
}

function ClosingScene({ slide }: DeckStrategicSceneProps) {
  return (
    <div className={`${styles.scene} ${styles.closingScene}`}>
      <p className={styles.closingEyebrow}>{slide.canvas.badge}</p>
      <blockquote>{slide.canvas.footer}</blockquote>
      <div className={styles.closingWords}>
        {slide.canvas.metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
