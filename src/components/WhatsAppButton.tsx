import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="pulse-ring fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-blush-deep text-primary-foreground shadow-lift transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:brightness-105"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
    </a>
  );
}
