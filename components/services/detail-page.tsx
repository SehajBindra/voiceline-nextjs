import Image from "next/image"
import Link from "next/link"
import type { ComponentProps } from "react"
import { CheckmarkCircle01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { cn } from "cn"

import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type Icon = ComponentProps<typeof HugeiconsIcon>["icon"]

export interface ServicePageGroupItem {
  title: string
  text?: string
  icon?: Icon
}

export interface ServicePageGroup {
  heading: string
  items: ServicePageGroupItem[]
}

export interface ServicePageFact {
  label: string
  value: string
  icon?: Icon
}

export interface ServicePageProps {
  eyebrow: string
  title: string
  accentWord?: string
  intro: string
  image: string
  imageAlt: string
  marginalia: string
  groups: ServicePageGroup[]
  facts: ServicePageFact[]
}

const slateChip =
  "rounded-sm bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"

function Headline({
  title,
  accentWord,
}: {
  title: string
  accentWord?: string
}) {
  if (!accentWord || !title.includes(accentWord)) {
    return <>{title}</>
  }
  const [before, ...rest] = title.split(accentWord)
  return (
    <>
      {before}
      <span className={cn(slateChip, "inline-block px-2 py-0 whitespace-nowrap")}>
        {accentWord}
      </span>
      {rest.join(accentWord)}
    </>
  )
}

function FactBody({ fact }: { fact: ServicePageFact }) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-lg bg-linear-to-b from-blue-400 to-blue-600 p-2 text-white">
        <HugeiconsIcon
          icon={fact.icon ?? CheckmarkCircle01Icon}
          className="h-6 w-6"
          strokeWidth={2}
        />
      </div>
      <div>
        {/*<dt className="font-mono text-xs tracking-wide text-neutral-400 uppercase">
          {fact.label}
        </dt>*/}
        <dd className="max-w-[40ch] text-[15px] text-neutral-800">
          {fact.value}
        </dd>
      </div>
    </div>
  )
}

function ArrowToImage({ toward }: { toward: "down-right" | "up-left" }) {
  const stroke = {
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
  }

  if (toward === "down-right") {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none relative -mb-2 h-[3.25rem] w-full sm:-mb-3 sm:h-14"
      >
        <svg
          viewBox="0 0 88 64"
          fill="none"
          className="absolute top-0 right-24 h-full w-[5.75rem] text-neutral-400 sm:w-24"
        >
          <path d="M6 4 C 28 6, 52 26, 74 58" {...stroke} />
          <path d="M64 50 L76 58 L68 44" {...stroke} strokeLinejoin="round" />
        </svg>
      </div>
    )
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative -mt-5 mb-1 h-[3.25rem] w-full sm:h-14"
    >
      <svg
        viewBox="0 0 88 64"
        fill="none"
        className="absolute right-24 bottom-10 h-full w-[5.75rem] text-neutral-400 sm:w-24"
      >
        <path d="M82 60 C 60 58, 36 38, 14 6" {...stroke} />
        <path d="M24 14 L12 6 L20 20" {...stroke} strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function FactCallout({
  fact,
  placement,
}: {
  fact: ServicePageFact
  placement: "top-left" | "bottom-right"
}) {
  const isTopLeft = placement === "top-left"
  return (
    <div
      className={cn(
        "absolute z-10 max-w-[min(calc(100%-1rem),17rem)] sm:max-w-xs",
        isTopLeft
          ? "top-0 left-0 lg:-top-2 lg:-left-8 xl:-left-12"
          : "right-0 bottom-0 lg:-right-6 lg:-bottom-10 xl:-right-10",
      )}
    >
      <dl className="flex flex-col gap-0">
        {isTopLeft ? (
          <>
            <FactBody fact={fact} />
            <ArrowToImage toward="down-right" />
          </>
        ) : (
          <>
            <ArrowToImage toward="up-left" />
            <FactBody fact={fact} />
          </>
        )}
      </dl>
    </div>
  )
}

export function ServicePage({
  eyebrow,
  title,
  accentWord,
  intro,
  image,
  imageAlt,
  marginalia,
  groups,
  facts,
}: ServicePageProps) {
  return (
    <main className="overflow-x-clip bg-background text-foreground">
      {/* Hero */}
      <section aria-labelledby="service-hero-heading">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-10 px-6 pt-28 pb-10 sm:px-4 lg:grid-cols-2 lg:gap-14 lg:pb-14">
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink render={<Link href="/services" />}>
                    Studio Services
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{eyebrow}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1
              id="service-hero-heading"
              className="mt-4 max-w-[18ch] text-[clamp(2.2rem,4.8vw,3.75rem)] leading-tight font-medium tracking-[-0.03em] text-balance"
            >
              <Headline title={title} accentWord={accentWord} />
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-black/60">
              {intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={<Link href="#contact" />}

                className={cn(
                  slateChip,
                  "h-auto px-5 py-2.5 text-sm font-bold transition-[transform,opacity] duration-200 hover:-translate-y-0.5 hover:to-slate-800",
                )}
              >
                Get a quote
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="#contact" />}
                variant="outline"
                className="h-auto px-5 py-2.5 text-sm font-bold"
              >
                Book a session
              </Button>
            </div>
          </div>
          <div
            className="relative w-full pt-28 pb-32 sm:pt-32 sm:pb-36 lg:pt-24 lg:pb-28"
            aria-label="Good to know"
          >
            {facts[0] ? (
              <FactCallout fact={facts[0]} placement="top-left" />
            ) : null}
            {facts[1] ? (
              <FactCallout fact={facts[1]} placement="bottom-right" />
            ) : null}
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100 outline outline-1 outline-[oklch(0_0_0/0.1)]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-4 left-4 max-w-[min(100%,20rem)] rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-sm font-medium tracking-[-0.01em] text-neutral-800 shadow-[0_1px_2px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                {marginalia}
              </figcaption>
            </figure>
            {facts.length > 2 ? (
              <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {facts.slice(2).map((fact) => (
                  <div key={fact.label}>
                    <FactBody fact={fact} />
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </div>
      </section>

      {/* Detail groups */}
      {groups.map((group) => (
        <section
          key={group.heading}
          aria-label={group.heading}
          className="mt-2 rounded-2xl bg-white px-6 py-10 text-neutral-700 sm:mt-3 sm:px-8 lg:py-14"
        >
          <div className="mx-auto max-w-[88rem]">
            <h2 className="max-w-[24ch] text-3xl font-medium tracking-[-0.02em] text-balance text-neutral-900 sm:text-4xl">
              {group.heading}
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col items-start overflow-hidden rounded-lg border border-black/10 bg-white p-5 text-left"
                >
                  <div className="mb-4 flex flex-col items-start gap-y-4">
                    <div className="rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 p-2 text-white">
                      <HugeiconsIcon
                        icon={item.icon ?? CheckmarkCircle01Icon}
                        className="h-6 w-6"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-lg leading-snug font-medium tracking-normal text-black">
                      {item.title}
                    </h3>
                  </div>
                  {item.text ? (
                    <p className="text-sm text-black/60">{item.text}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </main>
  )
}
