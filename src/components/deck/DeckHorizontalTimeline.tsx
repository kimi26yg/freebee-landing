type DeckHorizontalTimelineProps = {
  items: Array<{
    eyebrow: string;
    title: string;
    body: string;
  }>;
  substep: number;
};

export function DeckHorizontalTimeline({ items, substep }: DeckHorizontalTimelineProps) {
  return (
    <div className="deck-horizontal-line">
      <div className="deck-horizontal-line-track" aria-hidden="true" />
      {items.map((item, index) => {
        const isVisible = substep >= index;

        return (
          <article
            key={item.title}
            className={`deck-horizontal-line-item ${isVisible ? "is-visible" : ""}`}
          >
            <div className="deck-horizontal-line-node" aria-hidden="true">
              <span className="deck-horizontal-line-dot" />
            </div>
            <div className="deck-horizontal-line-copy">
              <p className="deck-card-kicker">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
