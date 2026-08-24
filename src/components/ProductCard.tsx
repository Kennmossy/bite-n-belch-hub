import { ShoppingBag } from "lucide-react";
import { waProductLink, type Product } from "@/data/site";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lift">
      <div className="relative overflow-hidden">
        {product.badge ? (
          <span
            className={cn(
              "absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[11px] font-semibold",
              product.badge === "Bestseller"
                ? "bg-blush-deep text-primary-foreground"
                : "bg-gold text-accent-foreground",
            )}
          >
            {product.badge}
          </span>
        ) : null}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-44 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 sm:h-52"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading text-base font-semibold text-charcoal">{product.name}</h3>
        <p className="mt-1 text-sm font-semibold text-gold">{product.price}</p>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.description}</p>
        <a
          href={waProductLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-blush px-4 py-2.5 text-sm font-semibold text-charcoal transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-blush-deep hover:text-primary-foreground hover:shadow-lift"
        >
          <ShoppingBag className="h-4 w-4" />
          Order This
        </a>
      </div>
    </article>
  );
}
