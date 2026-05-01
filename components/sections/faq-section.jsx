import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is ASCII?",
    answer:
      "ASCII stands for Association of Students for Computer Intelligence and Integration. It is an academic organization under the Polytechnic University of the Philippines that focuses on Computer Science excellence, innovation, and student empowerment in the field of technology.",
  },
  {
    question: "Who can join the organization?",
    answer:
      "All bonafide Computer Science students of PUP are welcome to join ASCII. We encourage students from all year levels who are passionate about technology, innovation, and leadership to become part of our community.",
  },
  {
    question: "What activities does ASCII conduct?",
    answer:
      "ASCII conducts various activities including academic seminars, coding competitions (like IQ League and ISKODER), tech talks, study sessions, partnership activities with other organizations, and community outreach programs focused on technology education.",
  },
  {
    question: "How can I participate?",
    answer:
      "You can participate by attending our events, joining our membership drive at the start of each academic year, or following our social media accounts for announcements about upcoming activities and opportunities.",
  },
  {
    question: "What are the benefits of joining ASCII?",
    answer:
      "Members gain access to exclusive workshops, networking opportunities with industry professionals, leadership development programs, hands-on project experience, and a supportive community of fellow tech enthusiasts.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about PUP ASCII and how you can be part of our community.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-4"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
