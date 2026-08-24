import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { galleryItems } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Portfolio | Wedding and Birthday Cakes in Kaduna" },
      {
        name: "description",
        content:
          "Photos of cakes, pastries, and dessert tables we have created for weddings, birthdays, and corporate events in Kaduna and Abuja.",
      },
      { property: "og:title", content: "Our Portfolio | Bite n Belch Baking Home" },
      {
        property: "og:description",
        content:
          "A look at the cakes, pastries, and dessert tables we have created across Kaduna and Abuja.",
      },
    ],
  }),
  component: GalleryPage,
});

const filters = ["All", "Weddings", "Birthdays", "Corporate", "Small Chops"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = galleryItems.filter((i) => filter === "All" || i.category === filter);
  const active = openIndex !== null ? items[openIndex] : undefined;

  const step = (dir: number) => {
    setOpenIndex((prev) => {
      if (prev === null) return prev;
      return (prev + dir + items.length) % items.length;
    });
  };

  return (
    <>
      <PageHeader
        crumb="Gallery"
        title="Our Portfolio"
        subtext="A look at the cakes, pastries, and dessert tables we've created for weddings, birthdays, and corporate events across Kaduna and Abuja."
      />

      <section className="pb-16 sm:pb-20">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out",
                  filter === f
                    ? "bg-blush-deep text-primary-foreground shadow-soft"
                    : "bg-card text-charcoal hover:bg-blush/50",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {items.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setOpenIndex(i)}
                className="group overflow-hidden rounded-2xl shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lift"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-40 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 sm:h-64"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-3xl bg-cream p-4">
          <DialogTitle className="font-heading text-base text-charcoal">
            {active?.alt ?? "Gallery image"}
          </DialogTitle>
          {active ? (
            <div className="relative">
              <img
                src={active.image}
                alt={active.alt}
                width={1024}
                height={768}
                className="max-h-[70vh] w-full rounded-2xl object-contain"
              />
              <button
                aria-label="Previous image"
                onClick={() => step(-1)}
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-soft transition-colors duration-200 hover:bg-blush"
              >
                <ChevronLeft className="h-5 w-5 text-charcoal" />
              </button>
              <button
                aria-label="Next image"
                onClick={() => step(1)}
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-soft transition-colors duration-200 hover:bg-blush"
              >
                <ChevronRight className="h-5 w-5 text-charcoal" />
              </button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      <CtaBand heading="Loved What You See? Let's Create Something for Your Event." />
    </>
  );
}
