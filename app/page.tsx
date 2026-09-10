import { HeroSectionV2 } from "@/components/sections/hero-section-v2"
import { FaqSection } from "@/components/sections/faq-section"
import { SpacesSection } from "@/components/sections/spaces-section"
import { StudioIntroSection } from "@/components/sections/studio-intro-section"
import { TrainingSection } from "@/components/sections/training-section"

export default function Page() {
  return (
    <main className="overflow-x-clip bg-background p-2 text-foreground sm:p-3">
      <HeroSectionV2 />
      {/* <ChromaticImageProductHeroDemo /> */}
      <StudioIntroSection />
      {/*<ServicesSection />*/}
      <SpacesSection />
      <TrainingSection />
      {/*<TeamSection />*/}
      <FaqSection />
      {/*<ContactSection />*/}
    </main>
  )
}
