import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { aboutPoints } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Major Petersam" },
      {
        name: "description",
        content: "Communication professional in voice, broadcasting, events, and training.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">
            About
          </div>
          <h1 className="mt-3 text-3xl md:text-4xl font-display">Who is Major Petersam?</h1>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            I'm Major Petersam, a communication professional in voice, broadcasting, corporate
            events, and learning and development.
          </p>
          <p>
            I help organizations connect, communicate, and create memorable experiences through
            voice.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 pt-4">
            {aboutPoints.map((f) => (
              <div key={f} className="flex items-center gap-3 text-base text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
