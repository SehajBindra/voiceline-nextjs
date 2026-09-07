"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Where is Voiceline Studio?",
    answer:
      "Shahpur Jat, Delhi NCR. Send your brief when you reach out. We will confirm the room and how to get there.",
  },
  {
    question: "What can I record here?",
    answer:
      "Vocals, voiceover, music, podcasts, dubbing, and post-production. That includes sound editing, foley, and background music. Indian-language voiceover with a focus on neutral Hindi and English.",
  },
  {
    question: "Do you offer voice training?",
    answer:
      "Yes. Rakesh Jagtiani teaches Hudson Voice Technique UK. Working professionals, educators, people who want to become voice artists. You train in the same studio used for recording sessions.",
  },
  {
    question: "What gear is in the rooms?",
    answer:
      "AKG C2 and Rode NT-series mics, Focusrite Scarlett 6i6, Yamaha MG06 and HS5 monitors, Sennheiser HD 560S headphones, FabFilter and Waves 10, Presonus plugins, and Studio One 5. Acoustic treatment throughout. The list is short on purpose. It is what is actually in the room.",
  },
] as const

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mt-2 overflow-hidden rounded-2xl bg-muted text-foreground sm:mt-3"
    >
      <div className="grid gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-28">
        <div className="max-w-md">
          <h2
            id="faq-heading"
            className="text-[clamp(2.2rem,4.5vw,3.75rem)] font-medium leading-[1] tracking-[-0.03em] text-balance"
          >
            Ask this before you book.
          </h2>
          <p className="mt-7 text-base/7 text-muted-foreground">
            Location, rooms, training, gear. Straight answers. No brochure
            language.
          </p>
        </div>

        <Accordion defaultValue={[faqs[0].question]} className="rounded-2xl border-border bg-card">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="px-5 py-4 text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 text-sm/6 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
