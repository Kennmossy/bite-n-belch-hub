import { createFileRoute, Link } from "@tanstack/react-router";
import { Cake, Clock, HeartHandshake, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { galleryItems, images } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | Bite n Belch Baking Home, Kaduna" },
      {
        name: "description",
        content:
          "Meet the home bakery behind Kaduna's favourite custom cakes, pastries, and dessert tables. Professional quality with home kitchen warmth.",
      },
      { property: "og:title", content: "Our Story | Bite n Belch Baking Home" },
      {
        property: "og:description",
        content:
          "How Bite n Belch Baking Home serves Kaduna and its environs with premium baked goods and personal service.",
      },
    ],
  }),
  component: About,
});

const values = [
  { icon: Star, title: "Quality Ingredients", text: "Premium butter, fresh eggs, and real flavourings in every bake." },
  { icon: Cake, title: "Fair and Flexible Pricing", text: "Clear prices and options that respect your budget." },
  { icon: Clock, title: "Reliability and On-Time Delivery", text: "Your order arrives fresh and when we promised." },
  { icon: HeartHandshake, title: "Personalized Service", text: "We plan flavours and designs with you, not for you." },
];

function About() {
  return (
    <>
      <PageHeader crumb="About" title="Our Story" />

      <section className="py-12 sm:py-16">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.kitchen}
              alt="Baking in progress in the Bite n Belch home kitchen"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading title="Professional Quality, Home Kitchen Warmth" center={false} />
            <div className="mt-5 space-y-4 text-base text-muted-foreground">
              <p>
                Bite n Belch Baking Home started with a simple belief. A cake should look
                beautiful and taste even better, and no one should have to choose between the
                two because of price.
              </p>
              <p>
                From our kitchen in Kaduna we bake custom cakes, pastries, small chops, and
                full dessert tables for birthdays, weddings, and corporate events across Kaduna
                and its environs. Every order is made to order, never mass produced, so the
                flavour, size, and design are shaped around your occasion.
              </p>
              <p>
                We keep the process personal. You talk directly with the people baking your
                order, we advise honestly on what works for your budget, and we deliver on
                time, every time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-card py-14 sm:py-18">
        <div className="container-page">
          <SectionHeading title="Our Values" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-cream p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <Icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-charcoal">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <img
                src={images.founder}
                alt="Founder and head baker of Bite n Belch Baking Home"
                loading="lazy"
                width={768}
                height={768}
                className="mx-auto h-36 w-36 rounded-full object-cover shadow-lift"
              />
              <h2 className="mt-6 text-2xl font-bold text-charcoal sm:text-3xl">Meet the Founder</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                Founder and Head Baker
              </p>
              <blockquote className="mt-5 text-base text-muted-foreground">
                "I started baking for family celebrations, and I kept hearing the same thing.
                People wanted a cake that looked special without an unfair price. That is what
                Bite n Belch is here for, and it is why I still check every order myself."
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-card py-14 sm:py-18">
        <div className="container-page">
          <SectionHeading title="A Look at Our Work" />
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {galleryItems.slice(0, 6).map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <div className="overflow-hidden rounded-2xl shadow-soft">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-40 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 sm:h-56"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-gold px-6 py-3 text-sm font-semibold text-charcoal transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-blush/40"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <CtaBand heading="Want to Work With Us for Your Next Event?" />
    </>
  );
}
