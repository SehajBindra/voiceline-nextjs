import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const phones = ["+91 966-700-2480", "+91 935-018-8055"] as const

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate mt-2 overflow-hidden rounded-2xl bg-[#081d3b] text-white sm:mt-3"
    >
      <Image
        src="/hero/recording-booth.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[#081d3b]/78"
        aria-hidden
      />

      <div className="relative flex flex-col gap-10 px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto flex max-w-3xl flex-col gap-7">
          <h2 className="text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.96] tracking-[-0.03em] text-balance">
            Book the session. Then show up and do the work.
          </h2>
          <p className="mx-auto max-w-xl text-base/7 text-white/78 sm:text-lg/8">
            Tell us what you are recording. Vocals, podcast, mix, or training.
            We will line up the room and the engineer in Shahpur Jat.
          </p>
        </div>

        <div className="mx-auto flex max-w-lg flex-col items-center gap-6">
          <Button
            nativeButton={false}
            render={
              <Link href="mailto:info@voiceline.in" />
            }
            size="lg"
            className="h-12 rounded-full bg-white px-8 text-sm text-[#081d3b] hover:bg-white/90"
          >
            info@voiceline.in
          </Button>

          <div className="flex flex-col gap-2 text-sm/6 text-white/78">
            {phones.map((phone) => (
              <Link
                key={phone}
                href={`tel:${phone.replace(/\s|-/g, "")}`}
                className="transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {phone}
              </Link>
            ))}
          </div>

          <p className="max-w-md text-sm/6 text-white/65">
            Shahpur Jat, Delhi NCR · WhatsApp, Instagram, and Facebook on{" "}
            <Link
              href="https://voiceline.in/"
              className="underline underline-offset-4 transition-colors hover:text-white"
            >
              voiceline.in
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
