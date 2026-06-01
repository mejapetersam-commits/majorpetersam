import { useState } from "react";
import {
  Mic,
  Sparkles,
  Globe2,
  GraduationCap,
  MessageSquare,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  ArrowRight,
  Quote,
  Play,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import heroImg from "@/assets/major-hero.jpg";
import portMc from "@/assets/portfolio-mc.jpg";
import portVoice from "@/assets/portfolio-voice.jpg";
import portMod from "@/assets/portfolio-moderation.jpg";
import portTraining from "@/assets/portfolio-training.jpg";
import portPodcast from "@/assets/portfolio-podcast.jpg";
import portStage from "@/assets/portfolio-stage.jpg";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Mic,
    title: "Voiceover Services",
    desc: "Commercials, corporate narration, IVR, e-learning, and documentaries delivered with warmth and precision.",
  },
  {
    icon: Sparkles,
    title: "Corporate MC",
    desc: "Conferences, awards, product launches, and brand activations — hosted with energy and finesse.",
  },
  {
    icon: Globe2,
    title: "Global Panel Moderation",
    desc: "Thoughtful moderation for summits, panels, and thought-leadership discussions across industries.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    desc: "Training delivery, facilitation, onboarding programs, and communication workshops that stick.",
  },
  {
    icon: MessageSquare,
    title: "Communication Consulting",
    desc: "Helping teams sharpen presentation, customer experience, and engagement from the inside out.",
  },
];

const portfolio = [
  { img: portStage, tag: "Live Stage", title: "Keynote energy" },
  { img: portVoice, tag: "Voiceover", title: "Studio sessions" },
  { img: portMc, tag: "Corporate MC", title: "Gala hosting" },
  { img: portMod, tag: "Moderation", title: "Panel discussions" },
  { img: portTraining, tag: "Training", title: "Facilitation" },
  { img: portPodcast, tag: "Podcast", title: "On the mic" },
];

const testimonials = [
  {
    quote:
      "Major brought energy, professionalism, and audience engagement that transformed our event from start to finish.",
    author: "Head of Brand, Pan-African Summit",
  },
  {
    quote:
      "His voice carries trust. Our campaign delivery was lifted by his narration — clients noticed immediately.",
    author: "Creative Director, Nairobi Agency",
  },
  {
    quote:
      "An exceptional moderator. He asked the questions our audience was thinking — and made every panelist shine.",
    author: "Programme Lead, Leadership Forum",
  },
  {
    quote:
      "Major's facilitation turned a routine onboarding into the most talked-about week of the year for our team.",
    author: "People & Culture Director",
  },
];

const stats = [
  { value: "6+", label: "Years on the mic" },
  { value: "200+", label: "Events hosted" },
  { value: "50+", label: "Brands trusted" },
  { value: "4", label: "Continents reached" },
];

const clients = [
  "AFRIVOX",
  "PAN-AFRICAN SUMMIT",
  "NAIROBI FM",
  "BIG VOICE LTD",
  "TEDx",
  "LEAD HQ",
  "BRAND LAB",
  "OPTIMA",
];

export function Landing() {
  const [open, setOpen] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thanks — Major will be in touch within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[oklch(0.21_0.05_265/0.92)] text-primary-foreground border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-display text-xl">
            <span className="text-[var(--gold)]">M</span>ajor Petersam
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-[var(--gold)] transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--gold-foreground)] px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
          >
            Book Major <ArrowRight className="w-4 h-4" />
          </a>
          <button className="md:hidden" onClick={() => setOpen((s) => !s)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="bg-[var(--gold)] text-[var(--gold-foreground)] px-4 py-2 rounded-md text-sm font-semibold text-center">
              Book Major
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        className="relative overflow-hidden text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-[var(--gold)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> Communication Consultant
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-display font-bold leading-[1.05]">
              Lighting the world with{" "}
              <span className="italic text-[var(--gold)]">optimism</span> and connection,
              one voice at a time.
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl">
              Voice Artist · Corporate MC · Global Moderator · L&D Trainer ·
              Communication Consultant. Powered by voice, facilitation, and audience
              engagement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--gold-foreground)] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition shadow-[var(--shadow-gold)]"
              >
                Book Major <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-md font-semibold hover:bg-white/5 transition"
              >
                <Play className="w-4 h-4" /> View Portfolio
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white/80 hover:text-white transition"
              >
                Let's Talk
              </a>
            </div>

            <div className="mt-12 grid grid-cols-4 gap-4 max-w-lg">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-display text-[var(--gold)]">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/55 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -m-4 rounded-3xl bg-[var(--gold)]/15 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[var(--shadow-elegant)]">
              <img
                src={heroImg}
                alt="Major Petersam on stage with microphone"
                width={1080}
                height={1620}
                className="w-full h-[520px] md:h-[640px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[oklch(0.18_0.04_265/0.7)] backdrop-blur-md p-4 border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center text-[var(--gold-foreground)]">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Now booking 2026</div>
                  <div className="text-xs text-white/60">Voiceover · Hosting · Moderation · Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">About</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-display">Who is Major Petersam?</h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            I'm Major Petersam, a communication professional with experience spanning
            voiceover, broadcasting, corporate events, learning and development, and
            executive support.
          </p>
          <p>
            My mission is simple: help organizations connect, communicate, and create
            memorable experiences through the power of voice and human connection.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 pt-4">
            {[
              "6+ years communication experience",
              "TV, Radio & Podcast background",
              "Corporate event hosting",
              "L&D and facilitation expertise",
              "Local & international clients",
              "Bilingual delivery",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 text-base text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[oklch(0.96_0.01_247)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">Services</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-display">
              One voice. Five ways to <span className="italic">move</span> your audience.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative bg-card border border-border rounded-2xl p-7 hover:border-[var(--gold)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-[var(--gold)] group-hover:text-[var(--gold-foreground)] transition">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-xl font-display">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">Portfolio</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-display">Selected work</h2>
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
                i === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2 aspect-[16/10] lg:aspect-auto" : "aspect-[4/5]"
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
                <div className="text-[10px] uppercase tracking-widest text-[var(--gold)] font-semibold">{p.tag}</div>
                <div className="font-display text-lg">{p.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">Voice samples</div>
            <h3 className="mt-2 text-2xl font-display">Hear Major in action</h3>
            <p className="text-sm text-muted-foreground mt-1">Commercials, narration, IVR and more.</p>
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

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">Testimonials</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-display">Words from the room.</h2>
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
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-16 border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center text-xs uppercase tracking-widest text-muted-foreground">
            Trusted by brands across Africa & beyond
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clients.map((c) => (
              <div
                key={c}
                className="font-display text-lg md:text-xl tracking-widest text-foreground/40 hover:text-foreground transition"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">Contact</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-display">Let's work together.</h2>
          <p className="mt-5 text-muted-foreground">
            Tell me about your event, brand, or campaign. I respond within 24 hours.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <a href="mailto:mejapetersam@gmail.com" className="flex items-center gap-3 hover:text-[var(--gold)] transition">
              <Mail className="w-4 h-4" /> mejapetersam@gmail.com
            </a>
            <a href="https://wa.me/254717003755" className="flex items-center gap-3 hover:text-[var(--gold)] transition">
              <Phone className="w-4 h-4" /> WhatsApp +254 717 003 755
            </a>
            <a href="https://www.linkedin.com/in/meja-petersam-mutundu-840b82b8/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[var(--gold)] transition">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://www.instagram.com/majorpetersam/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[var(--gold)] transition">
              <Instagram className="w-4 h-4" /> @majorpetersam
            </a>
            <a href="https://www.tiktok.com/@major.petersam" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[var(--gold)] transition">
              <Sparkles className="w-4 h-4" /> TikTok @major.petersam
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-[var(--shadow-elegant)] space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
              <Input required name="name" className="mt-2" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Company</label>
              <Input name="company" className="mt-2" placeholder="Company / Brand" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
              <Input required type="email" name="email" className="mt-2" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</label>
              <Input name="phone" className="mt-2" placeholder="+254…" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project details</label>
            <Textarea required name="message" rows={5} className="mt-2" placeholder="Event date, type of work, audience size…" />
          </div>
          <Button
            type="submit"
            className="w-full bg-[var(--gold)] text-[var(--gold-foreground)] hover:opacity-90 font-semibold h-12 text-base"
          >
            Send inquiry <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </form>
      </section>

      {/* FINAL CTA */}
      <section
        className="text-primary-foreground py-24"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display leading-tight">
            Need a voice, moderator, trainer, or{" "}
            <span className="italic text-[var(--gold)]">communication partner?</span>
          </h2>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto">
            Let's craft an experience your audience won't forget.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--gold-foreground)] px-7 py-4 rounded-md font-semibold hover:opacity-90 transition shadow-[var(--shadow-gold)]"
          >
            Book Major Petersam <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground/70 py-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="font-display text-base">
            <span className="text-[var(--gold)]">M</span>ajor Petersam
          </div>
          <div className="text-xs">© {new Date().getFullYear()} Major Petersam. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/meja-petersam-mutundu-840b82b8/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="w-4 h-4 hover:text-[var(--gold)]" /></a>
            <a href="https://www.instagram.com/majorpetersam/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="w-4 h-4 hover:text-[var(--gold)]" /></a>
            <a href="mailto:mejapetersam@gmail.com" aria-label="Email"><Mail className="w-4 h-4 hover:text-[var(--gold)]" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}