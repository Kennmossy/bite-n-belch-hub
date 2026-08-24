import { createFileRoute, Link } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { productCategories, products } from "@/data/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Our Menu | Cakes, Pastries and Small Chops in Kaduna" },
      {
        name: "description",
        content:
          "Browse cakes, pastries, small chops, and dessert tables with clear prices. Made to order in Kaduna and delivered fresh.",
      },
      { property: "og:title", content: "Our Menu | Bite n Belch Baking Home" },
      {
        property: "og:description",
        content:
          "Fresh, made-to-order treats for every occasion and every budget, with prices listed upfront.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <PageHeader
        crumb="Menu"
        title="Our Menu"
        subtext="Fresh, made-to-order treats for every occasion and every budget."
      />

      <section className="pb-16 sm:pb-20">
        <Tabs defaultValue="Cakes">
          <div className="sticky top-16 z-30 border-b border-border bg-cream/95 backdrop-blur">
            <div className="container-page">
              <TabsList className="h-auto w-full justify-start gap-1 overflow-x-auto bg-transparent p-0">
                {productCategories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="rounded-none border-b-2 border-transparent bg-transparent px-3 py-3 text-sm font-medium text-charcoal shadow-none transition-colors duration-200 ease-in-out data-[state=active]:border-gold data-[state=active]:bg-transparent data-[state=active]:text-blush-deep data-[state=active]:shadow-none"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          <div className="container-page pt-10">
            {productCategories.map((cat) => (
              <TabsContent key={cat} value={cat} className="mt-0">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                  {products
                    .filter((p) => p.category === cat)
                    .map((product, i) => (
                      <Reveal key={product.id} delay={i * 80}>
                        <ProductCard product={product} />
                      </Reveal>
                    ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </section>

      <section className="bg-blush">
        <div className="container-page py-14 text-center sm:py-16">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Don't See What You're Looking For? We Do Custom Orders Too.
          </h2>
          <Link
            to="/order"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-blush-deep px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lift"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
