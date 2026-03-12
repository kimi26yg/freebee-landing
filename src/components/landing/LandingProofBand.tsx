import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { landingContent } from "@/lib/content";

export function LandingProofBand() {
  return (
    <SectionShell>
      <div className="landing-stack anim-section">
        <SectionHeading
          eyebrow="Validation"
          title="이것이 작동하는지, 어떻게 확인할 수 있을까요"
          body="설계가 실제로 문제를 해결하는지 검증하는 기준입니다. 이 지표들이 동시에 Free-B의 성공 기준이 됩니다."
        />
        <div className="proof-band-grid proof-band-grid-4">
          {landingContent.proofStats.map((item) => (
            <article key={item.label} className="proof-band-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
