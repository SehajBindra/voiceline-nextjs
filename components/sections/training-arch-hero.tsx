"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

import { ArchGallery } from "@/components/ui/arch-gallery"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/hero/recording-booth.jpg",
    alt: "Professional recording booth with Rode microphone at Voiceline",
  },
  {
    src: "/hero/reception.jpg",
    alt: "Voiceline Studio reception in Shahpur Jat, Delhi",
  },
  {
    src: "/hero/options/voice-1.png",
    alt: "Voice artist at the microphone during a training session",
  },
] as const

const easeOut = [0.23, 1, 0.32, 1] as const

export function TrainingArchHero() {
  const reduce = Boolean(useReducedMotion())

  return (
    <section
      aria-labelledby="training-hero-heading"
      className="relative isolate overflow-hidden px-6 py-10 text-[#081d3b] sm:px-0 sm:py-14 lg:py-16"
    >
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.15 : 0.45, ease: easeOut }}
          className="relative z-10 flex w-full flex-col items-start gap-7 lg:max-w-xl"
        >
          <h1
            id="training-hero-heading"
            className="max-w-[14ch] text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[0.98] font-medium tracking-[-0.03em] text-balance"
          >
            Sculpt your voice. Craft your presence.
          </h1>
          <p className="max-w-[42ch] text-base/7 text-[#081d3b]/72 sm:text-lg/8">
            Hudson Voice Technique training in Delhi. Fourteen modules across
            six sessions in the same rooms used for real recording work.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              nativeButton={false}
              render={<Link href="#enquire" />}
              size="lg"
              className="h-11 rounded-full bg-[#081d3b] px-6 text-sm text-white hover:bg-[#081d3b]/90"
            >
              Enquire about training
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="#courses" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-full border-[#081d3b]/15 px-6 text-sm text-[#081d3b] hover:bg-[#081d3b]/5"
            >
              View courses
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0.15 : 0.55,
            delay: reduce ? 0 : 0.08,
            ease: easeOut,
          }}
          className="relative w-full min-w-0 lg:flex-1"
        >
          <ArchGallery images={[...galleryImages]} />
        </motion.div>
      </div>
    </section>
  )
}
