import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import mistySpringsAd from "@/assets/misty-springs-ad.mp4.asset.json";
import nobleParkAd from "@/assets/noble-park-ad.mp4.asset.json";
import kitisuruFallsAd from "@/assets/kitisuru-falls-ad.mp4.asset.json";

const ads = [
  { title: "Misty Springs", tag: "Real Estate Ad", src: mistySpringsAd.url },
  { title: "Noble Park", tag: "Property Campaign", src: nobleParkAd.url },
  { title: "Kitisuru Falls", tag: "Brand Spot", src: kitisuruFallsAd.url },
];

export const Route = createFileRoute("/adverts")({
  head: () => ({
    meta: [
      { title: "Adverts | Major Petersam" },
      { name: "description", content: "Video ads voiced by Major Petersam." },
    ],
  }),
  component: Adverts,
});

function Adverts() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="bg-[oklch(0.96_0.01_247)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">
              Adverts
            </div>
            <h1 className="mt-3 text-3xl md:text-5xl font-display">Voiced campaigns.</h1>
            <p className="mt-4 text-muted-foreground">
              Video ads featuring Major's voice and creative direction.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ads.map((ad) => (
              <figure
                key={ad.title}
                className="group rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-elegant)]"
              >
                <div className="relative aspect-[9/16] bg-black">
                  <video
                    src={ad.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="p-4">
                  <div className="text-[10px] uppercase tracking-widest text-[var(--gold)] font-semibold">
                    {ad.tag}
                  </div>
                  <div className="font-display text-lg mt-1">{ad.title}</div>
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
