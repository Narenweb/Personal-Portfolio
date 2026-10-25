import { site } from "@/lib/data";
import { Github, Linkedin, BookOpen, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-bg pt-14">
      <div className="container-x pb-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-dim">
              Currently
            </p>
            <p className="mt-3 font-display text-2xl font-semibold leading-tight text-ink">
              Open to senior software roles &amp; select freelance work.
            </p>
            <a
              href={`mailto:${site.email}`}

              className="mt-6 inline-flex items-center gap-2 text-ink-dim hover:text-ink"
            >
              {site.email}
              <span aria-hidden>→</span>
            </a>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-dim">
              Sitemap
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-dim">
              <li><a href="#about" className="hover:text-ink">About</a></li>
              <li><a href="#experience" className="hover:text-ink">Experience</a></li>
              <li><a href="#production" className="hover:text-ink">Products</a></li>
              <li><a href="#work" className="hover:text-ink">Work</a></li>
              <li><a href="#articles" className="hover:text-ink">Writing</a></li>
              <li><a href="#contact" className="hover:text-ink">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-dim">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={site.socials.github} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 text-ink-dim hover:text-ink">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
              <li>
                <a href={site.socials.linkedin} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 text-ink-dim hover:text-ink">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href={site.socials.medium} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 text-ink-dim hover:text-ink">
                  <BookOpen className="h-4 w-4" /> Medium
                </a>
              </li>
              <li>
                <a href={site.socials.freelancer} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 text-ink-dim hover:text-ink">
                  <Briefcase className="h-4 w-4" /> Freelancer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <p className="font-display text-[clamp(2.5rem,9vw,8rem)] font-semibold leading-none tracking-tight text-ink/90">
            Narayanan M S.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs text-ink-mute md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Narayanan M S — designed & built with Next.js.</p>
          <p className="font-mono">{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
