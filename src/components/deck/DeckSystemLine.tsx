type DeckSystemLineProps = {
  items: Array<{
    eyebrow: string;
    title: string;
    body: string;
  }>;
};

export function DeckSystemLine({ items }: DeckSystemLineProps) {
  return (
    <div className="deck-system-line">
      {items.map((item, itemIndex) => (
        <article key={item.title} className="deck-system-line-item">
          <div className="deck-system-line-marker" aria-hidden="true">
            <span className={`deck-system-line-dot ${itemIndex === items.length - 1 ? "is-live" : ""}`} />
            {itemIndex < items.length - 1 ? <span className="deck-system-line-stem" /> : null}
          </div>
          <div className="deck-system-line-copy">
            <p className="deck-card-kicker">{item.eyebrow}</p>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
