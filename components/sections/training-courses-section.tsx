"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

import { Button } from "@/components/ui/button"

const slateChip =
  "rounded-sm bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"

const easeOut = [0.23, 1, 0.32, 1] as const

const courses = [
  {
    titleHighlight: "One-on-one",
    titleAfter: " training",
    story: "Hesitant at the mic → guided beside you → voice that carries",
    description:
      "Experience personalized attention and tailored guidance through our One-on-One Training. This voiceover training course ensures a transformative journey towards becoming a more influential and confident communicator, customized to your specific needs.",
    detail: "Delivered at Voiceline Studio in Shahpur Jat.",
    image: "/training/course-one-on-one-doodle-bw.webp?v=2",
    imageAlt:
      "Three-panel black and white doodle: a trainee with a question mark thought bubble at the mic, a coach with script guiding one-on-one, then a confident speaker with waveform",
  },
  {
    titleHighlight: "Home study",
    titleAfter: " course",
    story: "Pause at home → open the curriculum → practice on your own time",
    description:
      "Dive into the art of effective communication at your own pace with our Home Study Course. Unlock the secrets of the Hudson Voice Technique from the comfort of your home, guided by our comprehensive curriculum.",
    detail: "Structured modules with studio support when you need it.",
    image: "/training/course-home-study-doodle-bw.webp?v=2",
    imageAlt:
      "Three-panel black and white doodle: someone pausing on the sofa with a laptop, opening Hudson Voice Technique materials at a desk, then practicing aloud with sound waves at home",
  },
] as const

function CourseStory({
  course,
  reverse = false,
}: {
  course: (typeof courses)[number]
  reverse?: boolean
}) {
  const reduce = Boolean(useReducedMotion())

  return (
    <article className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-64px" }}
        transition={{ duration: reduce ? 0.15 : 0.35, ease: easeOut }}
        className={`relative mx-auto w-full overflow-hidden rounded-lg bg-white md:rounded-xl ${reverse ? "order-1 lg:order-2" : ""}`}
      >
        <div className="relative aspect-4/3 w-full bg-white">
          <Image
            src={course.image}
            alt={course.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
            unoptimized
          />
        </div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-64px" }}
        transition={{
          duration: reduce ? 0.15 : 0.35,
          ease: easeOut,
          delay: reduce ? 0 : 0.08,
        }}
        className={`flex flex-col justify-center gap-8 ${reverse ? "order-2 lg:order-1" : ""}`}
      >
        <div className="flex flex-col gap-5">
          <h3 className="max-w-[20ch] text-[clamp(1.75rem,3.2vw,2.25rem)] leading-tight font-medium tracking-[-0.02em] text-balance text-neutral-700">
            <span
              className={`${slateChip} inline-block px-2 py-0 whitespace-nowrap`}
            >
              {course.titleHighlight}
            </span>
            {course.titleAfter}
          </h3>
          <p className="max-w-[42ch] text-sm/6 text-slate-600">{course.story}</p>
          <p className="max-w-[44ch] text-base/7 text-pretty text-slate-700 sm:text-lg/8">
            {course.description}
          </p>
          <p className="text-sm/6 text-slate-500">{course.detail}</p>
        </div>
        <Button
          nativeButton={false}
          render={<Link href="#enquire" />}
          size="lg"
          className={`${slateChip} h-auto w-fit px-4 py-2 text-sm font-bold transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:from-slate-500 hover:to-slate-800 motion-reduce:hover:translate-y-0`}
        >
          Enquire now
        </Button>
      </motion.div>
    </article>
  )
}

export function TrainingCoursesSection() {
  const reduce = Boolean(useReducedMotion())

  return (
    <section
      id="courses"
      aria-labelledby="courses-heading"
      className="mt-2 overflow-hidden sm:mt-3"
    >
      <div className="overflow-hidden rounded-2xl bg-white px-6 py-8 text-neutral-700 sm:px-8 lg:px-12 lg:py-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: reduce ? 0.15 : 0.35, ease: easeOut }}
          className="mb-12 lg:mb-16"
        >
          <h2
            id="courses-heading"
            className="max-w-[14ch] text-[clamp(2.2rem,4.8vw,3.75rem)] font-medium leading-tight tracking-[-0.03em] text-balance text-neutral-700"
          >
            Our{" "}
            <span
              className={`${slateChip} inline-block px-2 py-0 whitespace-nowrap`}
            >
              courses
            </span>
          </h2>
          <p className="mt-6 max-w-[48ch] text-base/7 text-pretty text-slate-700 sm:text-lg/8">
            Two paths through the same Hudson Voice Technique: one live in the
            studio, one at your own pace from home.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 lg:gap-20">
          <CourseStory course={courses[0]} />
          <CourseStory course={courses[1]} reverse />
        </div>
      </div>
    </section>
  )
}
