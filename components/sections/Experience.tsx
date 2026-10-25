"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { experience, education, awards } from "@/lib/data";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const [line, setLine] = useState({ top: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.4"],
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useLayoutEffect(() => {
    const measure = () => {
      const container = itemsRef.current;
      if (!container) return;
      const rows = container.querySelectorAll<HTMLElement>(".timeline-row");
      if (rows.length < 2) return;
      // Dot sits at top-1.5 (6px) and is 16px tall → center at 14px from row top.
      // data-row lives on the Reveal motion.div itself: Chrome treats any element with
      // transform != none as offsetParent for its descendants, so an inner data-row would
      // resolve offsetParent to its Reveal wrapper and report offsetTop = 0. The motion.div's
      // own offsetTop resolves up to itemsRef (relative) correctly.
      const firstTop = rows[0].offsetTop + 14;
      const lastTop = rows[rows.length - 1].offsetTop + 14;
      setLine({ top: firstTop, height: lastTop - firstTop });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (itemsRef.current) ro.observe(itemsRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section id="experience" className="relative z-10 py-10 sm:py-12">
      <div className="container-x">
        <div className="flex items-baseline justify-between">
          <Reveal>
            <p className="eyebrow">/ 04 — Experience</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <h2 className="section-heading mt-4 max-w-3xl">
            From intern to leading{" "}
            <span className="text-ink-dim">CMS modernization at FULL Creative.</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-12">
          <div ref={itemsRef} className="relative">
            {/* vertical line — height measured to span first dot to last dot only */}
            <div
              className="absolute left-[7px] hidden w-0.5 bg-line md:block"
              style={{ top: `${line.top}px`, height: `${line.height}px` }}
            >
              <motion.div
                style={{ height: lineH }}
                className="absolute inset-x-0 top-0 origin-top bg-accent"
              />
            </div>

            <div className="space-y-12">
              {experience.map((e, i) => (
                <Reveal
                  key={`${e.company}-${e.period}`}
                  delay={0.05 * i}
                  className="timeline-row grid gap-6 md:grid-cols-[160px_1fr] md:gap-12"
                >
                  <div className="relative md:pl-8">
                    {/* dot — 16px wide at left-0 → center at x=8px, matches line center */}
                    <span className="absolute left-0 top-1.5 z-10 hidden h-4 w-4 rounded-full border-2 border-accent bg-bg md:block" />
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-dim">
                      {e.period}
                    </p>
                    <p className="mt-1 font-mono text-xs text-ink-mute">{e.location}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {e.role}{" "}
                      <span className="text-ink-dim">@ {e.company}</span>
                    </h3>
                    <ul className="mt-4 space-y-2 text-ink-dim">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-line bg-bg-card/60 px-2.5 py-1 font-mono text-[11px] text-ink-mute"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-12">
          {[
            { label: "Education", items: education },
            { label: "Awards", items: awards },
          ].map((group) => (
            <div key={group.label} className="mb-12 last:mb-0">
              <Reveal>
                <p className="eyebrow">{group.label}</p>
              </Reveal>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {group.items.map((ed, i) => (
                  <Reveal key={ed.title} delay={0.1 * i}>
                    <div className="card-border rounded-2xl p-6">
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-dim">
                        {ed.period}
                      </p>
                      <h4 className="mt-3 font-display text-xl font-semibold text-ink">{ed.title}</h4>
                      <p className="mt-1 text-ink-dim">{ed.where}</p>
                      <p className="mt-3 font-mono text-xs text-accent">{ed.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
