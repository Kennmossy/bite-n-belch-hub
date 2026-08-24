import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { faqGroups } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Ordering, Delivery and Payment in Kaduna" },
      {
        name: "description",
        content:
          "Answers about ordering lead times, Kaduna delivery areas, same-day delivery, payment on delivery, bank transfer, and rush orders.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Bite n Belch Baking Home" },
      {
        property: "og:description",
        content: "Everything you need to know about ordering, delivery, and payment.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader
        crumb="FAQ"
        title="Frequently Asked Questions"
        subtext="Everything you need to know about ordering, delivery, and payment."
      />

      <section className="pb-16">
        <div className="container-page max-w-3xl">
          {faqGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 80} className="mb-8">
              <h2 className="font-heading text-lg font-semibold text-blush-deep">{group.title}</h2>
              <div className="gold-rule mt-2" />
              <Accordion type="single" collapsible className="mt-3">
                {group.items.map((item, i) => (
                  <AccordionItem
                    key={item.q}
                    value={`${gi}-${i}`}
                    className="mb-3 overflow-hidden rounded-2xl border border-border bg-card px-4 data-[state=open]:border-gold"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold text-charcoal hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand heading="Still Have Questions? We're Happy to Help." />
    </>
  );
}
