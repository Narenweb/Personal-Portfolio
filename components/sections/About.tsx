"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, RevealText } from "@/components/Reveal";
import { aboutPhotos, stats } from "@/lib/data";

const SLIDE_MS = 3500;

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} id="about" className="relative z-10 py-10 sm:py-12">
      <div className="container-x">
        <div className="flex items-baseline justify-between">
          <Reveal>
            <p className="eyebrow">/ 02 — About</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="hidden font-mono text-xs uppercase tracking-[0.18em] text-ink-mute md:block">
              based in india, building for the world
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="relative">
            <motion.div style={{ y: imgY }}>
              <PhotoSlideshow />
            </motion.div>
          </div>

          <div>
            <h2 className="section-heading">
              <RevealText text="I build interfaces engineers respect" />{" "}
              <span className="text-ink-dim">
                <RevealText text="and users don't notice." />
              </span>
            </h2>

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-dim">
                I&apos;ve spent the last three years at FULL Creative shipping production React and
                Next.js — most recently leading the move of 8+ legacy Java/JSP brand sites onto
                Next.js + Payload CMS, and moving our infrastructure to Cloud Run. I care most about the parts
                people stop noticing once they&apos;re done well: latency budgets, type safety,
                accessibility, and the half-second of animation that makes a page feel alive
                instead of brittle.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-dim">
                Outside the day job I write on{" "}
                <a
                  href="https://medium.com/@narayanansundar02"

                  target="_blank"
                  rel="noreferrer"
                  className="text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                >
                  Medium
                </a>{" "}
                about frontend craft, take on{" "}
                <a
                  href="https://www.freelancer.com/u/Narayanansundar"

                  target="_blank"
                  rel="noreferrer"
                  className="text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                >
                  freelance builds
                </a>
                , and ship small things on{" "}
                <a
                  href="https://github.com/Narenweb"

                  target="_blank"
                  rel="noreferrer"
                  className="text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                >
                  GitHub
                </a>
                .
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.1 * i} className="bg-bg p-6">
                  <div className="font-display text-3xl font-semibold text-ink">{s.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.16em] text-ink-mute">
                    {s.label}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const photo = aboutPhotos[index];
  const count = aboutPhotos.length;

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), SLIDE_MS);
    return () => clearTimeout(id);
  }, [index, paused, reduceMotion, count]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of Narayanan"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-line bg-bg-card">
        <AnimatePresence initial={false}>
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {/* Landscape shots sit uncropped over a blurred copy so nobody in a group photo gets cut off */}
            {photo.landscape && (
              <Image
                src={photo.src}
                alt=""
                aria-hidden
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="scale-110 object-cover opacity-60 blur-2xl"
              />
            )}
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority={index === 0}
              sizes="(min-width:1024px) 40vw, 100vw"
              className={photo.landscape ? "object-contain" : "object-cover"}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="relative h-4 flex-1 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={photo.caption}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.35 }}
              aria-live="polite"
              className="absolute inset-0 truncate font-mono text-xs uppercase tracking-[0.18em] text-ink-dim"
            >
              {photo.caption}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-1.5">
          {aboutPhotos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1} of ${count}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-accent" : "w-1.5 bg-ink-mute/50 hover:bg-ink-mute"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
