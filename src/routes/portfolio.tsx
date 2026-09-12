import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import stageAsset from "@/assets/major-hero.jpg.asset.json";
import portraitAsset from "@/assets/major-portrait.jpg.asset.json";
import bomberAsset from "@/assets/major-bomber.jpg.asset.json";
import portVoice from "@/assets/portfolio-voice.jpg";
import portMod from "@/assets/portfolio-moderation.jpg";
import portTraining from "@/assets/portfolio-training.jpg";

const portStage = stageAsset.url;
const portMc = portraitAsset.url;
const portPodcast = bomberAsset.url;

const portfolio = [
  { img: portStage, tag: "Live Stage", title: "Keynote energy" },
  { img: portVoice, tag: "Voiceover", title: "Studio sessions" },
  { img: portMc, tag: "Corporate MC", title: "Gala hosting" },
  { img: portMod, tag: "Moderation", title: "Panel discussions" },
  { img: portTraining, tag: "Training", title: "Facilitation" },
  { img: portPodcast, tag: "Podcast", title: "On the mic" },
];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Major Petersam" },
      {
        name: "description",
        content: "Selected work in voiceover, hosting, moderation, and training.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">
              Portfolio
            </div>
            <h1 className="mt-3 text-3xl md:text-5xl font-display">Selected work</h1>
          </div>
          <a
            href="https://www.instagram.com/majorpetersam/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold inline-flex items-center gap-2 hover:text-[var(--gold)] transition"
          >
            More on Instagram <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((p, i) => (
            <div
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl border border-border ${
                i === 0
                  ? "col-span-2 lg:col-span-2 lg:row-span-2 aspect-[16/10] lg:aspect-auto"
                  : "aspect-[4/5]"
              }`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.04_265/0.85)] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                <div className="text-[10px] uppercase tracking-widest text-[var(--gold)] font-semibold">
                  {p.tag}
                </div>
                <div className="font-display text-lg">{p.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">
              Voice samples
            </div>
            <h2 className="mt-2 text-2xl font-display">Hear Major in action</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Commercials, narration, IVR and more.
            </p>
          </div>
          <a
            href="https://thebigvoicelimited.lovable.app/services/voice-audio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            <Play className="w-4 h-4" /> Listen to samples
          </a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
