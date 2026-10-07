import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/major-chair.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Major Petersam" },
      { name: "description", content: "Communication professional in voice, events and training." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-6xl w-full px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-display">About</h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            I'm Major, a communication professional in voice, events and training. I help
            organizations connect through voice.
          </p>
        </div>
        <img
          src={portrait}
          alt="Major Petersam"
          width={1006}
          height={1344}
          className="w-full max-h-[560px] object-cover rounded-3xl"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
