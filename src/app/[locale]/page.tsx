import { Hero } from "@/components/sections/hero";
import { ImpactStrip } from "@/components/sections/impact-strip";
import { MissionPreview } from "@/components/sections/mission-preview";
import { ProgramGrid } from "@/components/sections/program-grid";
import { FeaturedStory } from "@/components/sections/featured-story";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import { TimelinePreview } from "@/components/sections/timeline-preview";
import { PartnerLogos } from "@/components/sections/partner-logos";
import { ClosingCta } from "@/components/sections/closing-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactStrip />
      <MissionPreview />
      <ProgramGrid />
      <FeaturedStory />
      <PhotoGallery />
      <TimelinePreview />
      <PartnerLogos />
      <ClosingCta />
    </main>
  );
}
