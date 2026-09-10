import Link from "next/link"

import { Button } from "@/components/ui/button"

const courses = [
  {
    title: "One-on-one training",
    description:
      "Personal attention with guidance shaped to your voice, goals, and professional context.",
    detail: "Delivered at Voiceline Studio in Shahpur Jat.",
  },
  {
    title: "Home study course",
    description:
      "Work through the Hudson Voice Technique curriculum at your own pace from home.",
    detail: "Structured modules with studio support when you need it.",
  },
] as const

export function TrainingCoursesSection() {
  return (
    <section
      id="courses"
      aria-labelledby="courses-heading"
      className="mt-2 overflow-hidden rounded-2xl bg-card text-card-foreground sm:mt-3"
    >
      <div className="flex flex-col gap-12 px-5 py-20 sm:px-8 lg:gap-16 lg:px-12 lg:py-28">
        <div className="max-w-2xl">
          <h2
            id="courses-heading"
            className="max-w-[14ch] text-[clamp(2.2rem,4.8vw,3.75rem)] font-medium leading-[0.98] tracking-[-0.03em] text-balance"
          >
            Our courses
          </h2>
          <p className="mt-6 max-w-[44ch] text-base/7 text-muted-foreground sm:text-lg/8">
            Choose live studio training or a home study path. Both follow the
            same Hudson Voice Technique foundation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {courses.map((course) => (
            <article
              key={course.title}
              className="flex flex-col justify-between gap-8 rounded-2xl border border-border bg-background p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4">
                <h3 className="max-w-[18ch] text-2xl font-medium tracking-[-0.02em] text-balance">
                  {course.title}
                </h3>
                <p className="max-w-[42ch] text-base/7 text-muted-foreground">
                  {course.description}
                </p>
                <p className="text-sm/6 text-muted-foreground/80">
                  {course.detail}
                </p>
              </div>
              <Button
                nativeButton={false}
                render={<Link href="#enquire" />}
                variant="outline"
                className="w-fit rounded-full"
              >
                Enquire now
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
