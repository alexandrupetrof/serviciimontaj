import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground font-display text-lg font-bold">C</div>
            <span className="font-display text-lg font-bold">{SITE.name}</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Montaj aer condiționat, instalații electrice și sanitare. Echipă autorizată, garanție extinsă, intervenții rapide.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-accent">Navigare</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/" className="hover:text-accent">Acasă</Link></li>
            <li><Link to="/servicii" className="hover:text-accent">Servicii</Link></li>
            <li><Link to="/portofoliu" className="hover:text-accent">Portofoliu</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-accent">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /><a href={SITE.phoneHref}>{SITE.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" />{SITE.address}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-accent">Program</h4>
          <p className="flex items-start gap-2 text-sm text-primary-foreground/75">
            <Clock className="h-4 w-4 mt-0.5 text-accent" /> {SITE.hours}
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-xs text-primary-foreground/55 text-center">
          © {new Date().getFullYear()} {SITE.name}. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}