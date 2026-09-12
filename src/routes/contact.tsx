import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, Instagram, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Major Petersam" },
      {
        name: "description",
        content: "Book Major for voiceover, hosting, moderation, or training.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thanks! Major will be in touch within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">
            Contact
          </div>
          <h1 className="mt-3 text-3xl md:text-5xl font-display">Let's work together.</h1>
          <p className="mt-5 text-muted-foreground">
            Tell me about your event. I respond within 24 hours.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <a
              href="mailto:mejapetersam@gmail.com"
              className="flex items-center gap-3 hover:text-[var(--gold)] transition"
            >
              <Mail className="w-4 h-4" /> mejapetersam@gmail.com
            </a>
            <a
              href="https://wa.me/254717003755"
              className="flex items-center gap-3 hover:text-[var(--gold)] transition"
            >
              <Phone className="w-4 h-4" /> WhatsApp +254 717 003 755
            </a>
            <a
              href="https://www.linkedin.com/in/meja-petersam-mutundu-840b82b8/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-[var(--gold)] transition"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/majorpetersam/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-[var(--gold)] transition"
            >
              <Instagram className="w-4 h-4" /> @majorpetersam
            </a>
            <a
              href="https://www.tiktok.com/@major.petersam"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-[var(--gold)] transition"
            >
              <Sparkles className="w-4 h-4" /> TikTok @major.petersam
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-[var(--shadow-elegant)] space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Name
              </label>
              <Input required name="name" className="mt-2" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Company
              </label>
              <Input name="company" className="mt-2" placeholder="Company / Brand" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <Input
                required
                type="email"
                name="email"
                className="mt-2"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Phone
              </label>
              <Input name="phone" className="mt-2" placeholder="+254…" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Project details
            </label>
            <Textarea
              required
              name="message"
              rows={5}
              className="mt-2"
              placeholder="Event date, type of work, audience size…"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[var(--gold)] text-[var(--gold-foreground)] hover:opacity-90 font-semibold h-12 text-base"
          >
            Send inquiry <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}
