"use client"

import * as React from "react"
import { motion, useReducedMotion, type Variants } from "motion/react"
import Balancer from "react-wrap-balancer"

import { cn } from "@/lib/utils"

import { Cta, type CtaProps } from "../../shared/cta"

export interface Hero10Props {
  title: string
  titleLine2Prefix?: string
  titleHighlight?: string
  description: string
  socialProof?: string
  images: string[]
  imageAlts?: string[]
  animation?: "none" | "subtle"
  primaryCTA: CtaProps
  secondaryCTA?: CtaProps
  variant?: "standard" | "compact" | "large"
  align?: "left" | "center"
  className?: string
  titleHighlightClassName?: string
  actions?: React.ReactNode
}

const variantStyles = {
  standard: {
    section: "py-20 sm:py-28",
    title: "text-3xl sm:text-4xl md:text-6xl",
    description: "max-w-lg text-sm sm:text-base",
    header: "gap-5",
    headerMax: "max-w-2xl",
    content: "gap-8 sm:gap-10",
    fan: "max-w-3xl px-6",
    fanCard: "aspect-4/5",
  },
  compact: {
    section: "py-14 sm:py-20",
    title: "text-2xl sm:text-3xl md:text-4xl",
    description: "max-w-md text-sm",
    header: "gap-4",
    headerMax: "max-w-2xl",
    content: "gap-6 sm:gap-8",
    fan: "max-w-2xl",
    fanCard: "aspect-4/5",
  },
  large: {
    section: "pt-32 pb-5",
    title:
      "text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[0.98] tracking-[-0.03em]",
    description: "max-w-[42ch] text-base leading-relaxed sm:text-lg md:text-xl",
    header: "gap-7",
    headerMax: "max-w-3xl",
    content: "gap-10 sm:gap-12",
    fan: "max-w-4xl px-6 pt-10",
    fanCard: "aspect-4/5",
  },
} as const

const fanSlotsByVariant = {
  standard: [
    { width: "w-[38%]", layout: "-mr-8 z-10", rotate: -6, x: 48, ty: 24 },
    { width: "w-[42%]", layout: "z-20", rotate: 0, x: 0, ty: -8 },
    { width: "w-[38%]", layout: "-ml-8 z-10", rotate: 6, x: -48, ty: 24 },
  ],
  compact: [
    { width: "w-[38%]", layout: "-mr-8 z-10", rotate: -6, x: 48, ty: 24 },
    { width: "w-[42%]", layout: "z-20", rotate: 0, x: 0, ty: -8 },
    { width: "w-[38%]", layout: "-ml-8 z-10", rotate: 6, x: -48, ty: 24 },
  ],
  large: [
    { width: "w-[40%]", layout: "-mr-10 z-10", rotate: -6, x: 56, ty: 28 },
    { width: "w-[44%]", layout: "z-20", rotate: 0, x: 0, ty: -10 },
    { width: "w-[40%]", layout: "-ml-10 z-10", rotate: 6, x: -56, ty: 28 },
  ],
} as const

const fanContainer: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
}

type FanSlot = (typeof fanSlotsByVariant)["large"][number]

const fanCard: Variants = {
  hidden: (slot: FanSlot) => ({
    x: slot.x,
    rotate: slot.rotate,
    y: slot.ty,
  }),
  visible: (slot: FanSlot) => ({
    x: 0,
    rotate: slot.rotate,
    y: slot.ty,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

function Reveal({
  active,
  variants,
  className,
  children,
}: Readonly<{
  active: boolean
  variants?: Variants
  className?: string
  children: React.ReactNode
}>) {
  if (!active) return <div className={className}>{children}</div>

  return (
    <motion.div variants={variants ?? item} className={className}>
      {children}
    </motion.div>
  )
}

function ImageFan({
  images,
  imageAlts,
  cardAspect,
  animate,
  align,
  fanSlots,
}: Readonly<{
  images: string[]
  imageAlts?: string[]
  cardAspect: string
  animate: boolean
  align: "left" | "center"
  fanSlots: (typeof fanSlotsByVariant)[keyof typeof fanSlotsByVariant]
}>) {
  return (
    <motion.div
      className={cn(
        "relative flex w-full items-center",
        align === "left" ? "justify-start" : "justify-center"
      )}
      variants={fanContainer}
      initial={animate ? "hidden" : false}
      whileInView={animate ? "visible" : undefined}
      animate={animate ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
    >
      {images.slice(0, 3).map((src, i) => {
        const slot = fanSlots[i] ?? fanSlots[1]
        return (
          <motion.div
            key={src}
            custom={slot}
            variants={fanCard}
            className={cn(
              "relative shrink-0 overflow-hidden rounded-xl shadow-xl outline outline-black/10 dark:outline-white/10",
              cardAspect,
              slot.width,
              slot.layout
            )}
          >
            <img
              src={src}
              alt={imageAlts?.[i] ?? ""}
              decoding="async"
              className="size-full object-cover"
            />
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export function Hero10({
  title,
  titleLine2Prefix,
  titleHighlight,
  description,
  socialProof,
  images,
  imageAlts,
  animation = "none",
  primaryCTA,
  secondaryCTA,
  variant = "standard",
  align = "center",
  className,
  titleHighlightClassName,
  actions,
}: Readonly<Hero10Props>) {
  const reduce = useReducedMotion()
  const animate = animation === "subtle" && !reduce
  const vs = variantStyles[variant]
  const isLeft = align === "left"

  const titleElement = title && (
    <h1
      className={cn(
        "font-normal tracking-tight text-balance text-foreground",
        vs.title
      )}
    >
      <Balancer>{title}</Balancer>
      {(titleLine2Prefix || titleHighlight) && (
        <>
          <br />
          <Balancer>
            {titleLine2Prefix && <span>{titleLine2Prefix} </span>}
            {titleHighlight && (
              <span
                className={cn(
                  !titleHighlightClassName && "text-primary",
                  titleHighlightClassName
                )}
              >
                {titleHighlight}
              </span>
            )}
          </Balancer>
        </>
      )}
    </h1>
  )

  const descriptionElement = description && (
    <p className={cn("text-muted-foreground", vs.description)}>
      <Balancer>{description}</Balancer>
    </p>
  )

  const ctasElement = actions ? (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 pt-5",
        isLeft ? "justify-start" : "justify-center"
      )}
    >
      {actions}
    </div>
  ) : (
    (primaryCTA?.ctaEnabled || secondaryCTA?.ctaEnabled) && (
      <div
        className={cn(
          "flex flex-wrap items-center gap-x-4 gap-y-3 pt-5",
          isLeft ? "justify-start" : "justify-center"
        )}
      >
        {primaryCTA?.ctaEnabled && <Cta cta={primaryCTA} />}
        {secondaryCTA?.ctaEnabled && (
          <Cta
            cta={{
              ...secondaryCTA,
              variant: secondaryCTA.variant ?? "outline",
            }}
          />
        )}
      </div>
    )
  )

  const socialProofElement = socialProof && (
    <p className="text-xs font-medium text-muted-foreground">{socialProof}</p>
  )

  const mediaElement = images?.length ? (
    <ImageFan
      images={images}
      imageAlts={imageAlts}
      cardAspect={vs.fanCard}
      animate={animate}
      align={align}
      fanSlots={fanSlotsByVariant[variant]}
    />
  ) : null

  return (
    <section
      className={cn(
        "relative isolate w-full overflow-hidden bg-background",
        className
      )}
    >
      <motion.div
        className={cn(
          "relative z-10 flex-col",
          isLeft ? "items-start text-left" : "items-center text-center",
          vs.section,
          vs.content
        )}
        variants={animate ? container : undefined}
        initial={animate ? "hidden" : false}
        whileInView={animate ? "visible" : undefined}
        viewport={{ once: true, margin: "-80px" }}
      >
        <Reveal
          active={animate}
          className={cn(
            "flex w-full flex-col",
            vs.headerMax,
            isLeft ? "items-start" : "items-center",
            vs.header
          )}
        >
          {titleElement}
          {descriptionElement}
        </Reveal>

        <Reveal
          active={animate}
          className={cn(
            "flex flex-col gap-4",
            isLeft ? "items-start" : "items-center"
          )}
        >
          {ctasElement}
          {socialProofElement}
        </Reveal>

        <div className={cn("w-full", !isLeft && "mx-auto", vs.fan)}>
          {mediaElement}
        </div>
      </motion.div>
    </section>
  )
}
