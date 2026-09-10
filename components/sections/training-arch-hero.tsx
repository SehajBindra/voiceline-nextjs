"use client"

import { Hero10, type Hero10Props } from "@/components/ui/hero-10"
import { NavbarButton } from "@/components/ui/resizable-navbar"

const slateChip =
  "rounded-sm bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"

const values = {
  title: "Anyone can talk.",
  titleLine2Prefix: "Few get",
  titleHighlight: "Paid.",
  description:
    "The Hudson Voice Technique, taught on a live studio mic in Delhi. Six sessions.",
  images: [
    "/hero/recording-booth.jpg",
    "/hero/reception.jpg",
    "/hero/options/voice-1.png",
  ],
  imageAlts: [
    "Professional recording booth with Rode microphone at Voiceline",
    "Voiceline Studio reception in Shahpur Jat, Delhi",
    "Voice artist at the microphone during a training session",
  ],
  animation: "subtle",
  align: "left",
  primaryCTA: {
    ctaEnabled: false,
    text: "",
    link: "",
  },
} satisfies Hero10Props

export function TrainingArchHero() {
  return (
    <Hero10
      {...values}
      variant="large"
      className="bg-transparent text-[#081d3b]"
      titleHighlightClassName={`${slateChip} inline-block px-2 py-1 whitespace-nowrap`}
      actions={
        <>
          <NavbarButton
            href="#enquire"
            variant="gradient"
            className="rounded-sm from-blue-400 to-blue-600 hover:from-slate-500 hover:to-slate-800"
          >
            Enquire about training
          </NavbarButton>
          <NavbarButton href="#courses" variant="secondary">
            View courses
          </NavbarButton>
        </>
      }
    />
  )
}
