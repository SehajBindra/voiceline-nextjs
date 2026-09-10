"use client"

import { ChromaticImage } from "@/components/ui/chromatic-image"

const leftFeatures = [
  {
    title: "Unique technique",
    description:
      "Refine pace, reduce accent friction, and learn to hold attention when you speak.",
  },
  {
    title: "Diverse specialization",
    description:
      "Training shaped for corporates, educators, lawyers, and aspiring voice artists.",
  },
] as const

const rightFeatures = [
  {
    title: "Global affiliation",
    description:
      "Exclusive India provider of Hudson Voice Technique through Voice Master International UK.",
  },
  {
    title: "Proven worldwide",
    description:
      "Taught in 89 countries and 27 languages for over two decades of speaking practice.",
  },
] as const

function FeatureColumn({
  features,
}: {
  features: typeof leftFeatures | typeof rightFeatures
}) {
  return (
    <dl className="grid h-full grid-rows-2 divide-y divide-[#081d3b]/10">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="flex min-h-44 flex-col justify-between gap-6 p-6 sm:min-h-48 sm:p-8"
        >
          <dt className="max-w-[18ch] text-lg leading-snug font-medium text-balance">
            <span className="text-lg font-medium">{feature.title}</span>
            <span className="font-mono text-sm tracking-wide text-neutral-400 tabular-nums dark:text-neutral-500">
              {feature.number}
            </span>
          </dt>
          <dd className="max-w-[40ch] text-base/7 text-pretty text-[#081d3b]/68 sm:text-sm/6">
            {feature.description}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function TrainingWhyBento() {
  return (
    <section
      id="why-voiceline"
      aria-labelledby="why-voiceline-heading"
      className="mt-2 overflow-hidden sm:mt-3"
    >
      <div className="overflow-hidden rounded-2xl text-[#081d3b] outline-1 -outline-offset-1 outline-[#081d3b]/10">
        <div className="border-b border-[#081d3b]/10 px-6 py-8 sm:px-8">
          <h2
            id="why-voiceline-heading"
            className="max-w-[16ch] text-3xl font-medium tracking-[-0.03em] text-balance sm:text-4xl"
          >
            Why choose Voiceline
          </h2>
          <p className="mt-4 max-w-[48ch] text-base/7 text-pretty text-[#081d3b]/68">
            A Delhi studio that trains you inside real rooms, with a technique
            backed by an international diploma pathway.
          </p>
        </div>

        <div className="grid lg:grid-cols-[3fr_4fr_3fr]">
          <div className="order-2 border-[#081d3b]/10 lg:order-1 lg:border-r">
            <FeatureColumn features={leftFeatures} />
          </div>

          <ChromaticImage
            src="/hero/training-bento-doodle-bw.webp"
            alt="Black and white hand-drawn illustration of a voice training journey from tangled speech to clear delivery"
            backgroundColor="#ffffff"
            zoom={0.1}
            displacement={0.022}
            chromaticShift={0.004}
            tilt={0.08}
            className="order-1 aspect-4/5 min-h-96 bg-white lg:order-2 lg:aspect-auto lg:min-h-168"
          />

          <div className="order-3 border-t border-[#081d3b]/10 lg:border-t-0 lg:border-l">
            <FeatureColumn features={rightFeatures} />
          </div>
        </div>
      </div>
    </section>
  )
}
