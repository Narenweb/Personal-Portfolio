"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/data";

export function Production() {
  return (
    <section id="production" className="relative z-10 py-10 sm:py-12">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">/ 06 — Production work</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading mt-4 max-w-3xl">
                Products I&apos;ve helped ship at{" "}
                <span className="text-ink-dim">FULL Creative.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm text-ink-dim">
              SaaS products with real customers, real revenue and real perf budgets — the
              part of the job that doesn&apos;t fit on a slide.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {products.map((p, i) => (
            <motion.a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative flex flex-col gap-6 bg-bg p-7 transition-colors hover:bg-bg-card md:p-10 ${p.featured ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-xl border border-line bg-white">
                    {p.logo ? (
                      <Image
                        src={p.logo}
                        alt={`${p.name} logo`}
                        fill
                        sizes="48px"
                        className={p.logoFill ? "object-cover" : "object-contain p-2"}
                      />
                    ) : (
                      <span className="font-display text-lg font-semibold text-[#0a0a0b]">
                        {p.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{p.name}</h3>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
                      {p.domain}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-ink-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>

              <div>
                <p className="text-sm text-ink">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{p.blurb}</p>
              </div>

              <div className="rounded-xl border border-line bg-bg-soft p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
                  My contribution
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{p.contribution}</p>
              </div>

              <div className="mt-auto flex items-end justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-bg-soft px-2 py-0.5 font-mono text-[10px] text-ink-mute"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.metric && (
                  <div className="text-right">
                    <p className="font-display text-2xl font-semibold text-ink">
                      {p.metric.value}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
                      {p.metric.label}
                    </p>
                  </div>
                )}
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-line">
                <div className="h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
