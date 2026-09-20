"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

import { Button } from "@/components/ui/button"

/* Emil: strong ease-out, sub-300ms entrances, scale 0.985 (never 0), stagger */
const EASE = [0.23, 1, 0.32, 1] as const

const LINE = "absolute bg-[#2E5BFF]"
const LINE_H = "h-[max(0.28cqw,1.5px)]"
const LINE_V = "w-[max(0.28cqw,1.5px)]"

function Dot({ x, y }: { x: string; y: string }) {
  return (
    <span
      aria-hidden
      style={{ left: x, top: y }}
      className="absolute z-20 size-[max(1.25cqw,7px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3D6BFF] shadow-[0_0_0_max(0.3cqw,2px)_rgba(61,107,255,0.25),0_0_max(1.6cqw,8px)_rgba(61,107,255,0.95)]"
    />
  )
}

const denseBars = [
  0.8, 1.6, 2.4, 3.4, 2.1, 4.2, 3.1, 5.2, 2.6, 3.8, 4.6, 2.9, 5.4, 3.3, 2.2,
  4.1, 3.6, 5.0, 2.4, 3.2, 4.4, 2.8, 5.2, 3.5, 2.1, 4.0, 3.0, 4.8, 2.6, 3.9,
  5.1, 2.3, 3.4, 4.5, 2.9, 3.7, 5.3, 2.5, 3.1, 4.2, 2.8, 3.6, 4.9, 2.2, 3.3,
  4.6, 2.7, 3.9, 5.0, 2.4, 3.0, 4.3, 2.6, 3.5, 4.7, 2.1, 3.2, 4.4, 2.9, 3.8,
  5.1, 2.3, 3.1, 4.0, 2.7, 3.6, 4.8, 2.2, 3.4, 4.5, 2.8, 3.3, 4.1, 2.5, 3.7,
  4.6, 2.0, 3.0, 4.2, 2.6, 3.5, 4.4, 2.3, 3.1, 3.9, 2.7, 3.3, 4.0, 2.2, 2.9,
  3.6, 2.5, 3.0, 3.7, 2.1, 2.7, 3.3, 1.9, 2.5, 3.0, 2.2, 2.8, 2.0, 1.7,
]
const sparseBars = [
  1.1, 1.8, 0.9, 1.5, 2.2, 1.0, 1.6, 0.8, 1.9, 1.2, 0.7, 1.7, 1.1, 2.0, 0.9,
  1.4, 1.0, 1.8, 0.8, 1.3, 1.6, 0.9, 1.2, 1.9, 0.7, 1.5, 1.0, 1.7, 0.8, 1.3,
  1.1, 1.6, 0.9, 1.2, 0.7, 1.4,
]

function Waveform() {
  return (
    <div
      aria-hidden
      className="absolute inset-x-0 top-[38.6cqw] z-0 flex h-[5.55cqw] items-center"
    >
      <div className="flex h-full flex-1 items-center gap-[0.18cqw]">
        {denseBars.map((h, i) => (
          <span
            key={i}
            style={{ height: `${h}cqw` }}
            className="w-[max(0.42cqw,2px)] shrink-0 rounded-full bg-[#2E5BFF]"
          />
        ))}
      </div>
      <div className="flex h-full w-[46%] items-center gap-[0.28cqw]">
        {sparseBars.map((h, i) => (
          <span
            key={i}
            style={{ height: `${h}cqw` }}
            className="w-[max(0.42cqw,2px)] shrink-0 rounded-full bg-[#2E5BFF]"
          />
        ))}
      </div>
    </div>
  )
}

function StepHeader({
  n,
  label,
  className = "",
  labelClassName = "",
}: {
  n: string
  label: string
  className?: string
  labelClassName?: string
}) {
  return (
    <div className={`absolute flex items-center gap-[1.1cqw] ${className}`}>
      <span className="text-[4.1cqw] leading-none font-light tracking-[-0.02em] text-black">
        {n}
      </span>
      <span
        className={`text-[1.25cqw] leading-none font-semibold tracking-[0.05em] text-foreground uppercase ${labelClassName}`}
      >
        {label}
      </span>
    </div>
  )
}

function StepMeta({
  title,
  lines,
  className = "",
}: {
  title: string
  lines: [string, string]
  className?: string
}) {
  return (
    <div className={`absolute ${className}`}>
      <p className="text-[1.35cqw] leading-tight font-semibold tracking-[-0.01em] text-foreground">
        {title}
      </p>
      <p className="mt-[0.7cqw] text-[1.2cqw] leading-[1.45] text-foreground/55">
        {lines[0]}
        <br />
        {lines[1]}
      </p>
      <Link
        href="#enquire"
        className="mt-[0.9cqw] inline-flex items-center gap-[0.4cqw] text-[1.2cqw] font-medium text-[#4D7CFF] transition-opacity duration-200 ease-out hover:opacity-80"
      >
        Enquire <span aria-hidden>→</span>
      </Link>
    </div>
  )
}

function StepImage({
  src,
  alt,
  className,
  h,
  sizes,
  position = "object-center",
}: {
  src: string
  alt: string
  className: string
  h: string
  sizes: string
  position?: string
}) {
  return (
    <div
      className={`absolute overflow-hidden rounded-[max(0.97cqw,5px)] bg-neutral-900 ${h} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover ${position}`}
      />
    </div>
  )
}

export function VoiceJourney() {
  const reduce = Boolean(useReducedMotion())

  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.28, ease: EASE, delay },
        }

  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.25, ease: EASE, delay },
        }

  return (
    <section
      id="voice-journey"
      aria-labelledby="voice-journey-heading"
      className="@container relative overflow-hidden py-20"
    >
      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <div className="relative flex flex-col items-start justify-center rounded-sm bg-[#F4F4F3] px-[4cqw] text-left">
        <motion.div
          {...rise(0)}
          className="flex flex-col items-start text-left"
        >
          <h2
            id="voice-journey-heading"
            className="mt-[1.2cqw] text-[4.2cqw] leading-[1.02] font-semibold tracking-[-0.045em] text-[#0B0B0C]"
          >
            Train the voice
            <br />
            people remember.
          </h2>
          <p className="mt-[2.4cqw] text-[1.3cqw] leading-[1.45] text-neutral-700">
            Three paths, one practical method built
            <br />
            around the way you need to speak.
          </p>
          <div className="mt-[2.9cqw] flex items-center gap-3">
            <Button render={<Link href="#voice-courses" />}>
              Find your course
            </Button>
            <Button variant="outline" render={<Link href="#voice-trainer" />}>
              Meet the trainer
            </Button>
          </div>
        </motion.div>
      </div>

      {/* ── 2. Dark timeline ────────────────────────────────── */}
      <div
        id="voice-courses"
        className="relative aspect-[720/634] overflow-hidden bg-gray-100"
      >
        {/* circuit lines + waveform (behind content) */}
        <motion.div {...fade(0)} aria-hidden className="absolute inset-0 z-0">
          {/* top full-width line through 01 */}
          <div className={`${LINE} ${LINE_H} top-[16.39cqw] right-0 left-0`} />
          {/* drop between "02" and its label, down to 02 image top */}
          <div
            className={`${LINE} ${LINE_V} top-[16.39cqw] left-[72.7cqw] h-[17.91cqw]`}
          />
          {/* stub under 02 image + drop between "03" and its label */}
          <div
            className={`${LINE} ${LINE_H} top-[51.8cqw] left-[35.33cqw] w-[23.27cqw]`}
          />
          <div
            className={`${LINE} ${LINE_V} top-[51.8cqw] left-[35.33cqw] h-[15.2cqw]`}
          />
          {/* bottom full-width line through 03 */}
          <div className={`${LINE} ${LINE_H} top-[67cqw] right-0 left-0`} />
          <Waveform />
          <Dot x="20.14cqw" y="16.39cqw" />
          <Dot x="51.39cqw" y="16.39cqw" />
          <Dot x="13.19cqw" y="67cqw" />
          <Dot x="50.69cqw" y="67cqw" />
        </motion.div>

        {/* STEP 01 */}
        <motion.article {...rise(0)} className="absolute inset-0 z-10">
          <StepHeader
            n="01"
            label="One-on-One"
            className="top-[3.4cqw] left-[20.14cqw]"
          />
          <StepImage
            src="/training/photos/course-one-on-one.jpg"
            alt="Trainee wearing headphones at the studio microphone during a one-on-one Hudson Voice Technique session"
            className="top-[8.8cqw] left-[20.14cqw] w-[31.25cqw]"
            h="h-[17.36cqw]"
            sizes="32cqw"
          />
          <StepMeta
            title="Master the Hudson Technique"
            lines={["Personalized 1:1 sessions", "Studio A, Delhi"]}
            className="top-[27.5cqw] left-[20.14cqw]"
          />
        </motion.article>

        {/* STEP 02 */}
        <motion.article {...rise(0.06)} className="absolute inset-0 z-10">
          <StepHeader
            n="02"
            label="Group Course"
            className="top-[28.9cqw] left-[55.56cqw]"
          />
          <StepImage
            src="/training/photos/course-group.jpg"
            alt="Trainer monitoring a student from the control room during a group voice course"
            className="top-[34.3cqw] left-[55.56cqw] w-[31.25cqw]"
            h="h-[18.06cqw]"
            sizes="32cqw"
          />
          <StepMeta
            title="Speak With Impact"
            lines={["Weekly intensive workshops", "Main Console Room"]}
            className="top-[54.6cqw] left-[55.56cqw]"
          />
        </motion.article>

        {/* STEP 03 */}
        <motion.article {...rise(0.12)} className="absolute inset-0 z-10">
          <StepHeader
            n="03"
            label="Corporate Batch"
            className="top-[54.3cqw] left-[15.67cqw]"
            labelClassName="ml-[0.5cqw]"
          />
          <StepImage
            src="/training/photos/course-corporate.jpg"
            alt="Corporate batch training around the conference table at Voiceline Studio"
            className="top-[59.9cqw] left-[13.19cqw] w-[37.5cqw]"
            h="h-[16cqw]"
            sizes="38cqw"
          />
          <StepMeta
            title="Executive Communication"
            lines={["Custom workplace scripts", "On-site / Remote"]}
            className="top-[76.4cqw] left-[13.19cqw]"
          />
        </motion.article>
      </div>

      {/* ── 3. Trainer ──────────────────────────────────────── */}
      <div
        id="voice-trainer"
        className="grid aspect-[720/208] grid-cols-[41.7%_1fr] bg-white"
      >
        <motion.div {...rise(0)} className="relative">
          <Image
            src="/training/photos/rakesh-sir-front-page.webp"
            alt="Rakesh Jagtiani, Hudson Voice Technique trainer at Voiceline Studio"
            fill
            sizes="42cqw"
            className="object-cover object-top"
          />
        </motion.div>
        <motion.div
          {...rise(0.08)}
          className="flex flex-col justify-center pr-[4cqw] pl-[6.4cqw]"
        >
          <p className="text-[1.5cqw] leading-tight text-neutral-900">
            Your trainer
          </p>
          <p className="mt-[0.4cqw] text-[2.1cqw] leading-tight font-bold tracking-[-0.02em] text-neutral-900">
            Rakesh Jagtiani
          </p>
          <div className="mt-[3.2cqw] border-l-[max(0.42cqw,3px)] border-[#2E5BFF] pl-[2.2cqw]">
            <p className="text-[2.5cqw] leading-[1.18] font-semibold tracking-[-0.025em] text-neutral-900">
              Technique makes
              <br />
              confidence repeatable.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── 4. Field note ───────────────────────────────────── */}
      <div className="relative aspect-[720/240] bg-[#ECEBE8]">
        <div className="grid h-full grid-cols-[30.5%_1fr]">
          <motion.div {...rise(0)} className="pt-[6.25cqw] pl-[5.28cqw]">
            <h3 className="text-[1.7cqw] leading-[1.35] font-bold tracking-[-0.01em] text-neutral-900 uppercase">
              Field Note 01 /
              <br />
              Pristine Waters
            </h3>
          </motion.div>
          <motion.div {...rise(0.08)} className="relative">
            <Image
              src="/training/photos/case-study-pristine-waters.jpg"
              alt="Pristine Waters team with trainer Rakesh Jagtiani after corporate voice training"
              fill
              sizes="70cqw"
              className="object-cover object-center"
            />
          </motion.div>
        </div>

        {/* overlapping white proof card */}
        <motion.div
          {...rise(0.12)}
          className="absolute bottom-[1.8cqw] left-[5.28cqw] z-10 w-[58.6cqw]"
        >
          <div className="ml-auto max-w-sm rounded-lg bg-white p-4 shadow-md">
            <p className="text-[max(1.15cqw,10px)] leading-[1.5] text-neutral-600">
              Completed two batches. Delivered on-site assessments, attendance
              tracking, and combined reports.
            </p>
            <div className="mt-[1.4cqw] flex items-center gap-[3cqw] text-[max(1.15cqw,10px)] font-medium text-neutral-800">
              <span className="flex flex-col gap-[0.7cqw]">
                <span className="inline-flex items-center gap-[0.8cqw]">
                  <span className="size-[max(0.97cqw,6px)] rounded-full bg-lime-400" />
                  Batch 01 & Batch 02
                </span>
                <span className="inline-flex items-center gap-[0.8cqw]">
                  <span className="size-[max(0.97cqw,6px)] rounded-full bg-lime-400" />
                  Certified
                </span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
