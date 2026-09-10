import Link from "next/link"
import {
  AudioLinesIcon,
  Certificate01Icon,
  DiplomaIcon,
  Globe02Icon,
  MicVocalIcon,
  UserGroup02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Section } from "@/components/section"

const slateChip =
  "rounded-sm bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"

const trainingFeatures = [
  {
    name: "Unique technique",
    description:
      "Refine pace, reduce accent friction, and learn to hold attention when you speak.",
    icon: (
      <HugeiconsIcon icon={MicVocalIcon} className="h-6 w-6" strokeWidth={2} />
    ),
  },
  {
    name: "Diverse specialization",
    description:
      "Training shaped for corporates, educators, lawyers, and aspiring voice artists.",
    icon: (
      <HugeiconsIcon
        icon={UserGroup02Icon}
        className="h-6 w-6"
        strokeWidth={2}
      />
    ),
  },
  {
    name: "Global affiliation",
    description:
      "Exclusive India provider of Hudson Voice Technique through Voice Master International UK.",
    icon: (
      <HugeiconsIcon
        icon={Certificate01Icon}
        className="h-6 w-6"
        strokeWidth={2}
      />
    ),
  },
  {
    name: "Proven worldwide",
    description:
      "Taught in 89 countries and 27 languages for over two decades of speaking practice.",
    icon: (
      <HugeiconsIcon icon={Globe02Icon} className="h-6 w-6" strokeWidth={2} />
    ),
  },
  {
    name: "Live studio sessions",
    description:
      "Six sessions of 1.5 to 2 hours in the same rooms used for real recording work.",
    icon: (
      <HugeiconsIcon
        icon={AudioLinesIcon}
        className="h-6 w-6"
        strokeWidth={2}
      />
    ),
  },
  {
    name: "Diploma pathway",
    description:
      "Complete the full program to qualify for a Voice Master International UK diploma.",
    icon: (
      <HugeiconsIcon icon={DiplomaIcon} className="h-6 w-6" strokeWidth={2} />
    ),
  },
] as const

export function TrainingFeaturesSection() {
  return (
    <Section
      id="why-voiceline"
      title="Why Voiceline"
      subtitle={
        <>
          Why choose{" "}
          <span
            className={`${slateChip} inline-block px-2 py-0 whitespace-nowrap normal-case`}
          >
            Voiceline ?
          </span>
        </>
      }
      description="A Delhi studio that trains you inside real rooms, with a technique backed by an international diploma pathway."
      align="left"
      className="container mt-2 sm:mt-3"
    >
      <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trainingFeatures.map(({ name, description, icon: Icon }) => (
          <div
            key={name}
            className="flex flex-col items-start overflow-hidden rounded-lg bg-card p-4 text-left"
          >
            <div className="mb-4 flex flex-col items-start gap-y-4">
              <div className="rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 p-2 text-white">
                {Icon}
              </div>
              <h2 className="text-xl leading-normal font-medium tracking-normal text-card-foreground">
                {name}
              </h2>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">{description}</p>
            <Link
              href="#hudson"
              className="text-sm text-primary hover:underline"
            >
              Learn more &gt;
            </Link>
          </div>
        ))}
      </div>
    </Section>
  )
}
