"use client"

import Link from "next/link"
import {
  AudioLinesIcon,
  ClapperboardIcon,
  Film02Icon,
  Globe02Icon,
  MicVocalIcon,
  MusicNote01Icon,
  ScissorsIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Section } from "@/components/section"

const slateChip =
  "rounded-sm bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"

// All copy condensed from https://voiceline.in/studio-services/
const offerings = [
  {
    name: "Voiceover & music recording",
    description:
      "High-quality voiceovers for TV ads, narrations, audiobooks and music, from production to voice training courses.",
    icon: MicVocalIcon,
  },
  {
    name: "Professional dubbing",
    description:
      "Industry-standard dubbing for films, series and commercials in our South Delhi studio.",
    icon: ClapperboardIcon,
  },
  {
    name: "Expert sound editing",
    description:
      "Sound editing for film, advertisement or audiobook with high-end solutions to bring your vision to life.",
    icon: ScissorsIcon,
  },
  {
    name: "Creative sound design",
    description:
      "Soundtracks for films and animations using the latest audio production tech in our foley setup.",
    icon: SparklesIcon,
  },
  {
    name: "Mixing & mastering",
    description:
      "Comprehensive post-production for music, films and ads with your audio perfectly polished.",
    icon: AudioLinesIcon,
  },
  {
    name: "Music production",
    description:
      "Tailored music services from background scores to jingles, with industry-connected producers.",
    icon: MusicNote01Icon,
  },
  {
    name: "Indian-language voiceover",
    description:
      "Voiceover in all Indian languages, specializing in neutral Hindi and English for films and ads.",
    icon: Globe02Icon,
  },
  {
    name: "Voice training",
    description:
      "Hudson Voice Technique UK diploma course that unlocks vocal potential for professionals and artists.",
    icon: Film02Icon,
  },
] as const

export function OfferingsSection() {
  return (
    <Section
      id="offerings"
      title="Offerings"
      subtitle={
        <>
          Your one-stop shop for{" "}
          <span
            className={`${slateChip} inline-block px-2 py-0 whitespace-nowrap normal-case`}
          >
            audio excellence
          </span>
        </>
      }
      description="Eight services under one roof in Shahpur Jat. Record, edit, design, mix and train without handing files to another facility."
      align="left"
      className="container mt-2 rounded-2xl bg-white px-6 text-neutral-700 sm:mt-3"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {offerings.map(({ name, description, icon }) => (
          <div
            key={name}
            className="flex flex-col items-start overflow-hidden rounded-lg border border-black/10 bg-white p-5 text-left"
          >
            <div className="mb-4 flex flex-col items-start gap-y-4">
              <div className="rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 p-2 text-white">
                <HugeiconsIcon icon={icon} className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="text-lg leading-snug font-medium tracking-normal text-black">
                {name}
              </h3>
            </div>
            <p className="mb-4 text-sm text-black/60">{description}</p>
            <Link
              href="#contact"
              className="mt-auto text-sm font-medium text-blue-600 hover:underline"
            >
              Book &gt;
            </Link>
          </div>
        ))}
      </div>
    </Section>
  )
}
