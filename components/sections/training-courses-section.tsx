"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

import { Button } from "@/components/ui/button"

const slateChip =
  "rounded-sm bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"

const easeOut = [0.23, 1, 0.32, 1] as const

const rakeshPortrait = "/training/photos/rakesh-sir-front-page.webp"

const courses = [
  {
    titleHighlight: "One-on-one",
    titleAfter: " training",
    story: "Hesitant at the mic → guided beside you → voice that carries",
    description:
      "Experience personalized attention and tailored guidance through our One-on-One Training. This voiceover training course ensures a transformative journey towards becoming a more influential and confident communicator, customized to your specific needs.",
    detail: "Delivered at Voiceline Studio in Shahpur Jat.",
    image: "/training/photos/course-one-on-one.jpg",
    imageAlt:
      "A trainee wearing headphones and reading from a script during a one-on-one voice training session at Voiceline Studio",
  },
  {
    titleHighlight: "Group",
    titleAfter: " course",
    story: "Join a cohort → learn together → workplace-ready speaking skills",
    description:
      "Open-enrollment batches for individuals and small groups looking to build the same workplace communication and speaking skills as our corporate programs — without needing a company to sponsor it. Runs on a fixed schedule with a small cohort, so you still get personal attention and practical coaching.",
    detail: "Fixed schedule, small cohort, practical coaching in the studio.",
    image: "/training/photos/course-group.jpg",
    imageAlt:
      "Trainer monitoring a student in the recording booth from the control room during a group voice training session",
  },
  {
    titleHighlight: "Corporate",
    titleAfter: " batch training",
    story:
      "Assess your team → tailor the curriculum → measurable communication gains",
    description:
      "Delivered on-site or in-studio for teams, structured around your organization's proficiency levels and communication goals — as delivered for corporates like Pristine Waters, Mergen Compass, and others.",
    detail:
      "On-site or in-studio. Attendance tracking and workplace-specific scripts included.",
    image: "/training/photos/course-corporate.jpg",
    imageAlt:
      "Corporate voice training session with a team seated around a conference table with Voiceline training materials",
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
        className={`relative mx-auto w-full overflow-hidden rounded-lg bg-neutral-100 md:rounded-xl ${reverse ? "order-1 lg:order-2" : ""}`}
      >
        <div className="relative aspect-4/3 w-full">
          <Image
            src={course.image}
            alt={course.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
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
          <p className="max-w-[42ch] text-sm/6 text-slate-600">
            {course.story}
          </p>
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

function MeetTheTrainer() {
  const reduce = Boolean(useReducedMotion())

  return (
    <article
      id="trainer"
      aria-labelledby="trainer-heading"
      className="grid gap-8 border-t border-neutral-200 pt-16 lg:grid-cols-2 lg:gap-12 lg:pt-20"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-64px" }}
        transition={{ duration: reduce ? 0.15 : 0.35, ease: easeOut }}
        className="flex flex-col justify-center gap-5"
      >
        <h3
          id="trainer-heading"
          className="max-w-[16ch] text-[clamp(1.75rem,3.2vw,2.25rem)] leading-tight font-medium tracking-[-0.02em] text-balance text-neutral-700"
        >
          Meet the{" "}
          <span
            className={`${slateChip} inline-block px-2 py-0 whitespace-nowrap`}
          >
            trainer
          </span>
        </h3>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-700">
            Rakesh Jagtiani
          </p>
          <p className="max-w-[44ch] text-base/7 text-pretty text-slate-700 sm:text-lg/8">
            Professional voice artist and voice trainer, trained under Voice
            Master International (UK), and one of Voiceline&apos;s owners.
            Rakesh brings years of hands-on experience in voice and
            communication training to every session.
          </p>
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
        className="relative mx-auto w-full overflow-hidden rounded-lg bg-neutral-100 md:rounded-xl"
      >
        <div className="relative aspect-[1200/994] w-full max-w-xl lg:max-w-none">
          <Image
            src={rakeshPortrait}
            alt="Rakesh Jagtiani, professional voice artist and Hudson Voice Technique trainer at Voiceline Studio"
            fill
            sizes="(max-width: 1024px) min(100vw, 576px), min(50vw, 600px)"
            className="object-cover object-top"
            quality={90}
            priority
          />
        </div>
      </motion.div>
    </article>
  )
}

function CaseStudy() {
  const reduce = Boolean(useReducedMotion())

  return (
    <article
      id="case-study"
      aria-labelledby="case-study-heading"
      className="grid gap-8 border-t border-neutral-200 pt-16 lg:grid-cols-2 lg:gap-12 lg:pt-20"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-64px" }}
        transition={{ duration: reduce ? 0.15 : 0.35, ease: easeOut }}
        className="relative mx-auto w-full overflow-hidden rounded-lg bg-neutral-100 md:rounded-xl"
      >
        <div className="relative aspect-4/3 w-full">
          <Image
            src="/training/photos/case-study-pristine-waters.jpg"
            alt="Rakesh Jagtiani with the Pristine Waters team after a corporate voice training engagement"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
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
        className="flex flex-col justify-center gap-5"
      >
        <h3
          id="case-study-heading"
          className="max-w-[16ch] text-[clamp(1.75rem,3.2vw,2.25rem)] leading-tight font-medium tracking-[-0.02em] text-balance text-neutral-700"
        >
          Case{" "}
          <span
            className={`${slateChip} inline-block px-2 py-0 whitespace-nowrap`}
          >
            study
          </span>
        </h3>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-700">
            Pristine Waters
          </p>
          <p className="max-w-[44ch] text-base/7 text-pretty text-slate-700 sm:text-lg/8">
            Delivered a full corporate voice training engagement across two
            batches at different English proficiency levels, complete with
            tracked attendance, workplace-specific scripts, and a combined
            training report at close.
          </p>
        </div>
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
      <div className="overflow-hidden rounded-2xl bg-white px-6 py-8 text-neutral-700 sm:px-0 lg:py-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: reduce ? 0.15 : 0.35, ease: easeOut }}
          className="mb-12 lg:mb-16"
        >
          <h2
            id="courses-heading"
            className="max-w-[14ch] text-[clamp(2.2rem,4.8vw,3.75rem)] leading-tight font-medium tracking-[-0.03em] text-balance text-neutral-700"
          >
            Our{" "}
            <span
              className={`${slateChip} inline-block px-2 py-0 whitespace-nowrap`}
            >
              courses
            </span>
          </h2>
          <p className="mt-6 max-w-[48ch] text-base/7 text-pretty text-slate-700 sm:text-lg/8">
            Three paths through the Hudson Voice Technique: one-on-one in the
            studio, open-enrollment group batches, or corporate training for
            your team.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 lg:gap-20">
          <CourseStory course={courses[0]} />
          <CourseStory course={courses[1]} reverse />
          <CourseStory course={courses[2]} />
          <MeetTheTrainer />
          <CaseStudy />
        </div>
      </div>
    </section>
  )
}
