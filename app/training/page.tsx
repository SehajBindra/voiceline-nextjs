import type { Metadata } from "next"
import { TrainingArchHero } from "@/components/sections/training-arch-hero"
import { TrainingCoursesSection } from "@/components/sections/training-courses-section"
import { TrainingFeaturesSection } from "@/components/sections/training-features-section"

export const metadata: Metadata = {
  title: "Voice Training in Delhi",
  description:
    "Hudson Voice Technique training at Voiceline Studio, Shahpur Jat. One-on-one, group, and corporate voice training with Voice Master International UK affiliation.",
  alternates: {
    canonical: "/training",
  },
  openGraph: {
    title: "Voice Training in Delhi | Voiceline Studio",
    description:
      "Hudson Voice Technique training at Voiceline Studio, Shahpur Jat. One-on-one, group, and corporate voice training.",
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
      <TrainingCoursesSection />
    </main>
  )
}
