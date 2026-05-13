import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/site/ServiceCard";
import { ContactForm } from "@/components/site/ContactForm";
import { services } from "@/lib/services";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/_site/servicii")({
  head: () => ({
    meta: [
      { title: `Servicii — ${SITE.name}` },
      { name: "description", content: "Montaj AC, igienizare, instalații electrice și sanitare, reparații și mentenanță. Servicii complete cu garanție." },
      { property: "og:title", content: `Servicii ${SITE.name}` },
      { property: "og:description", content: "Servicii complete tehnice cu garanție și echipă autorizată." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Servicii</span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold">Tot ce ai nevoie pentru casa sau afacerea ta</h1>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">Soluții complete oferite de o echipă autorizată, cu garanție pe lucrare.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>
      <section id="contact-form" className="bg-muted py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="rounded-2xl bg-card p-8 shadow-elegant border border-border">
            <h2 className="text-2xl font-bold mb-6">Solicită o ofertă</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}