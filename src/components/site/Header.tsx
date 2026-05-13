import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Acasă" },
  { to: "/servicii", label: "Servicii" },
  { to: "/portofoliu", label: "Portofoliu" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-display text-lg font-bold">C</div>
          <span className="font-display text-lg font-bold tracking-tight">{SITE.name}</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={SITE.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Phone className="h-4 w-4 text-accent" /> {SITE.phone}
          </a>
          <Button asChild variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contact-form">Solicită ofertă</a>
          </Button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2" aria-label="Meniu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                activeProps={{ className: "bg-muted text-accent" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="mt-2 flex items-center gap-2 rounded-md bg-primary px-3 py-3 text-primary-foreground font-semibold">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}