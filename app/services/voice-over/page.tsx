import type { Metadata } from "next"
import {
  AudioBook01Icon,
  ClapperboardIcon,
  Clock01Icon,
  LanguagesIcon,
  MicVocalIcon,
} from "@hugeicons/core-free-icons"

import { ServicePage } from "@/components/sections/service-page"

export const metadata: Metadata = {
  title: "Voice Over Recording in Delhi",
  description:
    "Professional voice-over recording for ads, e-learning, IVR, narration, and dubbing at Voiceline Studio, Shahpur Jat, New Delhi. 24-48 hour turnaround.",
  alternates: {
    canonical: "/services/voice-over",
  },
  openGraph: {
    title: "Voice Over Recording in Delhi | Voiceline Studio",
    description:
      "Ads, e-learning, IVR, narration, and dubbing recorded with professional voice artists in Shahpur Jat, New Delhi.",
    url: "/services/voice-over",
  },
}

export default function VoiceOverPage() {
  return (
    <ServicePage
      eyebrow="Voice Over"
      title="Give your script a pro voice"
      accentWord="pro"
      intro="Ads, e-learning, IVR, narration, and dubbing recorded in Shahpur Jat. Clean takes and 24 to 48 hour turnaround on most projects."
      image="/services/recording-studio-room.jpg"
      imageAlt="Voiceline Studio recording room in Shahpur Jat, Delhi"
      marginalia="Rec room · Vocal chain"
      groups={[
        {
          heading: "What we record",
          items: [
            { title: "Advertisements", text: "TV, radio, and digital spots.", icon: MicVocalIcon },
            { title: "E-learning and training narration", text: "Clear, paced delivery for courses and modules.", icon: AudioBook01Icon },
            { title: "IVR and on-hold messaging", text: "Polished phone system audio.", icon: MicVocalIcon },
            { title: "Corporate and explainer video voice-over", text: "Confident narration for business video.", icon: MicVocalIcon },
            { title: "Dubbing and localization", text: "Lip-aware dubbing across Indian languages.", icon: ClapperboardIcon },
            { title: "Audiobook narration", text: "Long-form narration with consistent tone.", icon: AudioBook01Icon },
          ],
        },
      ]}
      facts={[
        { label: "Turnaround time", value: "24-48 hours for most voice-over projects.", icon: Clock01Icon },
        { label: "Languages", value: "All Indian regional languages, as well as neutral English.", icon: LanguagesIcon },
      ]}
    />
  )
}
