import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${SITE.name}` },
      { name: "description", content: "Sună-ne, scrie-ne pe WhatsApp sau trimite un mesaj. Răspundem rapid și venim la fața locului." },
      { property: "og:title", content: `Contact ${SITE.name}` },
      { property: "og:description", content: "Telefon, WhatsApp, email și formular de contact." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: Phone, label: "Telefon", value: SITE.phone, href: SITE.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Scrie-ne acum", href: SITE.whatsappHref, external: true },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: "Adresă", value: SITE.address },
    { icon: Clock, label: "Program", value: SITE.hours },
  ];
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Contact</span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold">Hai să vorbim despre proiectul tău</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((it) => {
                const Wrap: any = it.href ? "a" : "div";
                return (
                  <Wrap
                    key={it.label}
                    href={it.href}
                    {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
                  >
                    <it.icon className="h-5 w-5 text-accent" />
                    <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{it.label}</p>
                    <p className="font-semibold mt-1">{it.value}</p>
                  </Wrap>
                );
              })}
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <iframe
                src={SITE.mapsEmbed}
                title="Locația noastră"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div id="contact-form" className="rounded-2xl bg-card p-6 sm:p-8 shadow-elegant border border-border">
            <h2 className="text-2xl font-bold mb-6">Trimite-ne un mesaj</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}