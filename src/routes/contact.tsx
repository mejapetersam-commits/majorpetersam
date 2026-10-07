import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const links = [
  { icon: Mail, label: "mejapetersam@gmail.com", href: "mailto:mejapetersam@gmail.com" },
  { icon: Phone, label: "WhatsApp +254 717 003 755", href: "https://wa.me/254717003755" },
  { icon: Instagram, label: "@majorpetersam", href: "https://www.instagram.com/majorpetersam/" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/meja-petersam-mutundu-840b82b8/",
  },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Major Petersam" },
      {
        name: "description",
        content: "Book Major for voiceover, hosting, moderation or training.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-2xl w-full px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-display">Contact</h1>
        <div className="mt-10 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 hover:border-[var(--gold)] transition"
            >
              <l.icon className="w-5 h-5 text-[var(--gold)]" />
              {l.label}
            </a>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
