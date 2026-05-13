import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/_site/portofoliu")({
  head: () => ({
    meta: [
      { title: `Portofoliu — ${SITE.name}` },
      { name: "description", content: "Galerie cu lucrări reale: montaj AC, instalații electrice și sanitare. Vezi exemple before/after." },
      { property: "og:title", content: `Portofoliu ${SITE.name}` },
      { property: "og:description", content: "Galerie cu lucrări reale, before/after." },
    ],
  }),
  component: PortfolioPage,
});

const items = [
  { src: p1, title: "Montaj AC exterior", cat: "Aer condiționat", before: true },
  { src: p4, title: "Sistem multi-split", cat: "Aer condiționat" },
  { src: p2, title: "Tablou electric refăcut", cat: "Electrice" },
  { src: p5, title: "Iluminat LED bucătărie", cat: "Electrice" },
  { src: p3, title: "Baterie sanitară premium", cat: "Sanitare" },
  { src: p6, title: "AC casetă birouri", cat: "Aer condiționat" },
];

function PortfolioPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Portofoliu</span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold">Lucrări reale, rezultate vizibile</h1>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">Peste 1200 de lucrări finalizate. Iată o selecție din proiectele recente.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted text-left"
            >
              <img src={it.src} alt={it.title} loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-70 transition-opacity group-hover:opacity-95" />
              {it.before && <span className="absolute top-3 left-3 rounded-full bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1">Before / After</span>}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                <p className="text-xs uppercase tracking-wider text-accent font-semibold">{it.cat}</p>
                <p className="mt-1 font-semibold">{it.title}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
      {open !== null && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 p-4 backdrop-blur"
        >
          <button onClick={() => setOpen(null)} className="absolute top-5 right-5 text-primary-foreground p-2" aria-label="Închide">
            <X className="h-7 w-7" />
          </button>
          <img src={items[open].src} alt={items[open].title} className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-glow" />
        </div>
      )}
    </>
  );
}