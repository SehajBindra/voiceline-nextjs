import Image from "next/image"

import { cn } from "cn"

export type ServiceBentoVisual =
  | { kind: "doodle"; src: string; alt: string }
  | { kind: "photo"; src: string; alt: string }

export interface ServiceBentoCell {
  /** Pipeline order — shown when the sequence itself carries meaning */
  step?: number
  title: string
  text: string
  visual: ServiceBentoVisual
  gridClass?: string
}

export interface ServiceOfferingsBentoProps {
  heading: string
  subheading?: string
  cells: ServiceBentoCell[]
}

function CellVisual({ visual }: { visual: ServiceBentoVisual }) {
  return (
    <figure
      className={cn(
        "w-full",
        visual.kind === "doodle" ? "bg-white" : "bg-blue-50"
      )}
    >
      <Image
        src={visual.src}
        alt={visual.alt}
        width={1024}
        height={1024}
        sizes="(min-width: 1024px) 360px, 50vw"
        className="block h-auto w-full"
      />
    </figure>
  )
}

function BentoCell({ cell, className }: { cell: ServiceBentoCell; className?: string }) {
  return (
    <article
      className={cn(
        "flex w-full flex-col gap-4 self-start p-5 sm:p-6",
        cell.gridClass,
        className
      )}
    >
      <CellVisual visual={cell.visual} />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg leading-snug font-medium tracking-[-0.02em] text-neutral-900">
          {cell.step != null ? (
            <>
              <span className="mr-2 tabular-nums text-blue-600">
                {String(cell.step).padStart(2, "0")}
              </span>
              {cell.title}
            </>
          ) : (
            cell.title
          )}
        </h3>
        <p className="max-w-[38ch] text-sm leading-relaxed text-black/55">{cell.text}</p>
      </div>
    </article>
  )
}

export function ServiceOfferingsBento({
  heading,
  subheading,
  cells,
}: ServiceOfferingsBentoProps) {
  return (
    <section
      aria-label={heading}
      className="mt-2 overflow-hidden px-6 sm:mt-3 sm:px-4"
    >
      <div className="mx-auto max-w-[88rem] bg-white">
        <header className="border-b border-black/10 pb-6 pt-2 sm:pb-8">
          <h2 className="max-w-[24ch] text-3xl font-medium tracking-[-0.02em] text-balance text-neutral-900 sm:text-4xl">
            {heading}
          </h2>
          {subheading ? (
            <p className="mt-3 max-w-[48ch] text-base/7 text-pretty text-black/55">
              {subheading}
            </p>
          ) : null}
        </header>

        <div className="grid auto-rows-auto grid-cols-1 items-start lg:grid-cols-6">
          {cells.map((cell, index) => {
            const isLast = index === cells.length - 1
            const rowIndex = index < 3 ? 0 : 1
            const colInRow = index < 3 ? index : index - 3

            return (
              <BentoCell
                key={cell.title}
                cell={cell}
                className={cn(
                  cell.gridClass ?? (index < 3 ? "lg:col-span-2" : "lg:col-span-3"),
                  "border-black/10",
                  index > 0 && "border-t lg:border-t-0",
                  colInRow > 0 && "lg:border-l",
                  rowIndex === 1 && "lg:border-t",
                  !isLast && "max-lg:border-b max-lg:border-black/10"
                )}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
