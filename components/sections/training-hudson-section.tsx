export function TrainingHudsonSection() {
  return (
    <section
      id="hudson"
      aria-labelledby="hudson-heading"
      className="mt-2 overflow-hidden rounded-2xl bg-[#081d3b] text-white sm:mt-3"
    >
      <div className="grid gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
        <div className="max-w-xl">
          <h2
            id="hudson-heading"
            className="max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.75rem)] font-medium leading-[0.98] tracking-[-0.03em] text-balance"
          >
            The Hudson Voice Technique advantage
          </h2>
          <p className="mt-6 max-w-[44ch] text-base/7 text-white/72 sm:text-lg/8">
            Seven foundational modules, plus seven more adapted for India. Fourteen
            in total, delivered across six sessions of 1.5 to 2 hours each.
          </p>
          <p className="mt-5 max-w-[44ch] text-base/7 text-white/72 sm:text-lg/8">
            Participants can earn a diploma issued by Voice Master International UK
            when they complete the full program.
          </p>
        </div>

        <dl className="flex flex-col gap-0 divide-y divide-white/12 rounded-2xl border border-white/12">
          {[
            {
              term: "Module structure",
              detail:
                "Seven foundational Hudson modules plus seven adapted for the Indian context.",
            },
            {
              term: "Session format",
              detail:
                "Six live sessions in the studio, each running 1.5 to 2 hours.",
            },
            {
              term: "Global reach",
              detail:
                "Taught in 89 countries and 27 languages for over two decades.",
            },
            {
              term: "Diploma pathway",
              detail:
                "Complete the program to qualify for a Voice Master International UK diploma.",
            },
          ].map((item) => (
            <div
              key={item.term}
              className="grid gap-2 px-5 py-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] sm:gap-8"
            >
              <dt className="text-sm font-medium text-white/88">{item.term}</dt>
              <dd className="text-sm/6 text-white/68">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
