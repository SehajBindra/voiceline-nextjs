import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function StudioIntroSection() {
  return (
    <section
      id="studio"
      className="mt-2 overflow-hidden rounded-2xl bg-card text-card-foreground sm:mt-3"
    >
      <div className="grid min-h-[72svh] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12 lg:py-28">
        <div className="max-w-xl">
          <h2 className="text-[clamp(2.6rem,5.8vw,5rem)] font-medium leading-[0.96] tracking-[-0.03em] text-balance">
            Most studios start the work. This one finishes it.
          </h2>
          <p className="mt-7 max-w-md text-base/7 text-muted-foreground sm:text-lg/8">
            Voiceline is in Shahpur Jat. Treated rooms, in-house engineers,
            Hudson Voice Technique training. One building in Delhi NCR. You
            are not driving across town for a mix or a retake.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href="#contact" />}
              size="lg"
              className="h-11 rounded-full px-6 text-sm"
            >
              Book a studio session
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="#training" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-full px-6 text-sm"
            >
              Voice training
            </Button>
          </div>
        </div>

        <div className="relative min-h-[28rem] overflow-hidden rounded-2xl sm:min-h-[36rem]">
          <Image
            src="/hero/reception.jpg"
            alt="Voiceline Studio reception in Shahpur Jat, Delhi"
            fill
            sizes="(max-width: 1023px) 100vw, 55vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-x-5 bottom-5 rounded-xl bg-[#081d3b]/92 px-5 py-4 text-white backdrop-blur-sm sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-sm">
            <p className="text-sm/6 text-white/85">
              Recording room. Production suite. Podcast room. Each one treated.
              Each one ready. You leave sounding finished, not almost.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
