"use client"

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useTransform,
  useMotionValue,
} from "motion/react"
import { useEffect, useRef, useState } from "react"

import { HeroRecordingSessionBwSvg } from "@/components/sections/hero-recording-session-bw-svg"
import { HeroPodcastDuetSvg } from "@/components/sections/hero-podcast-duet-svg"

/* Morph between the two hero doodles (recording session <-> podcast duet).
 *
 * Motion.dev path-morphing pattern, adapted for full-scene art:
 * https://motion.dev/examples/react-path-morphing
 *
 * The example interpolates tiny icon `d` strings with flubber
 * (`useMotionValue` + `useTransform` + `animate`). Our two scenes are
 * ~37KB / ~69KB potrace traces with completely different topology —
 * per-frame `d` interpolation there would run on the main thread, jank,
 * and melt into a blob mid-transition. So we keep the exact same Motion
 * primitives (progress MotionValue -> derived values -> animate()),
 * but drive opacity + blur + transform instead of `d`:
 * the blur masks the crossfade (Emil: blur bridges two overlapping states
 * so the eye reads one transformation), the subtle scale sells the morph.
 *
 * Only transform/opacity/filter animate (GPU). No layout properties.
 * Auto-cycles while visible; instant switch + no blur under
 * prefers-reduced-motion. */

const INK = "#221c15"

const EASE_MORPH = [0.77, 0, 0.175, 1] as const
const EASE_OUT = [0.23, 1, 0.32, 1] as const

const SCENES = [
  { id: "recording", label: "Recording session" },
  { id: "duet", label: "Podcast duet" },
] as const

export function HeroSessionDuetMorph({
  className,
  ink = INK,
  holdMs = 5200,
  morphMs = 950,
  autoPlay = true,
}: {
  className?: string
  ink?: string
  holdMs?: number
  morphMs?: number
  autoPlay?: boolean
}) {
  const reduce = Boolean(useReducedMotion())
  const ref = useRef<HTMLDivElement | null>(null)
  const visible = useInView(ref, { margin: "-64px" })
  const [index, setIndex] = useState(0)

  /* Motion.dev pattern: single progress driver, derived scene values. */
  const progress = useMotionValue(0)

  const opacityA = useTransform(progress, [0, 1], [1, 0])
  const opacityB = useTransform(progress, [0, 1], [0, 1])
  /* Blur peaks mid-morph so two overlapping doodles read as one. <20px. */
  const blur = useTransform(
    progress,
    [0, 0.5, 1],
    ["blur(0px)", "blur(6px)", "blur(0px)"]
  )
  /* Hardware-accelerated transform strings, never from scale(0). */
  const transformA = useTransform(progress, [0, 1], ["scale(1)", "scale(1.02)"])
  const transformB = useTransform(
    progress,
    [0, 1],
    ["scale(0.985)", "scale(1)"]
  )

  /* Retargetable morph — interrupting mid-flight reverses smoothly. */
  useEffect(() => {
    if (reduce) {
      progress.set(index)
      return
    }
    const controls = animate(progress, index, {
      duration: morphMs / 1000,
      ease: EASE_MORPH,
    })
    return () => controls.stop()
  }, [index, morphMs, progress, reduce])

  /* Rare/first-time delight: cycle while on screen. Paused offscreen. */
  useEffect(() => {
    if (reduce || !autoPlay || !visible) return
    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % SCENES.length),
      holdMs
    )
    return () => window.clearTimeout(id)
  }, [autoPlay, holdMs, index, reduce, visible])

  const go = (next: number) => setIndex(next)

  return (
    <div
      ref={ref}
      className={
        className ??
        "relative mx-auto w-full overflow-hidden rounded-lg bg-white md:rounded-xl"
      }
    >
      <div className="relative aspect-video w-full">
        <motion.div
          aria-hidden={index !== 0}
          className="absolute inset-0"
          style={
            reduce
              ? { opacity: index === 0 ? 1 : 0 }
              : { opacity: opacityA, filter: blur, transform: transformA }
          }
        >
          <HeroRecordingSessionBwSvg ink={ink} boil={index === 0} />
        </motion.div>
        <motion.div
          aria-hidden={index !== 1}
          className="absolute inset-0"
          style={
            reduce
              ? { opacity: index === 1 ? 1 : 0 }
              : { opacity: opacityB, filter: blur, transform: transformB }
          }
        >
          <HeroPodcastDuetSvg ink={ink} />
        </motion.div>
      </div>

      {/* Scene switcher: manual control doubles as morph progress. */}
      <div
        role="group"
        aria-label="Hero scene"
        className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center"
      >
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-neutral-200/80 bg-white/85 p-1 shadow-sm backdrop-blur-sm">
          {SCENES.map((scene, i) => {
            const active = index === i
            return (
              <motion.button
                key={scene.id}
                type="button"
                aria-pressed={active}
                onClick={() => go(i)}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: EASE_OUT }}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.97] motion-reduce:active:scale-100 ${
                  active
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {scene.label}
              </motion.button>
            )
          })}
        </div>
      </div>

      <span aria-live="polite" className="sr-only">
        Showing {SCENES[index].label}
      </span>
    </div>
  )
}
