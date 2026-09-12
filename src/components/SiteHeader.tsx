import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Adverts", to: "/adverts" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[oklch(0.21_0.05_265/0.92)] text-primary-foreground border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl">
          Major Petersam
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-[var(--gold)] transition-colors"
              activeProps={{ className: "text-[var(--gold)]" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--gold-foreground)] px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
        >
          Book Major <ArrowRight className="w-4 h-4" />
        </Link>
        <button className="md:hidden" onClick={() => setOpen((s) => !s)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-3">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm">
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-[var(--gold)] text-[var(--gold-foreground)] px-4 py-2 rounded-md text-sm font-semibold text-center"
          >
            Book Major
          </Link>
        </div>
      )}
    </header>
  );
}
