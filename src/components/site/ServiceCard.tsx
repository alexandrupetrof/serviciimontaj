import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const waText = encodeURIComponent(`Bună ziua, doresc o ofertă pentru: ${service.title}`);
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-elegant hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{service.short}</p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {service.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contact-form">Solicită ofertă</a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href={SITE.phoneHref}><Phone className="mr-1.5 h-4 w-4" />Sună</a>
          </Button>
          <Button asChild size="sm" variant="outline" className="border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white">
            <a href={`${SITE.whatsappHref}?text=${waText}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5 h-4 w-4" />WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}