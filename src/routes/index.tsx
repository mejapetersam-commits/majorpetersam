import { createFileRoute, Link } from "@tanstack/react-router";
import { Mic, ArrowRight, Play } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { stats, clients } from "@/lib/content";
import heroAsset from "@/assets/major-hero.jpg.asset.json";

const heroImg = heroAsset.url;

const categories = [
  { label: "About", to: "/about", desc: "Who I am" },
  { label: "Services", to: "/services", desc: "What I offer" },
  { label: "Portfolio", to: "/portfolio", desc: "Selected work" },
  { label: "Adverts", to: "/adverts", desc: "Voiced campaigns" },
  { label: "Testimonials", to: "/testimonials", desc: "Client words" },
  { label: "Contact", to: "/contact", desc: "Book Major" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Major Petersam" },
      {
        name: "description",
        content: "Communication consultant: voiceover, MC, moderation, and training.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section
        className="relative overflow-hidden text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-[var(--gold)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> Communication
              Consultant
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-display font-bold leading-[1.05]">
              Communication that <span className="italic text-[var(--gold)]">connects</span>.
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl">
              Voice Artist, Corporate MC, Global Moderator, L&D Trainer, Communication Consultant.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--gold-foreground)] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition shadow-[var(--shadow-gold)]"
              >
                Book Major <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-md font-semibold hover:bg-white/5 transition"
              >
                <Play className="w-4 h-4" /> View Portfolio
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-4 gap-4 max-w-lg">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-display text-[var(--gold)]">
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-white/55 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -m-4 rounded-3xl bg-[var(--gold)]/15 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[var(--shadow-elegant)]">
              <img
                src={heroImg}
                alt="Major Petersam on stage with microphone"
                width={1080}
                height={1620}
                className="w-full h-[520px] md:h-[640px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[oklch(0.18_0.04_265/0.7)] backdrop-blur-md p-4 border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center text-[var(--gold-foreground)]">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Now booking 2026</div>
                  <div className="text-xs text-white/60">
                    Voiceover, Hosting, Moderation, Training
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative bg-card border border-border rounded-2xl p-7 hover:border-[var(--gold)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <h2 className="text-xl font-display">{c.label}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <ArrowRight className="mt-4 w-4 h-4 text-[var(--gold)] group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-16 border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center text-xs uppercase tracking-widest text-muted-foreground">
            Trusted by brands across Africa & beyond
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clients.map((c) => (
              <div
                key={c}
                className="font-display text-lg md:text-xl tracking-widest text-foreground/40 hover:text-foreground transition"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
