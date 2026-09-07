import Image from "next/image"

const spaces = [
  {
    name: "Recording room",
    description:
      "Treated booth. Rode NT-series mics. Built for vocals and instruments that need to come out clean.",
    image: "/hero/studio-hero-vocal-booth.webp",
    alt: "Vocal recording booth with microphone and acoustic treatment",
    className: "sm:col-span-7 sm:row-span-2 min-h-[22rem] sm:min-h-full",
  },
  {
    name: "Podcast room",
    description:
      "Multi-host layout with monitoring. Made for long conversations, not a squeezed-in interview.",
    image: "/hero/studio-hero-podcast.webp",
    alt: "Podcast recording room with multiple microphones",
    className: "sm:col-span-5 min-h-[18rem]",
  },
  {
    name: "Production suite",
    description:
      "Focusrite Scarlett, Yamaha HS5, Studio One 5. This is where mixes get finished, not parked.",
    image: "/hero/studio-hero-production.webp",
    alt: "Music production and editing room with mixing console",
    className: "sm:col-span-5 min-h-[18rem]",
  },
] as const

export function SpacesSection() {
  return (
    <section
      id="spaces"
      aria-labelledby="spaces-heading"
      className="mt-2 overflow-hidden rounded-2xl bg-muted text-foreground sm:mt-3"
    >
      <div className="flex flex-col gap-12 px-5 py-20 sm:px-8 lg:gap-16 lg:px-12 lg:py-28">
        <div className="max-w-2xl">
          <h2
            id="spaces-heading"
            className="text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.03em] text-balance"
          >
            Three rooms. Each one has a job.
          </h2>
          <p className="mt-7 max-w-xl text-base/7 text-muted-foreground sm:text-lg/8">
            Booth for vocals. Suite for production. Podcast room for
            conversation. Know which door you are walking through before you
            arrive.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-12 sm:grid-rows-2">
          {spaces.map((space) => (
            <figure
              key={space.name}
              className={`group relative overflow-hidden rounded-2xl ${space.className}`}
            >
              <Image
                src={space.image}
                alt={space.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/35 to-transparent px-5 py-6 text-white sm:px-6 sm:py-7">
                <p className="text-lg font-medium tracking-[-0.02em]">
                  {space.name}
                </p>
                <p className="mt-2 max-w-md text-sm/6 text-white/78">
                  {space.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
