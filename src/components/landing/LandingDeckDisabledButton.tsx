import { PRESENTATION_URL } from '@/lib/presentation';

type LandingDeckDisabledButtonProps = {
  compact?: boolean;
  label?: string;
};

export function LandingDeckDisabledButton({
  compact = false,
  label = '발표자료 보기',
}: LandingDeckDisabledButtonProps) {
  const className = compact
    ? 'landing-compact-link'
    : 'button button-primary';

  return (
    <a
      className={className}
      href={PRESENTATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="presentation 앱의 발표 페이지를 새 탭에서 엽니다."
    >
      {label}
    </a>
  );
}
