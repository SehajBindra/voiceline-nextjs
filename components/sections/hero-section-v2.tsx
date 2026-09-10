"use client"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { ArrowTurnUpIcon, AudioLinesIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import { HeroSessionDuetMorph } from "@/components/sections/hero-session-duet-morph"

const slateChip =
  "rounded-sm bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"

const easeOut = [0.23, 1, 0.32, 1] as const

export function HeroSectionV2() {
  const reduce = Boolean(useReducedMotion())

  return (
    <section className="relative isolate overflow-hidden rounded-2xl bg-white text-neutral-700">
      <div className="relative z-10 mx-auto flex flex-col px-8 pt-20 pb-8 sm:px-0 md:pt-24 md:pb-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.15 : 0.35, ease: easeOut }}
          className="flex flex-col items-start justify-center pt-16 md:pt-20"
        >
          <h1 className="max-w-4xl text-[2rem] leading-tight text-neutral-700 md:text-5xl">
            Stop Settling for{" "}
            <span
              className={`${slateChip} inline-block px-2 py-0 whitespace-nowrap`}
            >
              <span className="flex items-center gap-1">
                average audio
                <HugeiconsIcon
                  icon={AudioLinesIcon}
                  strokeWidth={2}
                  data-icon="inline-end"
                  className="size-10 text-white"
                />
              </span>
            </span>
          </h1>
          <p className="mt-2 max-w-[53ch] text-base leading-relaxed text-slate-700 md:text-lg">
            From music and podcasts to voiceovers, we help{" "}
            <span className="font-bold text-blue-500">creators</span> sound
            their best.
          </p>
          <Button
            nativeButton={false}
            render={<Link href="#contact" />}
            size="lg"
            className={`${slateChip} mt-5 h-auto w-fit px-4 py-2 text-sm font-bold transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:from-slate-500 hover:to-slate-800 motion-reduce:hover:translate-y-0`}
          >
            Book a session
            <HugeiconsIcon
              icon={ArrowTurnUpIcon}
              strokeWidth={2}
              data-icon="inline-end"
            />
          </Button>
        </motion.div>
      </div>

      <div className="relative mx-auto w-full max-w-272 px-4 pb-6 sm:px-6 md:-mt-4 md:px-8 md:pb-10">
        <div className="overflow-hidden">
          <HeroSessionDuetMorph className="relative mx-auto w-full overflow-hidden rounded-lg bg-white md:rounded-xl" />
        </div>
      </div>
    </section>
  )
}
