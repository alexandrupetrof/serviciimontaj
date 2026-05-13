import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactează-ne pe WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elegant transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground group-hover:block">WhatsApp</span>
      </a>
      <a
        href={SITE.phoneHref}
        aria-label="Sună acum"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-elegant transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground group-hover:block">Sună acum</span>
      </a>
    </div>
  );
}