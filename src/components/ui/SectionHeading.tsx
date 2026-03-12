type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  mode?: "landing" | "deck";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  mode = "landing",
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading-${mode}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p className="section-body">{body}</p> : null}
    </header>
  );
}
