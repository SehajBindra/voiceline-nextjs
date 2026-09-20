"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { ArrowTurnUpIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import { NavbarButton } from "@/components/ui/resizable-navbar"

const slateChip =
  "rounded-sm bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"

const easeOut = [0.23, 1, 0.32, 1] as const

/* Six sketchbook pages, one per service, laid out like a producer's desk:
 * each page sits at its own tilt and height so the spread reads as a
 * hand-arranged pile rather than a grid. Hover squares the page up and
 * lifts it; the entrance settles each page into place in reading order. */
const pages = [
  {
    src: "/services/doodles/vocals.webp",
    alt: "Singer with headphones recording into a condenser microphone",
    label: "Vocals & voiceover",
    rotate: -4,
    offset: "lg:mt-10",
  },
  {
    src: "/services/doodles/music.webp",
    alt: "Producer playing a MIDI keyboard beside a laptop and monitors",
    label: "Music production",
    rotate: 3,
    offset: "lg:mt-0",
  },
  {
    src: "/services/doodles/podcast.webp",
    alt: "Two podcast hosts laughing across a round table with microphones",
    label: "Podcasts",
    rotate: -2,
    offset: "lg:mt-6",
  },
  {
    src: "/services/doodles/dubbing.webp",
    alt: "Dubbing artist reading a script while watching a film frame",
    label: "Dubbing",
    rotate: 2.5,
    offset: "lg:-mt-2",
  },
  {
    src: "/services/doodles/foley.webp",
    alt: "Foley artists tapping shoes on a board under a microphone",
    label: "Foley & sound design",
    rotate: -3,
    offset: "lg:mt-4",
  },
  {
    src: "/services/doodles/editing.webp",
    alt: "Engineer editing a multitrack timeline across two screens",
    label: "Editing, mixing & mastering",
    rotate: 3.5,
    offset: "lg:-mt-6",
  },
] as const

export function Hero() {
  const reduce = Boolean(useReducedMotion())

  return (
    <section
      aria-labelledby="services-hero-heading"
      className="relative isolate overflow-hidden rounded-2xl text-neutral-700 selection:bg-blue-100 selection:text-blue-900"
    >
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-12 px-6 pt-28 pb-10 sm:px-2 md:pt-32 lg:grid-cols-12 lg:gap-8 lg:pb-14">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.15 : 0.4, ease: easeOut }}
          className="flex flex-col items-start lg:col-span-5 lg:self-center"
        >
          <h1
            id="services-hero-heading"
            className="max-w-[14ch] text-[clamp(2.4rem,6vw,4.25rem)] leading-[1.02] font-medium tracking-[-0.03em] text-balance text-neutral-700"
          >
            From idea to finished{" "}
            <span
              className={`${slateChip} inline-block px-3 py-0.5 whitespace-nowrap`}
            >
              track.
            </span>
          </h1>

          <p className="mt-6 max-w-[42ch] text-base/7 text-pretty text-slate-700 sm:text-lg/8">
            Vocals, voiceover, music, podcasts and dubbing, recorded and
            finished in one studio in Shahpur Jat. Engineered for clarity.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/#contact" />}
              size="lg"
              className={`${slateChip} h-auto px-4 py-2 text-sm font-bold transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:from-slate-500 hover:to-slate-800 motion-reduce:hover:translate-y-0`}
            >
              Book a session
              <HugeiconsIcon
                icon={ArrowTurnUpIcon}
                strokeWidth={2}
                data-icon="inline-end"
              />
            </Button>
            <NavbarButton href="#rooms" variant="primary">
              View rooms
            </NavbarButton>
          </div>
        </motion.div>

        <ul
          aria-label="What we record and finish"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:col-span-7 lg:gap-x-5 lg:gap-y-6 lg:pl-6"
        >
          {pages.map((page, i) => (
            <motion.li
              key={page.src}
              initial={
                reduce
                  ? false
                  : { opacity: 0, y: 28, rotate: page.rotate * 2.5 }
              }
              animate={{ opacity: 1, y: 0, rotate: page.rotate }}
              whileHover={
                reduce ? undefined : { rotate: 0, y: -6, scale: 1.03 }
              }
              transition={{
                duration: reduce ? 0.15 : 0.65,
                delay: reduce ? 0 : 0.12 + i * 0.08,
                ease: easeOut,
                rotate: { type: "spring", stiffness: 180, damping: 18 },
                scale: { type: "spring", stiffness: 260, damping: 22 },
              }}
              style={{ rotate: page.rotate }}
              className={`group ${page.offset}`}
            >
              <figure className="flex flex-col gap-3">
                <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-200 bg-blue-100 shadow-[0_1px_2px_rgba(15,23,42,0.06),0_10px_28px_-12px_rgba(15,23,42,0.22)] transition-shadow duration-300 ease-out group-hover:shadow-[0_2px_4px_rgba(15,23,42,0.06),0_22px_44px_-16px_rgba(15,23,42,0.3)] motion-reduce:transition-none">
                  <Image
                    src={page.src}
                    alt={page.alt}
                    fill
                    priority={i < 3}
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-center text-sm font-medium tracking-[-0.01em] text-slate-700 sm:text-[0.9375rem]">
                  {page.label}
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
