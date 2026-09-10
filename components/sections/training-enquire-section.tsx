import Link from "next/link"

import { Button } from "@/components/ui/button"

const phones = ["+91 966-700-2480", "+91 935-018-8055"] as const

export function TrainingEnquireSection() {
  return (
    <section
      id="enquire"
      aria-labelledby="enquire-heading"
      className="relative isolate mt-2 overflow-hidden rounded-2xl bg-[#081d3b] text-white sm:mt-3"
    >
      <div className="relative flex flex-col gap-10 px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12 lg:py-36">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <h2
            id="enquire-heading"
            className="max-w-[16ch] mx-auto text-[clamp(2.4rem,5.4vw,4rem)] font-medium leading-[0.98] tracking-[-0.03em] text-balance"
          >
            Enquire for course admission
          </h2>
          <p className="mx-auto max-w-xl text-base/7 text-white/78 sm:text-lg/8">
            Tell us your goals and preferred contact method. We will follow up
            from Voiceline Studio in Shahpur Jat.
          </p>
        </div>

        <form className="mx-auto flex w-full max-w-md flex-col gap-4 text-left">
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-white/78">Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              className="h-11 rounded-xl border border-white/15 bg-white/8 px-4 text-white placeholder:text-white/40 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              placeholder="Your name"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-white/78">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="h-11 rounded-xl border border-white/15 bg-white/8 px-4 text-white placeholder:text-white/40 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              placeholder="you@email.com"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-white/78">Phone</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              className="h-11 rounded-xl border border-white/15 bg-white/8 px-4 text-white placeholder:text-white/40 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              placeholder="+91"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-white/78">Message</span>
            <textarea
              name="message"
              rows={4}
              className="rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-white placeholder:text-white/40 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              placeholder="Tell us about your training goals"
            />
          </label>
          <Button
            type="submit"
            size="lg"
            className="mt-2 h-12 rounded-full bg-white text-[#081d3b] hover:bg-white/90"
          >
            Send message
          </Button>
        </form>

        <div className="mx-auto flex flex-col items-center gap-4 pt-4">
          <Button
            nativeButton={false}
            render={<Link href="mailto:info@voiceline.in" />}
            variant="outline"
            className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
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
        </div>
      </div>
    </section>
  )
}
