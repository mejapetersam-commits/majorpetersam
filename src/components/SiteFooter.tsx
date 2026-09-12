import { Linkedin, Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground/70 py-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="font-display text-base">Major Petersam</div>
        <div className="text-xs">
          © {new Date().getFullYear()} Major Petersam. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/meja-petersam-mutundu-840b82b8/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 hover:text-[var(--gold)]" />
          </a>
          <a
            href="https://www.instagram.com/majorpetersam/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4 hover:text-[var(--gold)]" />
          </a>
          <a href="mailto:mejapetersam@gmail.com" aria-label="Email">
            <Mail className="w-4 h-4 hover:text-[var(--gold)]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
