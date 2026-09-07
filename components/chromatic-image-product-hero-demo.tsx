"use client"

import Link from "next/link"

import { ChromaticImage } from "@/components/ui/chromatic-image"
import { Button } from "@/components/ui/button"

export default function ChromaticImageProductHeroDemo() {
  return (
    <article className="relative isolate w-full overflow-hidden rounded-[min(1.5vw,18px)] text-[#1e2a5e] outline-1 -outline-offset-1 outline-[#3b52e8]/15">
      <ChromaticImage
        src="/hero/options/hero-doodle-v2-a-recording-session.webp"
        alt="Hand-drawn story of a voice journey: silence, threshold, and release inside a room that listens"
        backgroundColor="#f9f6ee"
        zoom={0.08}
        displacement={0.025}
        chromaticShift={0.008}
        tilt={0.1}
        className="min-h-[38rem] w-full opacity-80 md:aspect-[16/9] md:min-h-0"
      >
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between gap-12 p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-auto flex items-start justify-between gap-6 font-mono text-sm tracking-[0.08em] text-[#6b7280] uppercase select-text">
            <p>Voiceline</p>
            <p className="hidden sm:block">Shahpur Jat · Delhi</p>
          </div>
          <div className="pointer-events-auto flex flex-col items-start gap-6 select-text">
            <div className="relative flex flex-col gap-3">
              <span
                aria-hidden="true"
                className="absolute top-[58%] -left-1 h-10 w-[min(18rem,72%)] -rotate-1 rounded bg-[#3b52e8]/12 sm:h-12"
              />
              <h3 className="relative max-w-[11ch] text-5xl font-medium tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl">
                Your voice has somewhere to land
              </h3>
              <p className="relative max-w-[40ch] text-base/7 text-pretty text-[#1e2a5e]/80 sm:text-lg/7">
                Walk into a room that listens — not just records. A Delhi studio
                built for the moment your story finally breaks through.
              </p>
            </div>
            <Button
              nativeButton={false}
              render={<Link href="#contact" />}
              size="lg"
              className="pointer-events-auto h-11 rounded-full border-2 border-[#3b52e8] bg-[#f9f6ee]/90 px-6 text-sm text-[#1e2a5e] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b52e8]"
            >
              Book the experience
            </Button>
          </div>
        </div>
      </ChromaticImage>
    </article>
  )
}
