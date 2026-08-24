import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { business, waLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Bite n Belch Baking Home, Kaduna" },
      {
        name: "description",
        content:
          "Call, email, or WhatsApp Bite n Belch Baking Home in Kaduna for orders, questions, and custom cake quotes.",
      },
      { property: "og:title", content: "Get In Touch | Bite n Belch Baking Home" },
      {
        property: "og:description",
        content: "Reach out for orders, questions, or custom quotes anywhere in Kaduna.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (message.length < 10) next.message = "Please tell us a little more.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  };

  const details = [
    { icon: Phone, label: business.phoneLocal, href: `tel:+${business.whatsappNumber}` },
    { icon: MessageCircle, label: "Chat on WhatsApp", href: waLink() },
    { icon: Mail, label: business.email, href: `mailto:${business.email}` },
    { icon: MapPin, label: business.address },
    { icon: Clock, label: business.hours },
  ];

  return (
    <>
      <PageHeader
        crumb="Contact"
        title="Get In Touch"
        subtext="We'd love to hear from you. Reach out for orders, questions, or custom quotes."
      />

      <section className="pb-14">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal>
            <ul className="space-y-4">
              {details.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blush">
                    <Icon className="h-5 w-5 text-blush-deep" />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="break-all pt-2 text-sm text-charcoal transition-colors duration-200 hover:text-blush-deep"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="pt-2 text-sm text-charcoal">{label}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-soft transition-all duration-200 hover:-translate-y-0.5"
              >
                <Instagram className="h-5 w-5 text-gold" />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-soft transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5 text-gold" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-card p-6 shadow-soft"
              noValidate
            >
              <h2 className="font-heading text-xl font-semibold text-charcoal">Send a Message</h2>
              {sent ? (
                <Alert className="mt-4 border-success bg-success/10">
                  <AlertTitle className="text-charcoal">Message sent</AlertTitle>
                  <AlertDescription className="text-charcoal/80">
                    Thank you for reaching out. We will get back to you shortly.
                  </AlertDescription>
                </Alert>
              ) : null}
              <div className="mt-5 space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" className="mt-1.5" placeholder="Your full name" />
                  {errors.name ? (
                    <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" className="mt-1.5" placeholder="you@example.com" />
                  {errors.email ? (
                    <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} className="mt-1.5" placeholder="How can we help?" />
                  {errors.message ? (
                    <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-blush-deep px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lift"
                >
                  Send Message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <div className="overflow-hidden rounded-2xl shadow-lift">
            <iframe
              title="Bite n Belch Baking Home delivery area in Kaduna"
              src={business.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 sm:h-96"
            />
          </div>
        </div>
      </section>

      <CtaBand heading="Prefer to Chat? Message Us Directly on WhatsApp" />
    </>
  );
}
