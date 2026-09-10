import type { Metadata } from "next"

import { FooterSection } from "@/components/sections/footer-section"
import { TrainingArchHero } from "@/components/sections/training-arch-hero"
import { TrainingCoursesSection } from "@/components/sections/training-courses-section"
import { TrainingEnquireSection } from "@/components/sections/training-enquire-section"
import { TrainingExpertsSection } from "@/components/sections/training-experts-section"
import { TrainingHudsonSection } from "@/components/sections/training-hudson-section"
import { TrainingFeaturesSection } from "@/components/sections/training-features-section"

export const metadata: Metadata = {
  title: "Voice Training in Delhi",
  description:
    "Hudson Voice Technique training at Voiceline Studio, Shahpur Jat. One-on-one and home study courses with Voice Master International UK affiliation.",
  alternates: {
    canonical: "/training",
  },
  openGraph: {
    title: "Voice Training in Delhi | Voiceline Studio",
    description:
      "Hudson Voice Technique training at Voiceline Studio, Shahpur Jat. One-on-one and home study courses.",
    url: "/training",
    images: [
      {
        url: "/hero/recording-booth.jpg",
        width: 1200,
        height: 630,
        alt: "Voiceline Studio recording booth for voice training",
      },
    ],
  },
}

export default function TrainingPage() {
  return (
    <main className="overflow-x-clip bg-background p-2 text-foreground sm:p-3">
      <TrainingArchHero />
      <TrainingFeaturesSection />
      {/*<TrainingHudsonSection />*/}
      {/*<TrainingExpertsSection />*/}
      <TrainingCoursesSection />
      {/*<TrainingEnquireSection />*/}
    </main>
  )
}
