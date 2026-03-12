import { LandingCardGrid } from "@/components/landing/LandingCardGrid";
import { LandingCarousel } from "@/components/landing/LandingCarousel";
import { LandingCtaCluster } from "@/components/landing/LandingCtaCluster";
import { LandingFeatureTabs } from "@/components/landing/LandingFeatureTabs";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingMobileTabBar } from "@/components/landing/LandingMobileTabBar";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { LandingProofBand } from "@/components/landing/LandingProofBand";
import { LandingSplitSections } from "@/components/landing/LandingSplitSections";
import { LandingHoverStoryAccordion } from "@/components/landing/LandingHoverStoryAccordion";
import { LandingStoryCard } from "@/components/landing/LandingStoryCard";
import { LandingStoryTimeline } from "@/components/landing/LandingStoryTimeline";

export function LandingPlayground() {
  return (
    <>
      <LandingNavbar />
      <main id="top" className="page-landing">
        <LandingHero />
        <LandingCardGrid />
        <LandingProofBand />
        <LandingFeatureTabs />
        <LandingSplitSections />
        <LandingHoverStoryAccordion />
        <LandingStoryTimeline />
        <LandingStoryCard />
        <LandingCarousel />
        <LandingCtaCluster />
        <LandingMobileTabBar />
      </main>
      <LandingFooter />
    </>
  );
}
