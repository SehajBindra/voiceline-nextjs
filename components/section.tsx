"use client"

import { easeInOutCubic } from "@/lib/animation"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "motion/react"
import React, { forwardRef, useRef } from "react"

interface SectionProps {
  id?: string
  title?: string
  subtitle?: React.ReactNode
  description?: string
  children?: React.ReactNode
  className?: string
  align?: "left" | "center" | "right"
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    { id, title, subtitle, description, children, className, align },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLElement>(null)
    const ref = forwardedRef || internalRef

    const sectionId = title ? title.toLowerCase().replace(/\s+/g, "-") : id
    const alignmentClass =
      align === "left"
        ? "text-left"
        : align === "right"
          ? "text-right"
          : "text-center"

    const { scrollYProgress } = useScroll({
      target: ref as React.RefObject<HTMLElement>,
      offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 0, 1], {
      ease: easeInOutCubic,
    })
    const y = useTransform(scrollYProgress, [0, 0.05, 0.1], [30, 30, 0], {
      ease: easeInOutCubic,
    })

    return (
      <section id={id || sectionId} ref={ref}>
        <div className={cn("py-12 sm:py-20", className)}>
          {(title || subtitle || description) && (
            <div className={cn(alignmentClass, "space-y-4 pb-10")}>
              {subtitle && (
                <motion.h3
                  className={cn(
                    "mx-0 mt-4 py-0 text-5xl leading-normal tracking-tighter text-balance text-foreground lowercase sm:max-w-none sm:text-4xl md:text-5xl",
                    align === "center"
                      ? "mx-auto"
                      : align === "right"
                        ? "ml-auto"
                        : ""
                  )}
                  style={{ opacity, y }}
                >
                  {subtitle}
                </motion.h3>
              )}
              {description && (
                <motion.p
                  className={cn(
                    "mt-6 max-w-2xl text-lg leading-8 text-balance text-muted-foreground",
                    align === "center"
                      ? "mx-auto"
                      : align === "right"
                        ? "ml-auto"
                        : ""
                  )}
                  style={{ opacity, y }}
                >
                  {description}
                </motion.p>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = "Section"

export { Section }
