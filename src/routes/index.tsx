import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Cake,
  ChefHat,
  Clock,
  MessageCircle,
  Search,
  Star,
  Truck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { CtaBand } from "@/components/CtaBand";
import { images, products, testimonials, waLink } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bite n Belch Baking Home | Cakes and Baking Services in Kaduna" },
      {
        name: "description",
        content:
          "Kaduna's go-to home bakery for custom cakes, pastries, small chops, and event dessert tables. Clear pricing and same-day delivery. Order on WhatsApp.",
      },
      { property: "og:title", content: "Cakes in Kaduna | Bite n Belch Baking Home" },
      {
        property: "og:description",
        content:
          "Custom cakes, pastries, small chops, and dessert tables made with premium ingredients and delivered fresh across Kaduna.",
      },
    ],
  }),
  component: Home,
});

const trustPoints = [
  { icon: Truck, text: "Same-Day Delivery in Kaduna" },
  { icon: Star, text: "Premium Ingredients, Fair Prices" },
  { icon: Clock, text: "Baked Fresh to Order" },
  { icon: ChefHat, text: "Personalized Recipe Consultations" },
];

const steps = [
  { icon: Search, title: "Browse Our Menu or Chat on WhatsApp" },
  { icon: MessageCircle, title: "Confirm Your Order and Delivery Date" },
  { icon: Truck, title: "Pay on Delivery or Bank Transfer, Then Enjoy" },
];

function Home() {
  const bestsellers = products.filter((p) => p.featured).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-semibold text-charcoal shadow-soft">
              <Cake className="h-4 w-4 text-blush-deep" />
              Home bakery in Kaduna, Nigeria
            </span>
            <h1 className="mt-5 text-[2rem] font-bold text-charcoal sm:text-[2.75rem] lg:text-[3.5rem]">
              Kaduna's Go-To Home Bakery for Cakes That Taste as Good as They Look.
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              Custom cakes, pastries, small chops, and dessert tables made with premium
              ingredients, delivered fresh to your door.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blush-deep px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lift"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold px-6 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-card hover:shadow-soft"
              >
                View Menu
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <img
              src={images.heroCake}
              alt="Two-tier celebration cake with gold accents and fresh roses"
              width={1024}
              height={1024}
              className="w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-blush">
        <div className="container-page grid grid-cols-2 gap-5 py-7 lg:grid-cols-4">
          {trustPoints.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-2.5">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-charcoal" />
              <span className="text-sm font-medium text-charcoal">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title="Our Bestsellers"
            subtext="The treats our Kaduna customers order again and again."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {bestsellers.map((product, i) => (
              <Reveal key={product.id} delay={i * 100}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="bg-card py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-blush" aria-hidden="true" />
              <img
                src={images.kitchen}
                alt="Baker piping buttercream onto a cake in a home kitchen"
                loading="lazy"
                width={1024}
                height={1024}
                className="relative w-full rounded-2xl object-cover shadow-soft"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading title="Baked With Home Kitchen Warmth" center={false} />
            <p className="mt-5 text-base text-muted-foreground">
              Bite n Belch Baking Home is Kaduna's go-to home bakery for beautifully crafted,
              delicious baked goods made with premium ingredients. We combine professional
              quality with the warmth of a home kitchen.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-blush px-6 py-3 text-sm font-semibold text-charcoal transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-blush-deep hover:text-primary-foreground hover:shadow-lift"
            >
              Read Our Story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* How ordering works */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading title="Ordering Is Simple" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map(({ icon: Icon, title }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-card p-6 text-center shadow-soft transition-shadow duration-300 hover:shadow-lift">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold font-heading text-lg font-bold text-gold">
                    {i + 1}
                  </span>
                  <Icon className="mx-auto mt-4 h-6 w-6 text-blush-deep" />
                  <h3 className="mt-3 font-heading text-lg font-semibold text-charcoal">{title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading title="What Our Customers Say" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="h-full rounded-2xl bg-cream p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm text-charcoal">"{t.quote}"</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-blush-deep">
                    {t.name}, {t.event}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Budget highlight */}
      <section className="bg-blush">
        <div className="container-page py-14 text-center sm:py-16">
          <Reveal>
            <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">Treats for Every Budget</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-charcoal/75">
              From simple everyday treats to luxury custom cakes, we have options that fit your
              budget without compromising on taste or presentation.
            </p>
            <Link
              to="/pricing"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-card px-6 py-3 text-sm font-semibold text-charcoal shadow-soft transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lift"
            >
              See Pricing and Packages
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand
        tone="charcoal"
        heading="Ready to Order Something Delicious?"
        subtext="Chat with us on WhatsApp or browse our full menu."
      />
    </>
  );
}
