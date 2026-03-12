import { BeeAccent } from "@/components/ui/BeeAccent";
import { Pill } from "@/components/ui/Pill";
import { SectionShell } from "@/components/ui/SectionShell";
import { landingContent } from "@/lib/content";

export function LandingHero() {
  return (
    <SectionShell style={{ paddingTop: "calc(var(--section-y) - 1rem)" }}>
      <div className="landing-hero">
        <div className="landing-hero-copy">
          <Pill tone="gold">{landingContent.hero.eyebrow}</Pill>
          <h1>
            {landingContent.hero.titleLines.map((line) => (
              <span key={line} className="landing-hero-title-line">
                {line}
              </span>
            ))}
          </h1>
          <p>{landingContent.hero.body}</p>
          <div className="landing-hero-actions">
            <a className="button button-primary" href="#pain">
              왜 필요한지 보기
            </a>
            <a className="button button-ghost" href="#system">
              시스템 미리보기
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat-item">
              <strong>0건</strong>
              <span>확인 전화</span>
            </div>
            <div className="hero-stat-item">
              <strong>70%↓</strong>
              <span>배정 소요 시간</span>
            </div>
            <div className="hero-stat-item">
              <strong>95%+</strong>
              <span>체크인 완료율</span>
            </div>
          </div>
        </div>
        <div className="landing-hero-visual">
          <div className="landing-preview-frame">
            <div className="preview-topbar">
              <div className="preview-chip">운영 상태 미리보기</div>
              <BeeAccent size={88} className="landing-preview-bee" />
            </div>
            <div className="preview-stat">
              <strong>확인하지 않아도 보이는 운영</strong>
              <span>배정·계약·체크인 상태를 한 화면에서 확인합니다.</span>
            </div>
            <div className="preview-flow">
              <div className="preview-flow-item">
                <span className="preview-flow-dot" />
                <div>
                  <strong>배정 요청</strong>
                  <p>AI가 후보를 정렬하고 추천 사유를 함께 보여줍니다</p>
                </div>
              </div>
              <div className="preview-flow-item">
                <span className="preview-flow-dot" />
                <div>
                  <strong>계약 진행</strong>
                  <p>전자서명과 발송 상태를 하나의 흐름으로 추적합니다</p>
                </div>
              </div>
              <div className="preview-flow-item">
                <span className="preview-flow-dot is-live" />
                <div>
                  <strong>출강 확인</strong>
                  <p>GPS 체크인으로 운영 근거를 자동 기록합니다</p>
                </div>
              </div>
            </div>
            <div className="preview-note">
              확인 전화 없이도 보입니다. 재촉 카톡 없이도 이어집니다.
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
