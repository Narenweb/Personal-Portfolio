"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="relative z-10 py-10 sm:py-12">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">/ 07 — Selected work</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-heading mt-4 max-w-3xl">
            A small set of things I&apos;m{" "}
            <span className="text-ink-dim">proud to put my name on.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.05 * (i % 3), ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-bg-card/40"
            >
              <a
                href={p.live ?? p.source ?? "https://github.com/Narenweb"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent opacity-80" />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full border border-line bg-bg/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim backdrop-blur">
                      {p.category}
                    </span>
                    <span className="rounded-full border border-line bg-bg/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim backdrop-blur">
                      {p.year}
                    </span>
                  </div>
                  {p.live && (
                    <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-line bg-bg/80 text-ink backdrop-blur transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-dim">{p.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-bg-soft px-2 py-0.5 font-mono text-[10px] text-ink-mute"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {p.live && (
                    <div className="mt-5 flex items-center gap-1.5 text-xs text-ink-dim">
                      <ExternalLink className="h-3 w-3" />
                      Live
                    </div>
                  )}
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-line bg-bg-card/40 p-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-ink-dim">
              Looking for something specific?{" "}
              <span className="text-ink">More work, case studies and freelance builds</span>{" "}
              live on my Freelancer, GitHub and LinkedIn.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Narenweb"
                target="_blank"
                rel="noreferrer"

                className="btn"
              >
                GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.freelancer.com/u/Narayanansundar"
                target="_blank"
                rel="noreferrer"

                className="btn"
              >
                Freelancer <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
