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
        content: "Corporate MC, panel moderation, adverts and communication.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-4xl w-full px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-display">Services</h1>
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {services.map((s) => (
            <li key={s.title} className="py-6 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-display">{s.title}</h2>
              <p className="text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
