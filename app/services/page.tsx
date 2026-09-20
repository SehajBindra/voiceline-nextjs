import type { Metadata } from "next"

import { GearSection } from "@/components/services/gear-section"
import { Hero } from "@/components/services/hero"
import { OfferingsSection } from "@/components/services/offerings-section"
import { RoomsSection } from "@/components/services/rooms-section"

export const metadata: Metadata = {
  title: "Studio Services in Delhi",
  description:
    "Recording, music production, podcast, dubbing, sound editing, mixing and voiceover in Indian languages at Voiceline Studio, Shahpur Jat, Delhi.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Studio Services in Delhi | Voiceline Studio",
    description:
      "Recording Studio Room, Music Production room and Podcast Room in Shahpur Jat, plus dubbing, editing, mixing and Hudson voice training.",
    url: "/services",
    images: [
      {
        url: "/services/recording-studio-room.jpg",
        width: 1200,
        height: 630,
        alt: "Voiceline Studio recording room in Shahpur Jat, Delhi",
      },
    ],
  },
}

export default function ServicesPage() {
  return (
    <main className="overflow-x-clip bg-background p-2 text-foreground">
      <Hero />
      <RoomsSection />
      <OfferingsSection />
      <GearSection />
    </main>
  )
}
