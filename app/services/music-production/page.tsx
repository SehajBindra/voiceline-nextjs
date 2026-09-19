import type { Metadata } from "next"
import {
  AudioLinesIcon,
  Clock01Icon,
  MusicNote01Icon,
  PodcastIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"

import { ServicePage } from "@/components/sections/service-page"

export const metadata: Metadata = {
  title: "Music Production, Mixing and Mastering in Delhi",
  description:
    "Original music production, mixing, and mastering for brands, artists, and creators at Voiceline Studio, Shahpur Jat, New Delhi. Jingles, BGMs, scores, and broadcast-ready masters.",
  alternates: {
    canonical: "/services/music-production",
  },
  openGraph: {
    title: "Music Production, Mixing and Mastering in Delhi | Voiceline Studio",
    description:
      "Original scores, jingles, brand BGMs, and broadcast-ready mixing and mastering across genres, produced in-house.",
    url: "/services/music-production",
  },
}

export default function MusicProductionPage() {
  return (
    <ServicePage
      eyebrow="Music Production"
      title="From demo to finished master"
      accentWord="master"
      intro="Jingles, brand BGMs, scores, and full productions for brands and artists."
      image="/services/control-room-1.jpg"
      imageAlt="Music producer and audio engineer editing a track in the control room"
      marginalia="Production suite · Studio One"
      groups={[
        {
          heading: "What we produce",
          items: [
            { title: "Brand BGMs and sonic identities", text: "Music your brand can own.", icon: MusicNote01Icon },
            { title: "Advertising jingles", text: "Short, memorable campaign music.", icon: MusicNote01Icon },
            { title: "Original scores for video and film", text: "Composed to picture, on brief.", icon: SparklesIcon },
            { title: "Genre production", text: "Devotional, hip-hop, pop, electronic, and more.", icon: MusicNote01Icon },
            { title: "Podcast intros, outros, and theme music", text: "A consistent sound for your show.", icon: PodcastIcon },
          ],
        },
        {
          heading: "Mixing and mastering",
          items: [
            { title: "Full track mixing", text: "Mixing across genres.", icon: AudioLinesIcon },
            { title: "Mastering", text: "Masters for streaming platforms, broadcast, and film.", icon: AudioLinesIcon },
            { title: "Podcast episode mixing", text: "Mixing with loudness normalization.", icon: PodcastIcon },
            { title: "Stem mixing and revisions", text: "Grouped control with room to revise.", icon: AudioLinesIcon },
          ],
        },
      ]}
      facts={[
        {
          label: "Turnaround",
          value: "Scoped per project. Reach out for a clear timeline.",
          icon: Clock01Icon,
        },
        {
          label: "Finish",
          value:
            "Mixed and mastered in-house, ready for streaming and broadcast.",
          icon: AudioLinesIcon,
        },
      ]}
    />
  )
}
