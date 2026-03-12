import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { landingContent } from "@/lib/content";

export function LandingCardGrid() {
  return (
    <SectionShell>
      <div id="pain" className="landing-stack anim-section">
        <SectionHeading
          eyebrow="Empathize"
          title="운영 담당자의 하루는 세 가지 불안으로 구성되어 있었습니다"
          body="시스템을 만들기 전에 사람을 먼저 봤습니다. 매일 반복되는 확인, 재촉, 기다림 — 그 감정을 따라갔습니다."
        />
        <div className="landing-grid-3">
          {landingContent.painCards.map((item) => (
            <SurfaceCard
              key={item.title}
              accent={item.accent as "gold" | "blue" | "green"}
            >
              <div className="pain-card-header">
                <span className="pain-card-emoji">{item.emoji}</span>
                <span className="pain-card-time">{item.time}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="pain-card-emotion">{item.emotion}</div>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
