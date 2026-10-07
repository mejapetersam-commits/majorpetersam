import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import blue from "@/assets/major-blue.jpg";
import chair from "@/assets/major-chair.jpg";
import bomber from "@/assets/major-bomber.jpg";

const photos = [
  { src: blue, w: 1000, h: 1500 },
  { src: chair, w: 1006, h: 1344 },
  { src: bomber, w: 1062, h: 1246 },
];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Major Petersam" },
      { name: "description", content: "Selected photos of Major Petersam." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-6xl w-full px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-display">Portfolio</h1>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((p) => (
            <img
              key={p.src}
              src={p.src}
              alt="Major Petersam"
              width={p.w}
              height={p.h}
              loading="lazy"
              className="w-full h-[420px] object-cover rounded-2xl border border-border"
            />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
