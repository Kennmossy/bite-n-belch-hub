import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function CtaBand({
  heading,
  subtext,
  tone = "blush",
  message,
}: {
  heading: string;
  subtext?: string;
  tone?: "blush" | "charcoal";
  message?: string;
}) {
  const dark = tone === "charcoal";
  return (
    <section className={dark ? "bg-charcoal" : "bg-blush"}>
      <div className="container-page py-14 text-center sm:py-16">
        <Reveal>
          <h2
            className={`text-2xl font-bold sm:text-3xl ${dark ? "text-cream" : "text-charcoal"}`}
          >
            {heading}
          </h2>
          {subtext ? (
            <p className={`mx-auto mt-3 max-w-xl text-sm ${dark ? "text-cream/80" : "text-charcoal/75"}`}>
              {subtext}
            </p>
          ) : null}
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blush-deep px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lift"
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
