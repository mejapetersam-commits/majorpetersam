import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { services } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Major Petersam" },
      {
        name: "description",
        content: "Voiceover, corporate MC, moderation, training, and communication consulting.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="bg-[oklch(0.96_0.01_247)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">
              Services
            </div>
            <h1 className="mt-3 text-3xl md:text-5xl font-display">
              One voice. Five ways to <span className="italic">move</span> your audience.
            </h1>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative bg-card border border-border rounded-2xl p-7 hover:border-[var(--gold)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-[var(--gold)] group-hover:text-[var(--gold-foreground)] transition">
                  <s.icon className="w-6 h-6" />
                </div>
                <h2 className="mt-5 text-xl font-display">{s.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
