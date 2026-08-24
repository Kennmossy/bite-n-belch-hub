import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ShoppingBag, Truck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { budgetRanges, business, waLink } from "@/data/site";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Place Your Order | Bite n Belch Baking Home, Kaduna" },
      {
        name: "description",
        content:
          "Order cakes, pastries, small chops, or a dessert table in Kaduna. Send your details on WhatsApp or through our order request form.",
      },
      { property: "og:title", content: "Place Your Order | Bite n Belch Baking Home" },
      {
        property: "og:description",
        content:
          "Fill out the order form or message us on WhatsApp. We confirm your order and delivery details within a few hours.",
      },
    ],
  }),
  component: OrderPage,
});

const productOptions = ["Cake", "Pastries", "Small Chops", "Dessert Table", "Custom"];
const eventOptions = ["Birthday", "Wedding", "Corporate", "Other"];

function OrderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [product, setProduct] = useState("");
  const [eventType, setEventType] = useState("");
  const [budget, setBudget] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    const name = String(data.get("fullName") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const date = String(data.get("deliveryDate") ?? "").trim();

    if (name.length < 2) next.fullName = "Please enter your full name.";
    if (!/^[0-9+\s-]{7,}$/.test(phone)) next.phone = "Please enter a valid phone number.";
    if (!product) next.product = "Please choose a product or category.";
    if (!date) next.deliveryDate = "Please choose a delivery date.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      form.reset();
      setProduct("");
      setEventType("");
      setBudget("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <PageHeader
        crumb="Order"
        title="Place Your Order"
        subtext="Fill out the form below or message us directly on WhatsApp. We'll confirm your order and delivery details within a few hours."
      />

      <section className="pb-12">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-soft">
              <MessageCircle className="h-6 w-6 text-blush-deep" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-charcoal">
                Order via WhatsApp
              </h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                Fastest way to order, chat with us directly.
              </p>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-blush-deep px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lift"
              >
                <MessageCircle className="h-4 w-4" />
                Open WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-soft">
              <ShoppingBag className="h-6 w-6 text-gold" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-charcoal">
                Order via Form
              </h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                Fill out the details below and we'll reach out to confirm.
              </p>
              <a
                href="#order-form"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-gold px-5 py-3 text-sm font-semibold text-charcoal transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-blush/40"
              >
                Go to Form
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="order-form" className="pb-14">
        <div className="container-page max-w-3xl">
          {submitted ? (
            <Alert className="mb-6 border-success bg-success/10">
              <AlertTitle className="text-charcoal">Order request received</AlertTitle>
              <AlertDescription className="text-charcoal/80">
                Thank you. Our team will follow up on WhatsApp shortly to confirm your order and
                delivery details.
              </AlertDescription>
            </Alert>
          ) : null}

          <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-card p-6 shadow-soft">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="fullName" className="mt-1.5" placeholder="Your full name" />
                {errors.fullName ? (
                  <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" inputMode="tel" className="mt-1.5" placeholder="080 0000 0000" />
                {errors.phone ? (
                  <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  inputMode="tel"
                  className="mt-1.5"
                  placeholder={business.phoneLocal}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1.5"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <Label htmlFor="product">Product or Category</Label>
                <Select value={product} onValueChange={setProduct}>
                  <SelectTrigger id="product" className="mt-1.5 w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {productOptions.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.product ? (
                  <p className="mt-1 text-xs text-destructive">{errors.product}</p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="eventType">Event Type</Label>
                <Select value={eventType} onValueChange={setEventType}>
                  <SelectTrigger id="eventType" className="mt-1.5 w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventOptions.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="deliveryDate">Delivery Date</Label>
                <Input id="deliveryDate" name="deliveryDate" type="date" className="mt-1.5" />
                {errors.deliveryDate ? (
                  <p className="mt-1 text-xs text-destructive">{errors.deliveryDate}</p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="budgetRange">Budget Range</Label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger id="budgetRange" className="mt-1.5 w-full">
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="address">Delivery Address or Pickup</Label>
                <Input
                  id="address"
                  name="address"
                  className="mt-1.5"
                  placeholder="Street and area in Kaduna, or write Pickup"
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="mt-1.5"
                  placeholder="Flavour, size, colours, design references"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-blush-deep px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lift"
            >
              Send My Order Request
            </button>
          </form>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page max-w-3xl">
          <div className="flex gap-3 rounded-2xl border border-gold bg-cream p-5">
            <Truck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div className="text-sm text-charcoal">
              <p className="font-semibold">Delivery and payment</p>
              <p className="mt-1 text-muted-foreground">
                We deliver across Kaduna metropolis and surrounding areas. Same-day delivery is
                available for orders placed before 11am, subject to our baking schedule. Payment
                is on delivery or by bank transfer only. There is no online payment gateway.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
