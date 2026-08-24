import { Link } from "@tanstack/react-router";
import { Cake, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { business, navLinks, waLink } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blush">
              <Cake className="h-5 w-5 text-charcoal" />
            </span>
            <span className="font-heading text-lg font-bold">Bite n Belch</span>
          </div>
          <p className="mt-4 text-sm text-cream/80">{business.tagline}</p>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-cream">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-cream/80 transition-colors duration-200 hover:text-blush"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-cream">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:+${business.whatsappNumber}`} className="hover:text-blush">
                {business.phoneLocal}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-blush">
                WhatsApp us
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${business.email}`} className="break-all hover:text-blush">
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{business.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-cream">Follow</h3>
          <div className="mt-4 flex gap-3">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blush-deep"
            >
              <Instagram className="h-5 w-5 text-blush" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Business"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blush-deep"
            >
              <MessageCircle className="h-5 w-5 text-blush" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-page flex flex-col gap-1 py-5 text-xs text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>Baked fresh in Kaduna, Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
