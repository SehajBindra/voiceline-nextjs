import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function TrainingSection() {
  return (
    <section
      id="training"
      aria-labelledby="training-heading"
      className="mt-2 overflow-hidden rounded-2xl bg-[#081d3b] text-white sm:mt-3"
    >
      <div className="grid items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12 lg:py-28">
        <div className="relative min-h-[24rem] overflow-hidden rounded-2xl sm:min-h-[32rem] lg:order-2">
          <Image
            src="/hero/studio-hero-voiceover.webp"
            alt="Voice artist training at the microphone in Voiceline Studio"
            fill
            sizes="(max-width: 1023px) 100vw, 48vw"
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-xl lg:order-1">
          <h2
            id="training-heading"
            className="text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.03em] text-balance"
          >
            Hudson Voice Technique. Taught in Delhi.
          </h2>
          <p className="mt-7 text-base/7 text-white/72 sm:text-lg/8">
            A lot of people can speak. Very few can hold a mic, hold a room,
            and still sound like themselves. Rakesh Jagtiani teaches Hudson
            Voice Technique UK to working professionals, educators, and people
            who want to become voice artists.
          </p>
          <p className="mt-5 text-base/7 text-white/72 sm:text-lg/8">
            You train in the same rooms used for real sessions. Same engineers.
            Same standard of listening.
          </p>
          <div className="mt-8">
            <Button
              nativeButton={false}
              render={<Link href="#contact" />}
              size="lg"
              className="h-11 rounded-full bg-white px-6 text-sm text-[#081d3b] hover:bg-white/90"
            >
              Talk to us about training
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
