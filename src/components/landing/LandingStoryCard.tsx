import { SectionShell } from "@/components/ui/SectionShell";
import { landingContent } from "@/lib/content";

export function LandingStoryCard() {
  const story = landingContent.storyCard;

  return (
    <SectionShell style={{ paddingTop: "1rem", paddingBottom: "2.2rem" }}>
      <article className="story-card anim-section">
        <div className="story-card-kicker">{story.eyebrow}</div>
        <blockquote>{story.quote}</blockquote>
        {story.attribution && (
          <cite className="story-card-attribution">{story.attribution}</cite>
        )}
        <p>{story.body}</p>
      </article>
    </SectionShell>
  );
}
