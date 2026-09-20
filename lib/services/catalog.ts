import type { Metadata } from "next"
import {
  AudioBook01Icon,
  AudioLinesIcon,
  ClapperboardIcon,
  Clock01Icon,
  HeadphonesIcon,
  LanguagesIcon,
  MicVocalIcon,
  MusicNote01Icon,
  PodcastIcon,
  ScissorsIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"

import type { ServicePageProps } from "@/components/services/detail-page"

export const serviceSlugs = [
  "voice-over",
  "music-production",
  "podcast-production",
  "studio-rental",
] as const

export type ServiceSlug = (typeof serviceSlugs)[number]

type ServiceCatalogEntry = ServicePageProps & {
  metadata: Metadata
}

function serviceMetadata(
  slug: ServiceSlug,
  title: string,
  description: string,
  openGraphTitle: string,
): Metadata {
  const path = `/services/${slug}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: openGraphTitle,
      description,
      url: path,
    },
  }
}

export const serviceCatalog: Record<ServiceSlug, ServiceCatalogEntry> = {
  "voice-over": {
    metadata: serviceMetadata(
      "voice-over",
      "Voice Over Recording in Delhi",
      "Professional voice-over recording for ads, e-learning, IVR, narration, and dubbing at Voiceline Studio, Shahpur Jat, New Delhi. 24-48 hour turnaround.",
      "Voice Over Recording in Delhi | Voiceline Studio",
    ),
    eyebrow: "Voice Over",
    title: "Give your script a pro voice",
    accentWord: "pro",
    intro:
      "Ads, e-learning, IVR, narration, and dubbing recorded in Shahpur Jat. Clean takes and 24 to 48 hour turnaround on most projects.",
    image: "/services/recording-studio-room.jpg",
    imageAlt: "Voiceline Studio recording room in Shahpur Jat, Delhi",
    marginalia: "Rec room · Vocal chain",
    groups: [
      {
        heading: "What we record",
        items: [
          {
            title: "Advertisements",
            text: "TV, radio, and digital spots.",
            icon: MicVocalIcon,
          },
          {
            title: "E-learning and training narration",
            text: "Clear, paced delivery for courses and modules.",
            icon: AudioBook01Icon,
          },
          {
            title: "IVR and on-hold messaging",
            text: "Polished phone system audio.",
            icon: MicVocalIcon,
          },
          {
            title: "Corporate and explainer video voice-over",
            text: "Confident narration for business video.",
            icon: MicVocalIcon,
          },
          {
            title: "Dubbing and localization",
            text: "Lip-aware dubbing across Indian languages.",
            icon: ClapperboardIcon,
          },
          {
            title: "Audiobook narration",
            text: "Long-form narration with consistent tone.",
            icon: AudioBook01Icon,
          },
        ],
      },
    ],
    facts: [
      {
        label: "Turnaround time",
        value: "24-48 hours for most voice-over projects.",
        icon: Clock01Icon,
      },
      {
        label: "Languages",
        value: "All Indian regional languages, as well as neutral English.",
        icon: LanguagesIcon,
      },
    ],
  },
  "music-production": {
    metadata: serviceMetadata(
      "music-production",
      "Music Production, Mixing and Mastering in Delhi",
      "Original music production, mixing, and mastering for brands, artists, and creators at Voiceline Studio, Shahpur Jat, New Delhi. Jingles, BGMs, scores, and broadcast-ready masters.",
      "Music Production, Mixing and Mastering in Delhi | Voiceline Studio",
    ),
    eyebrow: "Music Production",
    title: "From demo to finished master",
    accentWord: "master",
    intro:
      "Jingles, brand BGMs, scores, and full productions for brands and artists.",
    image: "/services/control-room-1.jpg",
    imageAlt:
      "Music producer and audio engineer editing a track in the control room",
    marginalia: "Production suite · Studio One",
    groups: [
      {
        heading: "What we produce",
        items: [
          {
            title: "Brand BGMs and sonic identities",
            text: "Music your brand can own.",
            icon: MusicNote01Icon,
          },
          {
            title: "Advertising jingles",
            text: "Short, memorable campaign music.",
            icon: MusicNote01Icon,
          },
          {
            title: "Original scores for video and film",
            text: "Composed to picture, on brief.",
            icon: SparklesIcon,
          },
          {
            title: "Genre production",
            text: "Devotional, hip-hop, pop, electronic, and more.",
            icon: MusicNote01Icon,
          },
          {
            title: "Podcast intros, outros, and theme music",
            text: "A consistent sound for your show.",
            icon: PodcastIcon,
          },
        ],
      },
      {
        heading: "Mixing and mastering",
        items: [
          {
            title: "Full track mixing",
            text: "Mixing across genres.",
            icon: AudioLinesIcon,
          },
          {
            title: "Mastering",
            text: "Masters for streaming platforms, broadcast, and film.",
            icon: AudioLinesIcon,
          },
          {
            title: "Podcast episode mixing",
            text: "Mixing with loudness normalization.",
            icon: PodcastIcon,
          },
          {
            title: "Stem mixing and revisions",
            text: "Grouped control with room to revise.",
            icon: AudioLinesIcon,
          },
        ],
      },
    ],
    facts: [
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
    ],
  },
  "podcast-production": {
    metadata: serviceMetadata(
      "podcast-production",
      "Podcast Production in Delhi",
      "End-to-end podcast production at Voiceline Studio, Shahpur Jat, New Delhi. In-studio recording, editing, mixing, theme music, and video editing for video podcasts.",
      "Podcast Production in Delhi | Voiceline Studio",
    ),
    eyebrow: "Podcast Production",
    title: "Make your podcast sound pro",
    accentWord: "pro",
    intro:
      "We record, edit, mix, and score your show in Shahpur Jat. You focus on the conversation.",
    image: "/services/podcast-room-1.jpeg",
    imageAlt: "Podcast room at Voiceline Delhi for multi-mic recording",
    marginalia: "Podcast room · Multi-mic",
    groups: [],
    offeringsBento: {
      heading: "What we offer",
      subheading:
        "Five steps, one studio in Shahpur Jat — from the first mic check to the published episode.",
      cells: [
        {
          step: 1,
          title: "In-studio recording",
          text: "Single host, multi-guest, and remote guest capture with matched levels and headphone mixes.",
          visual: {
            kind: "doodle",
            src: "/services/doodles/podcast.webp",
            alt: "Two podcast hosts recording at a round table with microphones",
          },
        },
        {
          step: 2,
          title: "Audio editing",
          text: "Noise cleanup, pacing, and filler-word removal so the conversation stays natural.",
          visual: {
            kind: "doodle",
            src: "/services/doodles/editing.webp",
            alt: "Engineer editing a multitrack timeline on studio monitors",
          },
        },
        {
          step: 3,
          title: "Mixing and mastering",
          text: "Consistent loudness and tone from episode one through your latest release.",
          visual: {
            kind: "doodle",
            src: "/services/doodles/podcast-mixing.webp",
            alt: "Engineer mixing and mastering a podcast on a console with a waveform meter",
          },
        },
        {
          step: 4,
          title: "Intro, outro, and theme music",
          text: "Original stingers and theme beds for your show’s identity.",
          gridClass: "lg:col-span-3",
          visual: {
            kind: "doodle",
            src: "/services/doodles/music.webp",
            alt: "Producer working on theme music at a desk with monitors",
          },
        },
        {
          step: 5,
          title: "Video editing for video podcasts",
          text: "Multicam cuts, captions, and social clips synced to your final mix.",
          gridClass: "lg:col-span-3",
          visual: {
            kind: "doodle",
            src: "/services/doodles/podcast-video.webp",
            alt: "Editor cutting a multicam video podcast on a timeline with captions",
          },
        },
      ],
    },
    facts: [
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
    ],
  },
  "studio-rental": {
    metadata: serviceMetadata(
      "studio-rental",
      "Studio Rental in Shahpur Jat, Delhi",
      "Fully equipped recording rooms for rent by the hour at Voiceline Studio, Shahpur Jat, Delhi. For independent artists, podcasters, and voice-over talent. Minimum booking 1 hour.",
      "Studio Rental in Shahpur Jat, Delhi | Voiceline Studio",
    ),
    eyebrow: "Studio Rental",
    title: "Book pro studio time by the hour",
    accentWord: "hour",
    intro:
      "Treated rooms and pro gear in Shahpur Jat for artists, podcasters, and voice talent. Optional engineer support. Pay only for the time you use.",
    image: "/services/control-room-2.jpg",
    imageAlt: "Voiceline Studio control room available for hourly rental",
    marginalia: "Control room · By the hour",
    groups: [
      {
        heading: "What is included",
        items: [
          {
            title: "Professional recording equipment",
            text: "Pro gear in acoustically treated rooms.",
            icon: MicVocalIcon,
          },
          {
            title: "Optional in-house engineer support",
            text: "An engineer on hand when you want one.",
            icon: HeadphonesIcon,
          },
          {
            title: "Flexible hourly booking",
            text: "Book only the time you need.",
            icon: AudioLinesIcon,
          },
        ],
      },
    ],
    facts: [
      {
        label: "Minimum booking time",
        value: "1 hour, billed hourly thereafter.",
        icon: Clock01Icon,
      },
    ],
  },
}

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(slug)
}

export function getService(slug: ServiceSlug) {
  return serviceCatalog[slug]
}
