import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/major-blue.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Major Petersam" },
      { name: "description", content: "Voice artist, MC, moderator and trainer." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main
        className="flex-1 text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05]">
              Major <span className="text-[var(--gold)]">Petersam</span>
            </h1>
            <p className="mt-6 text-lg text-white/75">Voice Artist, MC, Moderator, Trainer.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--gold-foreground)] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
              >
                Book Major <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center border border-white/20 px-6 py-3 rounded-md font-semibold hover:bg-white/5 transition"
              >
                Portfolio
              </Link>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[var(--shadow-elegant)]">
            <img
              src={hero}
              alt="Major Petersam"
              width={1000}
              height={1500}
              className="w-full h-[480px] md:h-[620px] object-cover object-top"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
