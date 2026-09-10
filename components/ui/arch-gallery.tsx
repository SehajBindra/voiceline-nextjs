"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

export type ArchGalleryImage = {
  src: string
  alt: string
}

type ArchGalleryProps = {
  images: ArchGalleryImage[]
  className?: string
}

const easeOut = [0.23, 1, 0.32, 1] as const

export function ArchGallery({ images, className }: ArchGalleryProps) {
  const reduce = Boolean(useReducedMotion())
  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2))

  const offsets = images.map((_, index) => {
    const distance = index - activeIndex
    const absDistance = Math.abs(distance)
    const rotation = distance * 7
    const translateX = distance * 92
    const translateY = absDistance * 20
    const scale = index === activeIndex ? 1.05 : 1 - absDistance * 0.05
    const zIndex = images.length - absDistance

    return {
      rotation,
      translateX,
      translateY,
      scale: Math.max(scale, 0.82),
      zIndex,
    }
  })

  return (
    <div
      className={cn(
        "relative mx-auto flex h-[24rem] w-full max-w-5xl items-end justify-center sm:h-[30rem] lg:h-[38rem]",
        className
      )}
      role="group"
      aria-label="Studio gallery"
    >
      {images.map((image, index) => {
        const offset = offsets[index]
        const isActive = index === activeIndex

        return (
          <motion.button
            key={image.src}
            type="button"
            aria-pressed={isActive}
            aria-label={image.alt}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            initial={false}
            animate={{
              rotate: offset.rotation,
              x: offset.translateX,
              y: -offset.translateY,
              scale: offset.scale,
              zIndex: offset.zIndex,
            }}
            transition={{
              duration: reduce ? 0.15 : 0.45,
              ease: easeOut,
            }}
            className={cn(
              "absolute bottom-0 h-[22rem] w-[15.5rem] origin-bottom overflow-hidden rounded-2xl bg-neutral-200 shadow-[0_18px_40px_-16px_rgba(8,29,59,0.35)] outline-none sm:h-[28rem] sm:w-[20rem] lg:h-[34rem] lg:w-[24rem]",
              "focus-visible:ring-2 focus-visible:ring-[#3b52e8] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              isActive && "shadow-[0_28px_60px_-18px_rgba(8,29,59,0.45)]"
            )}
            style={{ zIndex: offset.zIndex }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 248px, (max-width: 1024px) 320px, 384px"
              className="pointer-events-none object-cover"
              priority={index === activeIndex}
            />
          </motion.button>
        )
      })}
    </div>
  )
}
