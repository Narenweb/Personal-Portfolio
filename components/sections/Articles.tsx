"use client";

import { Reveal } from "@/components/Reveal";
import { site, type Article } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Articles({ articles }: { articles: Article[] }) {
  return (
    <section id="articles" className="relative z-10 border-y border-line bg-bg-soft py-10 sm:py-12">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">/ 08 — Writing</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading mt-4 max-w-3xl">
                Notes on the craft —{" "}
                <span className="text-ink-dim">performance, patterns, and pitfalls.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a
              href={site.socials.medium}
              target="_blank"
              rel="noreferrer"

              className="btn"
            >
              All on Medium <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {articles.map((a, i) => (
            <motion.a
              key={a.title}
              href={a.href}
              target="_blank"
              rel="noreferrer"

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col justify-between bg-bg p-8 transition-colors hover:bg-bg-card"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-dim">
                    {[a.date, a.readTime].filter(Boolean).join(" · ") || "Medium"}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-ink">
                  {a.title}
                </h3>
                <p className="mt-3 text-ink-dim">{a.blurb}</p>
              </div>
              <div className="mt-10 h-px w-full bg-line">
                <div className="h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
