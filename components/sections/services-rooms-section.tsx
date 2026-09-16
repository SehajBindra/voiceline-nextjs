"use client"

import { useCallback, useState, type KeyboardEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion, useReducedMotion } from "motion/react"

import { Button } from "@/components/ui/button"
import { cn } from "cn"

const slateChip =
  "rounded-sm bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"

const easeStandard = [0.2, 0, 0, 1] as const
const easeOut = [0.23, 1, 0.32, 1] as const

const imageFrame =
  "outline outline-1 outline-[oklch(0_0_0/0.1)] dark:outline-[oklch(1_0_0/0.1)]"

const rooms = [
  {
    id: "recording",
    index: "01",
    name: "Recording room",
    caption: "Recording room · Vocal chain",
    shortDescription:
      "A dedicated space for crystal-clear vocal recordings and voice acting.",
    description:
      "A treated vocal chain built for clarity. Rode mics, Focusrite preamps, guided takes. Learn what good input sounds like.",
    image: "/services/recording-studio-room.jpg",
    imageAlt:
      "State-of-the-art recording studio room in Delhi at Voiceline for vocals and voiceovers",
  },
  {
    id: "production",
    index: "02",
    name: "Production suite",
    caption: "Production suite · Studio One 5",
    shortDescription:
      "Your track as a system. Record, edit, mix, master in Studio One 5.",
    description:
      "Your track as a system. Record, edit, mix, master in Studio One 5. One room, one engineer, zero quality loss.",
    image: "/services/control-room-1.jpg",
    imageAlt:
      "Music producer and audio engineer editing a track in the control room",
  },
  {
    id: "podcast",
    index: "03",
    name: "Podcast room",
    caption: "Podcast room · Multi-mic setup",
    shortDescription:
      "A comfortable, acoustically treated lounge for multi-person podcasting.",
    description:
      "A repeatable setup for content. Multi-mic audio, clean room tone, ready to publish. Record once, repurpose everywhere.",
    image: "/services/podcast-room-1.jpeg",
    imageAlt: "Podcast room at Voiceline Delhi for multi-mic recording",
  },
] as const

export function ServicesRoomsSection() {
  const [active, setActive] = useState(1)
  const reduce = Boolean(useReducedMotion())
  const activeRoom = rooms[active]!

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault()
        setActive((i) => Math.min(i + 1, rooms.length - 1))
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault()
        setActive((i) => Math.max(i - 1, 0))
      } else if (event.key === "Home") {
        event.preventDefault()
        setActive(0)
      } else if (event.key === "End") {
        event.preventDefault()
        setActive(rooms.length - 1)
      } else if (event.key === " " || event.key === "Enter") {
        event.preventDefault()
        setActive(index)
      }
    },
    []
  )

  return (
    <section
      id="rooms"
      aria-labelledby="rooms-heading"
      className="mt-2 overflow-hidden sm:mt-3"
    >
      <div className="overflow-hidden rounded-2xl bg-white px-6 py-8 text-neutral-700 sm:px-8 lg:px-10 lg:py-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: reduce ? 0.15 : 0.35, ease: easeOut }}
          className="mb-10 lg:mb-12"
        >
          <h2
            id="rooms-heading"
            className="max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.75rem)] leading-tight font-medium tracking-[-0.03em] text-balance text-neutral-700"
          >
            Three rooms.{" "}
            <span
              className={`${slateChip} inline-block px-2 py-0 whitespace-nowrap`}
            >
              One address.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-12 xl:gap-14">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-64px" }}
            transition={{
              duration: reduce ? 0.15 : 0.35,
              ease: easeOut,
              delay: reduce ? 0 : 0.05,
            }}
            className="flex min-w-0 flex-col gap-4"
          >
            <div
              className={cn(
                "relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100",
                imageFrame,
                "shadow-[0_1px_2px_rgba(15,23,42,0.06),0_16px_40px_-20px_rgba(15,23,42,0.2)]"
              )}
            >
              {rooms.map((room, i) => (
                <motion.div
                  key={room.id}
                  aria-hidden={i !== active}
                  initial={false}
                  animate={{
                    opacity: i === active ? 1 : 0,
                    scale: i === active ? 1 : 1.02,
                  }}
                  transition={{
                    opacity: {
                      duration: reduce ? 0.12 : 0.28,
                      ease: easeStandard,
                    },
                    scale: {
                      duration: reduce ? 0.12 : 0.35,
                      ease: easeOut,
                    },
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={room.image}
                    alt={i === active ? room.imageAlt : ""}
                    fill
                    priority={i === 1}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />

              <p className="absolute bottom-4 left-4 max-w-[min(100%,20rem)] rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-sm font-medium tracking-[-0.01em] text-neutral-800 shadow-[0_1px_2px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                {activeRoom.caption}
              </p>
            </div>

            <div
              className="flex gap-3"
              role="tablist"
              aria-label="Room previews"
            >
              {rooms.map((room, i) => {
                const selected = i === active
                return (
                  <button
                    key={room.id}
                    type="button"
                    role="tab"
                    id={`room-tab-${room.id}`}
                    aria-selected={selected}
                    aria-controls="room-stage-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={cn(
                      "relative aspect-[4/3] min-w-0 flex-1 overflow-hidden rounded-lg bg-neutral-100 transition-[box-shadow,transform] duration-200 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none",
                      imageFrame,
                      selected
                        ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white"
                        : "opacity-80 hover:opacity-100",
                      "active:scale-[0.96] motion-reduce:active:scale-100"
                    )}
                  >
                    <Image
                      src={room.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 30vw, 12vw"
                      className="object-cover"
                    />
                    <span className="sr-only">{room.name}</span>
                  </button>
                )
              })}
            </div>

            <p className="text-sm/6 text-slate-500">
              Shahpur Jat, Delhi · In-house engineer on every session
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-64px" }}
            transition={{
              duration: reduce ? 0.15 : 0.35,
              ease: easeOut,
              delay: reduce ? 0 : 0.1,
            }}
            id="room-stage-panel"
            role="tabpanel"
            aria-labelledby={`room-tab-${activeRoom.id}`}
            className="flex min-w-0 flex-col"
          >
            <div
              className="flex flex-col"
              role="radiogroup"
              aria-label="Choose a studio room"
            >
              {rooms.map((room, i) => {
                const selected = i === active
                return (
                  <div
                    key={room.id}
                    className={cn(
                      "border-b border-neutral-200/90 last:border-b-0",
                      selected && "border-transparent"
                    )}
                  >
                    <button
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => setActive(i)}
                      onKeyDown={(e) => onKeyDown(e, i)}
                      className={cn(
                        "group flex w-full gap-4 text-left transition-colors duration-150 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none",
                        selected
                          ? "rounded-xl bg-neutral-100 px-4 py-5 sm:px-5 sm:py-6"
                          : "px-1 py-5 hover:bg-neutral-50/80 sm:py-6"
                      )}
                    >
                      <span
                        className={cn(
                          "w-10 shrink-0 pt-0.5 font-mono text-2xl leading-none tabular-nums tracking-tight sm:text-3xl",
                          selected ? "text-neutral-400" : "text-neutral-300"
                        )}
                        aria-hidden
                      >
                        {room.index}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="flex items-start justify-between gap-3">
                          <span className="text-lg font-medium tracking-[-0.02em] text-neutral-800 sm:text-xl">
                            {room.name}
                          </span>
                          <HugeiconsIcon
                            icon={ArrowRight01Icon}
                            strokeWidth={1.5}
                            className={cn(
                              "mt-1 size-5 shrink-0 text-neutral-400 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none",
                              selected
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-60"
                            )}
                            aria-hidden
                          />
                        </span>

                        <span
                          className={cn(
                            "mt-2 block text-sm/6 text-slate-600",
                            !selected && "line-clamp-2"
                          )}
                        >
                          {selected ? room.description : room.shortDescription}
                        </span>

                        {selected ? (
                          <span className="mt-5 inline-flex">
                            <Button
                              nativeButton={false}
                              render={<Link href="#contact" />}
                              size="lg"
                              className={`${slateChip} h-auto px-4 py-2 text-sm font-bold transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-0.5 hover:from-slate-500 hover:to-slate-800 active:scale-[0.96] motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100`}
                            >
                              Book this room
                            </Button>
                          </span>
                        ) : null}
                      </span>
                    </button>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
