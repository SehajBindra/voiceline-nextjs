import { Separator } from "@/components/ui/separator"

const team = [
  {
    name: "Rakesh Jagtiani",
    role: "Owner · voice artist · Hudson Voice Technique trainer",
  },
  {
    name: "Uma Sharma",
    role: "Co-owner",
  },
  {
    name: "Sagar",
    role: "Music producer & sound engineer",
  },
  {
    name: "Surender",
    role: "Studio support",
  },
  {
    name: "Sunil",
    role: "Field support",
  },
] as const

export function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="mt-2 overflow-hidden rounded-2xl bg-card text-card-foreground sm:mt-3"
    >
      <div className="flex flex-col gap-12 px-5 py-20 sm:px-8 lg:gap-16 lg:px-12 lg:py-28">
        <div className="max-w-2xl">
          <h2
            id="team-heading"
            className="text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.03em] text-balance"
          >
            You will know who is in the room.
          </h2>
          <p className="mt-7 max-w-xl text-base/7 text-muted-foreground sm:text-lg/8">
            Owners on the floor. Engineers at the console. Support keeping
            sessions on time. These are the names. Not a rotating roster you
            meet once and never see again.
          </p>
        </div>

        <div className="max-w-3xl">
          {team.map((person, index) => (
            <div key={person.name}>
              <div className="grid gap-2 py-7 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:items-baseline sm:gap-10">
                <p className="text-lg font-medium tracking-[-0.02em]">
                  {person.name}
                </p>
                <p className="text-sm/6 text-muted-foreground">{person.role}</p>
              </div>
              {index < team.length - 1 ? <Separator /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
