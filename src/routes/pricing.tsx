import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { addOns, pricingTiers, waLink } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing and Packages | Cake Prices in Kaduna" },
      {
        name: "description",
        content:
          "Transparent cake, pastry, and dessert table pricing in Kaduna. Budget-friendly, celebration, and premium event packages with no hidden costs.",
      },
      { property: "og:title", content: "Pricing and Packages | Bite n Belch Baking Home" },
      {
        property: "og:description",
        content: "Transparent pricing for every budget. Packages start from N5,000.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHeader
        crumb="Pricing"
        title="Pricing and Packages"
        subtext="Transparent pricing for every budget. No hidden costs."
      />

      <section className="pb-14">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl bg-card p-6 shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lift",
                  tier.premium && "border-2 border-gold",
                )}
              >
                <span
                  className={cn(
                    "self-start rounded-full px-3 py-1 text-[11px] font-semibold",
                    tier.badgeTone === "gold"
                      ? "bg-gold text-accent-foreground"
                      : "bg-blush-deep text-primary-foreground",
                  )}
                >
                  {tier.badge}
                </span>
                <h2 className="mt-4 font-heading text-xl font-bold text-charcoal">{tier.name}</h2>
                <p className="mt-1 text-lg font-semibold text-gold">{tier.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">{tier.blurb}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-charcoal">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(
                    `Hi Bite n Belch, I'd like to order the ${tier.name}. Please share the details.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blush px-5 py-3 text-sm font-semibold text-charcoal transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-blush-deep hover:text-primary-foreground hover:shadow-lift"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order This Package
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-card py-14 sm:py-18">
        <div className="container-page">
          <SectionHeading title="Optional Add-Ons" center={false} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a) => (
              <li
                key={a.name}
                className="flex items-center justify-between gap-3 rounded-2xl bg-cream px-4 py-3 shadow-soft"
              >
                <span className="text-sm text-charcoal">{a.name}</span>
                <span className="text-sm font-semibold text-gold">{a.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page">
          <p className="rounded-2xl border border-gold bg-cream p-5 text-sm text-charcoal">
            We accept payment on delivery or bank transfer. No online payment required at this
            time.
          </p>
        </div>
      </section>
    </>
  );
}
