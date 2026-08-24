import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Cake, ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const transparentTop = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !transparentTop;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out",
        solid ? "bg-card shadow-soft" : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blush">
            <Cake className="h-5 w-5 text-blush-deep" />
          </span>
          <span className="font-heading text-base font-bold leading-tight text-charcoal sm:text-lg">
            Bite n Belch
            <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
              Baking Home
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-charcoal transition-colors duration-200 ease-in-out hover:text-blush-deep"
              activeProps={{ className: "text-blush-deep" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/order"
            className="hidden items-center gap-2 rounded-full bg-blush px-5 py-2.5 text-sm font-semibold text-charcoal shadow-soft transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-blush-deep hover:text-primary-foreground hover:shadow-lift sm:inline-flex"
          >
            <ShoppingBag className="h-4 w-4" />
            Order Now
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blush text-charcoal transition-colors duration-200 hover:bg-blush-deep hover:text-primary-foreground lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[82vw] max-w-xs bg-cream">
              <SheetTitle className="font-heading text-xl text-charcoal">Menu</SheetTitle>
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="rounded-xl px-3 py-3 text-base font-medium text-charcoal transition-colors duration-200 hover:bg-blush/50"
                    activeProps={{ className: "bg-blush/60 text-charcoal" }}
                    activeOptions={{ exact: link.to === "/" }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/order"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-blush-deep px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Order Now
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
