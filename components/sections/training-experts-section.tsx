const experts = [
  {
    name: "Steve Hudson",
    role: "Creator of the Hudson Voice Technique and founder of Voice Master International UK",
  },
  {
    name: "Rakesh Jagtiani",
    role: "Voiceline owner, voice artist, and certified Hudson Voice Technique trainer in Delhi",
  },
] as const

export function TrainingExpertsSection() {
  return (
    <section
      id="experts"
      aria-labelledby="experts-heading"
      className="mt-2 overflow-hidden rounded-2xl bg-white text-[#081d3b] sm:mt-3"
    >
      <div className="flex flex-col gap-12 px-5 py-20 sm:px-8 lg:gap-16 lg:px-12 lg:py-28">
        <div className="max-w-2xl">
          <h2
            id="experts-heading"
            className="max-w-[14ch] text-[clamp(2.2rem,4.8vw,3.75rem)] font-medium leading-[0.98] tracking-[-0.03em] text-balance"
          >
            Meet the experts
          </h2>
          <p className="mt-6 max-w-[44ch] text-base/7 text-[#081d3b]/68 sm:text-lg/8">
            Learn from the technique&apos;s origin and from the trainer who
            brings it to Delhi every week.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="rounded-2xl border border-[#081d3b]/10 bg-[#081d3b]/[0.02] p-6 sm:p-8"
            >
              <h3 className="text-xl font-medium tracking-[-0.02em]">
                {expert.name}
              </h3>
              <p className="mt-4 max-w-[42ch] text-base/7 text-[#081d3b]/68">
                {expert.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
