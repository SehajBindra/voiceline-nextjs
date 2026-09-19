import type { Metadata } from "next"
import {
  AudioLinesIcon,
  MicVocalIcon,
  MusicNote01Icon,
  ScissorsIcon,
  ClapperboardIcon,
} from "@hugeicons/core-free-icons"

import { ServicePage } from "@/components/sections/service-page"

export const metadata: Metadata = {
  title: "Podcast Production in Delhi",
  description:
    "End-to-end podcast production at Voiceline Studio, Shahpur Jat, New Delhi. In-studio recording, editing, mixing, theme music, and video editing for video podcasts.",
  alternates: {
    canonical: "/services/podcast-production",
  },
  openGraph: {
    title: "Podcast Production in Delhi | Voiceline Studio",
    description:
      "Recording, editing, and full episode post-production, including video editing for podcast episodes.",
    url: "/services/podcast-production",
  },
}

export default function PodcastProductionPage() {
  return (
    <ServicePage
      eyebrow="Podcast Production"
      title="Make your podcast sound pro"
      accentWord="pro"
      intro="We record, edit, mix, and score your show in Shahpur Jat. You focus on the conversation."
      image="/services/podcast-room-1.jpeg"
      imageAlt="Podcast room at Voiceline Delhi for multi-mic recording"
      marginalia="Podcast room · Multi-mic"
      groups={[
        {
          heading: "What we offer",
          items: [
            { title: "In-studio recording", text: "Single host, multi-guest, and remote guest capture.", icon: MicVocalIcon },
            { title: "Audio editing", text: "Noise cleanup, pacing, and filler-word removal.", icon: ScissorsIcon },
            { title: "Mixing and mastering", text: "Consistent episode-to-episode sound.", icon: AudioLinesIcon },
            { title: "Intro, outro, and theme music", text: "Original music produced for your show.", icon: MusicNote01Icon },
            { title: "Video editing for video podcasts", text: "Edits for YouTube, Instagram, and more, synced directly to your final audio.", icon: ClapperboardIcon },
          ],
        },
      ]}
      facts={[
        {
          label: "Format",
          value:
            "Audio episodes and video podcasts, recorded and finished in one studio.",
          icon: AudioLinesIcon,
        },
        {
          label: "Consistency",
          value:
            "We keep every episode sounding consistent from intro to outro.",
          icon: ScissorsIcon,
        },
      ]}
    />
  )
}
