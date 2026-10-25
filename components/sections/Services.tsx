"use client";

import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/data";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section id="services" className="relative z-10 border-y border-line bg-bg-soft py-10 sm:py-12">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">/ 05 — Services</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-heading mt-4 max-w-3xl">
            How I can help your{" "}
            <span className="text-ink-dim">team or product.</span>
          </h2>
        </Reveal>

        {/* Editorial rows rather than a card grid, so this section doesn't echo Products and Writing */}
        <ol className="mt-10 border-t border-line">
          {services.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group grid gap-3 border-b border-line py-7 md:grid-cols-[80px_1fr_1.3fr] md:gap-10 md:py-9"
            >
              <span className="font-mono text-sm text-ink-mute transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink transition-transform duration-300 group-hover:translate-x-1">
                {s.title}
              </h3>
              <div>
                <p className="text-ink-dim">{s.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink-mute"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
