import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const services = [
  {
    title: "Vocal & voiceover recording",
    detail:
      "Neutral Hindi and English, with someone in the room directing you on mic.",
  },
  {
    title: "Music production",
    detail:
      "First take to master, in Studio One 5, with the same ears throughout.",
  },
  {
    title: "Podcast recording",
    detail:
      "A dedicated podcast room. Multi-mic. Built for long conversations.",
  },
  {
    title: "Dubbing & dialogue",
    detail:
      "Replacement lines and sync for film, OTT, and ads. Tight and on brief.",
  },
  {
    title: "Sound editing & design",
    detail:
      "Cleanup, ambience, foley, background music. The work that makes the track sit.",
  },
] as const

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mt-2 overflow-hidden rounded-2xl bg-accent-foreground text-white sm:mt-3"
    >
      <div className="grid gap-16 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24 lg:py-28">
        <div className="max-w-lg">
          <h2
            id="services-heading"
            className="text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.98] font-medium tracking-[-0.03em] text-balance"
          >
            You should not need three studios to finish one project.
          </h2>
          <p className="mt-7 max-w-md text-base/7 text-white/72 sm:text-lg/8">
            Walk in for a session type. The same engineers stay through edit,
            mix, and delivery. Nobody hands your files to another facility
            halfway.
          </p>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <div key={service.title}>
              <div className="flex flex-col gap-3 py-7 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                <h3 className="max-w-xs text-lg font-medium tracking-[-0.02em] text-balance sm:text-xl">
                  {service.title}
                </h3>
                <p className="max-w-sm text-sm/6 text-white/68 sm:text-right">
                  {service.detail}
                </p>
              </div>
              {index < services.length - 1 ? (
                <Separator className="bg-white/12" />
              ) : null}
            </div>
          ))}
          <div className="mt-4 flex flex-wrap gap-2 pt-4">
            <Badge
              variant="secondary"
              className="rounded-full border-white/10 bg-white/10 text-white hover:bg-white/10"
            >
              FabFilter & Waves
            </Badge>
            <Badge
              variant="secondary"
              className="rounded-full border-white/10 bg-white/10 text-white hover:bg-white/10"
            >
              Presonus plugins
            </Badge>
            <Badge
              variant="secondary"
              className="rounded-full border-white/10 bg-white/10 text-white hover:bg-white/10"
            >
              Indian-language VO
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
