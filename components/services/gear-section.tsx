import Image from "next/image"

import { Badge } from "@/components/ui/badge"

// Gear list transcribed from https://voiceline.in/studio-services/
const recordingGear = [
  "AKG C2 Condenser Microphone",
  "Rode NT Microphone Series",
  "Focusrite Scarlett 6i6 Audio Interface",
  "Yamaha MG06 Mixing Console",
  "Acoustic Treatment Panels",
  "Sennheiser HD 560S Headphones",
  "Pop Filter",
  "Adjustable Studio Mic Stand",
] as const

const engineersGear = [
  "Yamaha HS5 Studio Monitors",
  "FabFilter",
  "Waves 10",
  "Presonus Plugins",
  "Studio One 5",
] as const

export function GearSection() {
  return (
    <section
      id="gear"
      aria-labelledby="gear-heading"
      className="mt-2 overflow-hidden rounded-2xl bg-[#07090d] text-white selection:bg-blue-400 selection:text-blue-950 sm:mt-3"
    >
      <div className="relative isolate mx-auto max-w-[88rem] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-[42%] -z-10 h-px w-40 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"
        />

        <div className="grid min-h-[31rem] overflow-hidden rounded-xl bg-[#0d1119] shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_30px_80px_-36px_rgba(37,99,235,0.5)] lg:grid-cols-[0.84fr_1.16fr]">
          <div className="relative z-10 flex flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="max-w-xl">
              <div
                aria-hidden
                className="mb-8 flex items-center gap-1.5 text-blue-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                <span className="h-1.5 w-6 rounded-full bg-current/75" />
                <span className="h-1.5 w-12 rounded-full bg-current/40" />
              </div>

              <h2
                id="gear-heading"
                className="max-w-[12ch] text-[clamp(2.35rem,5vw,4.75rem)] leading-[0.98] font-medium tracking-[-0.035em] text-balance"
              >
                No rented mystery chain. This is what you get.
              </h2>
              <p className="mt-6 max-w-[43ch] text-base/7 text-pretty text-blue-50/70 sm:text-lg/8">
                Confirmed kit only. The same mics, monitors and plugins on
                every session. If it is not on this list, we do not claim it.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="rounded-full border-0 bg-blue-500 px-3 py-1 text-white shadow-[0_1px_0_rgba(255,255,255,0.24)_inset] hover:bg-blue-500"
              >
                Shahpur Jat, Delhi
              </Badge>
              <Badge
                variant="secondary"
                className="rounded-full border-0 bg-white/8 px-3 py-1 text-blue-50 shadow-[0_1px_0_rgba(255,255,255,0.1)_inset] hover:bg-white/8"
              >
                In-house engineer
              </Badge>
            </div>
          </div>

          <figure className="relative min-h-80 overflow-hidden bg-black lg:min-h-full">
            <Image
              src="/services/gear-studio.webp"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1119]/55 lg:bg-gradient-to-r lg:from-[#0d1119] lg:via-transparent lg:to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-0 outline outline-1 -outline-offset-1 outline-[oklch(1_0_0/0.1)]"
            />
            <figcaption className="absolute right-5 bottom-5 rounded-full bg-black/65 px-3 py-1.5 text-xs font-medium tracking-wide text-blue-50/80 backdrop-blur-sm">
              Built for clean capture
            </figcaption>
          </figure>
        </div>

        <div className="grid gap-0 py-4 sm:py-6 lg:grid-cols-2">
          <div className="px-1 py-8 sm:px-4 lg:border-r lg:border-white/10 lg:px-8 lg:py-10">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-medium tracking-[-0.02em]">
                Recording room
              </h3>
              <span className="text-xs font-medium tracking-[0.16em] text-blue-300 uppercase">
                Capture
              </span>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-1 xl:grid-cols-2">
              {recordingGear.map((item) => (
                <li
                  key={item}
                  className="flex min-h-12 items-center gap-3 border-b border-white/10 py-3 text-sm/6 text-blue-50/80"
                >
                  <span
                    aria-hidden
                    className="h-1 w-1 shrink-0 rounded-full bg-blue-400"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 px-1 py-8 sm:px-4 lg:border-t-0 lg:px-8 lg:py-10">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-medium tracking-[-0.02em]">
                Engineers room
              </h3>
              <span className="text-xs font-medium tracking-[0.16em] text-blue-300 uppercase">
                Finish
              </span>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-1 xl:grid-cols-2">
              {engineersGear.map((item) => (
                <li
                  key={item}
                  className="flex min-h-12 items-center gap-3 border-b border-white/10 py-3 text-sm/6 text-blue-50/80"
                >
                  <span
                    aria-hidden
                    className="h-1 w-1 shrink-0 rounded-full bg-blue-400"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
