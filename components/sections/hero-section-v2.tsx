import Image from "next/image"
import Link from "next/link"
import { ArrowTurnUpIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"

const nav = [
  { href: "#studio", label: "Studio" },
  { href: "#services", label: "Services" },
  { href: "#spaces", label: "Spaces" },
  { href: "#training", label: "Training" },
] as const

const slateChip =
  "rounded-sm bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"

export function HeroSectionV2() {
  return (
    <section className="relative isolate overflow-hidden rounded-2xl bg-white text-neutral-700">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-8 pt-6 pb-8 sm:px-12 md:px-14 md:pt-8 md:pb-10">
        <header className="grid items-center gap-3 lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="justify-self-start text-xl font-bold tracking-tight text-[#1c1915]"
          >
            Voiceline
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-neutral-700 transition-colors duration-200 ease-out hover:text-neutral-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            nativeButton={false}
            render={<Link href="#contact" />}
            size="lg"
            className={`${slateChip} h-auto w-fit justify-self-end px-4 py-2 text-sm font-bold hover:from-slate-500 hover:to-slate-800`}
          >
            Book a session
          </Button>
        </header>

        <div className="flex flex-col items-start justify-center pt-16 md:pt-20">
          <h1 className="max-w-4xl text-[2rem] leading-tight text-neutral-700 md:text-5xl">
            Stop Settling for{" "}
            <span
              className={`${slateChip} inline-block px-2 py-0 whitespace-nowrap`}
            >
              average audio.
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
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-272 px-4 pb-6 sm:px-6 md:-mt-4 md:px-8 md:pb-10">
        <div className="overflow-hidden">
          <Image
            src="/hero/options/hero-doodle-v2-a-recording-session.webp"
            alt="Hand-drawn studio journey: walking in, recording in the booth, and mixing the take"
            width={1280}
            height={720}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
