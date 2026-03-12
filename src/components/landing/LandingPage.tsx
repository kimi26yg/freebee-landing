import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingCardGrid } from "@/components/landing/LandingCardGrid";
import { LandingStoryCard } from "@/components/landing/LandingStoryCard";
import { LandingStoryTimeline } from "@/components/landing/LandingStoryTimeline";
import { LandingSplitSections } from "@/components/landing/LandingSplitSections";
import { LandingFeatureTabs } from "@/components/landing/LandingFeatureTabs";
import { LandingCarousel } from "@/components/landing/LandingCarousel";
import { LandingProofBand } from "@/components/landing/LandingProofBand";
import { LandingCtaCluster } from "@/components/landing/LandingCtaCluster";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { ScrollReveal } from "@/components/landing/ScrollReveal";

export function LandingPage() {
  return (
    <>
      <ScrollReveal />
      <LandingNavbar />
      <main id="top" className="page-landing">
        <LandingHero />
        <LandingCardGrid />
        <LandingStoryCard />
        <LandingStoryTimeline />
        <LandingSplitSections />
        <LandingFeatureTabs />
        <LandingCarousel />
        <LandingProofBand />
        <LandingCtaCluster />
      </main>
      <LandingFooter />
    </>
  );
}
