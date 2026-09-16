import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

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

export function ServicesGearSection() {
  return (
    <section
      id="gear"
      aria-labelledby="gear-heading"
      className="mt-2 overflow-hidden rounded-2xl bg-black text-white sm:mt-3"
    >
      <div className="grid gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12 lg:py-24">
        <div className="max-w-lg">
          <p className="font-mono text-xs tracking-widest text-white/50 uppercase">
            Gear list
          </p>
          <h2
            id="gear-heading"
            className="mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] font-medium tracking-[-0.03em] text-balance"
          >
            No rented mystery chain. This is what you get.
          </h2>
          <p className="mt-6 max-w-md text-base/7 text-white/70 sm:text-lg/8">
            Confirmed kit only. The same mics, monitors and plugins on every
            session. If it is not on this list, we do not claim it.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="rounded-full border-white/10 bg-gradient-to-b from-blue-400 to-blue-600 text-white hover:from-blue-400 hover:to-blue-600"
            >
              Shahpur Jat, Delhi
            </Badge>
            <Badge
              variant="secondary"
              className="rounded-full border-white/10 bg-white/10 text-white hover:bg-white/10"
            >
              In-house engineer
            </Badge>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-lg font-medium tracking-[-0.02em]">
              Recording room
            </h3>
            <ul className="mt-4 divide-y divide-white/10">
              {recordingGear.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline justify-between gap-6 py-3 text-sm/6"
                >
                  <span className="text-white/85">{item}</span>
                  <span className="font-mono text-xs text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Separator className="bg-white/10" />
          <div>
            <h3 className="text-lg font-medium tracking-[-0.02em]">
              Engineers room
            </h3>
            <ul className="mt-4 divide-y divide-white/10">
              {engineersGear.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline justify-between gap-6 py-3 text-sm/6"
                >
                  <span className="text-white/85">{item}</span>
                  <span className="font-mono text-xs text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
