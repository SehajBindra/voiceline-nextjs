import type { Metadata } from "next"
import {
  AudioLinesIcon,
  Clock01Icon,
  HeadphonesIcon,
  MicVocalIcon,
} from "@hugeicons/core-free-icons"

import { ServicePage } from "@/components/sections/service-page"

export const metadata: Metadata = {
  title: "Studio Rental in Shahpur Jat, Delhi",
  description:
    "Fully equipped recording rooms for rent by the hour at Voiceline Studio, Shahpur Jat, Delhi. For independent artists, podcasters, and voice-over talent. Minimum booking 1 hour.",
  alternates: {
    canonical: "/services/studio-rental",
  },
  openGraph: {
    title: "Studio Rental in Shahpur Jat, Delhi | Voiceline Studio",
    description:
      "Professional recording equipment and acoustically treated rooms, available by the hour with optional engineer support.",
    url: "/services/studio-rental",
  },
}

export default function StudioRentalPage() {
  return (
    <ServicePage
      eyebrow="Studio Rental"
      title="Book pro studio time by the hour"
      accentWord="hour"
      intro="Treated rooms and pro gear in Shahpur Jat for artists, podcasters, and voice talent. Optional engineer support. Pay only for the time you use."
      image="/services/control-room-2.jpg"
      imageAlt="Voiceline Studio control room available for hourly rental"
      marginalia="Control room · By the hour"
      groups={[
        {
          heading: "What is included",
          items: [
            { title: "Professional recording equipment", text: "Pro gear in acoustically treated rooms.", icon: MicVocalIcon },
            { title: "Optional in-house engineer support", text: "An engineer on hand when you want one.", icon: HeadphonesIcon },
            { title: "Flexible hourly booking", text: "Book only the time you need.", icon: AudioLinesIcon },
          ],
        },
      ]}
      facts={[
        { label: "Minimum booking time", value: "1 hour, billed hourly thereafter.", icon: Clock01Icon },
      ]}
    />
  )
}
