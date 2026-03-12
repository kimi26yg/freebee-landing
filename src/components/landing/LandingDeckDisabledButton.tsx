type LandingDeckDisabledButtonProps = {
  compact?: boolean;
  label?: string;
};

export function LandingDeckDisabledButton({
  compact = false,
  label = "발표 페이지 준비 중",
}: LandingDeckDisabledButtonProps) {
  const className = compact
    ? "landing-compact-link landing-compact-link-disabled"
    : "button button-primary button-disabled";

  return (
    <span
      className={className}
      aria-disabled="true"
      title="발표 페이지는 별도 프로젝트로 분리해 두었습니다."
    >
      {label}
    </span>
  );
}
