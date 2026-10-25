"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { skills } from "@/lib/data";

const groups = [
  { title: "Frontend", items: skills.frontend },
  { title: "Backend & Cloud", items: skills.backend },
  { title: "Architecture & Tooling", items: skills.tooling },
];

export function Skills() {
  return (
    <section id="skills" className="relative z-10 border-t border-line bg-bg-soft py-10 sm:py-12">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">/ 03 — Toolkit</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-heading mt-4 max-w-3xl">
            The kit I&apos;ve sharpened across{" "}
            <span className="text-ink-dim">three years of production work.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={0.1 * gi}>
              <div className="card-border h-full rounded-2xl p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl font-semibold text-ink">{g.title}</h3>
                  <span className="font-mono text-xs text-ink-mute">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((s, i) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.02 * i, duration: 0.4 }}
                      className="rounded-full border border-line bg-bg-card/60 px-3 py-1.5 text-sm text-ink-dim transition-colors hover:border-accent/40 hover:text-ink"
                    >
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
