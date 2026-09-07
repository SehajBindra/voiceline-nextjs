import Link from "next/link"

import { Separator } from "@/components/ui/separator"

const studioLinks = [
  { label: "Services", href: "#services" },
  { label: "Rooms", href: "#spaces" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
] as const

const trainingLinks = [
  { label: "Hudson Voice Technique", href: "#training" },
  { label: "Book a session", href: "#contact" },
  { label: "Show reel", href: "https://voiceline.in/show-reel/" },
  { label: "voiceline.in", href: "https://voiceline.in/" },
] as const

export function FooterSection() {
  const year = new Date().getFullYear()

  return (
    <footer
      aria-label="Voiceline Studio footer"
      className="mt-2 overflow-hidden rounded-2xl bg-[#081d3b] text-white sm:mt-3"
    >
      <div className="px-5 pt-14 sm:px-8 sm:pt-16 lg:px-12">
        <div className="grid gap-10 pb-12 lg:grid-cols-[1.2fr_0.6fr_0.6fr_0.8fr]">
          <div className="flex max-w-xs flex-col gap-4">
            <p className="font-mono text-sm tracking-wide">Voiceline</p>
            <p className="text-sm/6 text-white/68">
              Training &amp; Studio. Recording, mixing, and Hudson Voice
              Technique training in Shahpur Jat, Delhi NCR.
            </p>
          </div>

          <nav aria-label="Studio" className="flex flex-col gap-3">
            <p className="font-mono text-xs tracking-widest text-white/50 uppercase">
              Studio
            </p>
            {studioLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="w-fit text-sm/6 text-white/78 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Training" className="flex flex-col gap-3">
            <p className="font-mono text-xs tracking-widest text-white/50 uppercase">
              Training
            </p>
            {trainingLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="w-fit text-sm/6 text-white/78 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs tracking-widest text-white/50 uppercase">
              Contact
            </p>
            <Link
              href="mailto:info@voiceline.in"
              className="w-fit text-sm/6 text-white/78 transition-colors hover:text-white"
            >
              info@voiceline.in
            </Link>
            <Link
              href="tel:+919667002480"
              className="w-fit text-sm/6 text-white/78 transition-colors hover:text-white"
            >
              +91 966-700-2480
            </Link>
            <Link
              href="tel:+919350188055"
              className="w-fit text-sm/6 text-white/78 transition-colors hover:text-white"
            >
              +91 935-018-8055
            </Link>
            <p className="text-sm/6 text-white/50">
              Shahpur Jat, Delhi NCR
            </p>
          </div>
        </div>

        <Separator className="bg-white/12" />

        <div className="flex flex-col gap-2 py-5 font-mono text-xs tracking-wide text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Voiceline Studio. All rights reserved.</p>
          <p>Rakesh Jagtiani · Uma Sharma · Hudson Voice Technique UK</p>
        </div>
      </div>

      <div aria-hidden className="px-2 pb-2 sm:px-3 sm:pb-3">
        <p className="text-center text-[clamp(3.5rem,14.5vw,13rem)] leading-[0.85] font-bold tracking-[-0.05em] text-white uppercase select-none">
          Voiceline
        </p>
      </div>
    </footer>
  )
}
