import { SectionV2 } from "@/components/hero/section-v2"
import { FaqSection } from "@/components/sections/faq-section"
import { SpacesSection } from "@/components/sections/spaces-section"
import { StudioIntroSection } from "@/components/sections/studio-intro-section"
import { TrainingSection } from "@/components/training/section"

export default function Page() {
  return (
    <main className="overflow-x-clip bg-background p-2 text-foreground sm:p-3">
      <SectionV2 />
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
