import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Star, ShieldCheck, Clock, Award, Wrench, Sparkles, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/site/ServiceCard";
import { ContactForm } from "@/components/site/ContactForm";
import { services } from "@/lib/services";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — Montaj AC, Instalații electrice și sanitare` },
      { name: "description", content: "Servicii premium de montaj aer condiționat, instalații electrice și sanitare. Echipă autorizată, intervenții rapide, garanție extinsă." },
      { property: "og:title", content: `${SITE.name} — Servicii tehnice premium` },
      { property: "og:description", content: "Montaj AC, electrice și sanitare. Garanție și echipă autorizată." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE.name,
          telephone: SITE.phone,
          email: SITE.email,
          address: { "@type": "PostalAddress", streetAddress: SITE.address, addressCountry: "RO" },
          openingHours: "Mo-Sa 08:00-20:00",
          priceRange: "$$",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "187" },
        }),
      },
    ],
  }),
  component: HomePage,
});

const reviews = [
  { name: "Andrei M.", rating: 5, text: "Echipă super profesionistă. Au montat AC-ul rapid, curat și au explicat tot. Recomand cu încredere!" },
  { name: "Ioana V.", rating: 5, text: "Am avut o avarie sanitară urgentă. Au venit în 30 de minute și au rezolvat impecabil. Mulțumim!" },
  { name: "Cristian P.", rating: 5, text: "Refacere completă instalație electrică apartament. Lucrare excelentă, prețuri corecte." },
  { name: "Mihai D.", rating: 5, text: "Mentenanță anuală la AC-ul de birou. Punctuali și foarte atenți la detalii." },
];

const advantages = [
  { icon: ShieldCheck, title: "Echipă autorizată", desc: "Tehnicieni cu certificări ANRE și RAR." },
  { icon: Clock, title: "Intervenții rapide", desc: "Programări în 24h, urgențe în aceeași zi." },
  { icon: Award, title: "Garanție extinsă", desc: "Până la 2 ani garanție pe manoperă." },
  { icon: Sparkles, title: "Lucrări curate", desc: "Lăsăm spațiul tău mai curat decât l-am găsit." },
];

const portfolioPreview = [p1, p4, p2, p3, p5, p6];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="absolute inset-0 opacity-25">
          <img src={heroImg} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Servicii premium · București & Ilfov
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl text-balance">
              Montaj AC, electrice și sanitare <span className="text-accent">făcute ca la carte.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-primary-foreground/80">
              Echipă autorizată, materiale de calitate și garanție extinsă. Programări rapide, intervenții la timp și prețuri transparente.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#contact-form">Solicită ofertă gratuită <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href={SITE.phoneHref}><Phone className="mr-2 h-4 w-4" /> {SITE.phone}</a>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                <span className="ml-1 font-semibold">4.9/5</span>
              </div>
              <span className="text-primary-foreground/70">187+ recenzii Google</span>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {advantages.map((a) => (
                <div key={a.title} className="rounded-xl bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 p-5">
                  <a.icon className="h-7 w-7 text-accent" />
                  <p className="mt-3 font-semibold">{a.title}</p>
                  <p className="mt-1 text-xs text-primary-foreground/70">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Servicii</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Tot ce ai nevoie, sub un singur acoperiș</h2>
            <p className="mt-4 text-muted-foreground">De la montaj AC la rețea electrică completă — o singură echipă, totul rezolvat.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">De ce să ne alegi</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Profesionalism care se vede de la prima vizită</h2>
            <p className="mt-4 text-muted-foreground">Suntem o echipă restrânsă, dar dedicată. Lucrăm cu materiale verificate, respectăm termenele și nu plecăm până când totul nu funcționează perfect.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {advantages.map((a) => (
                <div key={a.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent"><a.icon className="h-5 w-5" /></div>
                  <div>
                    <p className="font-semibold">{a.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { n: "1200+", l: "Lucrări finalizate" },
              { n: "10 ani", l: "Experiență" },
              { n: "4.9★", l: "Rating Google" },
              { n: "24h", l: "Răspuns garantat" },
              { n: "2 ani", l: "Garanție" },
              { n: "100%", l: "Echipă autorizată" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-card p-6">
                <p className="font-display text-2xl font-bold text-primary">{s.n}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">Portofoliu</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Lucrări recente</h2>
            </div>
            <Button asChild variant="outline"><Link to="/portofoliu">Vezi tot portofoliul <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioPreview.map((src, i) => (
              <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <img src={src} alt={`Lucrare ${i+1}`} loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Recenzii Google</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Ce spun clienții noștri</h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
              <span className="font-semibold">4.9 din 5 · 187 recenzii</span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <blockquote className="text-sm text-primary-foreground/85 leading-relaxed">"{r.text}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-form" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Contact</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Cere o ofertă în 60 de secunde</h2>
            <p className="mt-4 text-muted-foreground">Completează formularul sau sună-ne direct. Răspundem în cel mai scurt timp cu o ofertă clară și fără surprize.</p>
            <div className="mt-6 space-y-3">
              <a href={SITE.phoneHref} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-accent transition-colors">
                <Phone className="h-5 w-5 text-accent" />
                <div><p className="text-xs text-muted-foreground">Telefon</p><p className="font-semibold">{SITE.phone}</p></div>
              </a>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-whatsapp transition-colors">
                <MessageCircle className="h-5 w-5 text-whatsapp" />
                <div><p className="text-xs text-muted-foreground">WhatsApp</p><p className="font-semibold">Scrie-ne acum</p></div>
              </a>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <iframe
                src={SITE.mapsEmbed}
                title="Locația noastră"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-elegant">
            <div className="mb-6 flex items-center gap-3">
              <Wrench className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-bold">Solicită ofertă rapidă</h3>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}