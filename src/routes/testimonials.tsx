import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { testimonials } from "@/lib/content";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | Major Petersam" },
      { name: "description", content: "Words from clients and event organizers." },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">
              Testimonials
            </div>
            <h1 className="mt-3 text-3xl md:text-5xl font-display">Words from the room.</h1>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.author}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-8"
              >
                <Quote className="w-8 h-8 text-[var(--gold)]" />
                <blockquote className="mt-4 text-lg leading-relaxed text-white/90 font-display">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-widest text-white/55">
                  {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
