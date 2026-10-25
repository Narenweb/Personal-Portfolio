"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/data";
import { MagneticButton } from "@/components/MagneticButton";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32"
    >
      <div className="aurora" />

      <motion.div
        style={{ y, opacity }}
        className="container-x relative z-10 grid w-full items-center gap-10 py-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16"
      >
        <div>
          <div className="enter-up flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-dim">
              Open to senior roles
            </span>
          </div>

          <h1 className="mt-8 font-display text-display-1 font-semibold text-ink">
            <Line delay={0.05}>Building the web,</Line>
            <Line delay={0.12} className="text-ink-dim">one well-typed</Line>
            <Line delay={0.19}>component at a time.</Line>
          </h1>

          <p
            style={{ animationDelay: "0.3s" }}
            className="enter-up mt-7 max-w-xl text-base leading-relaxed text-ink-dim"
          >
            I&apos;m <span className="text-ink font-medium">Narayanan</span> — a software developer
            at <a
              href="https://www.fullcreative.com"
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-accent/60 decoration-2 underline-offset-4 hover:text-accent"
            >FULL Creative</a>{" "}
            shipping React, Next.js &amp; Node.js for products used by thousands of small businesses
            (LEX Reception, Setmore, AnswerConnect, AnswerForce, ServiceForge).
          </p>

          <div style={{ animationDelay: "0.4s" }} className="enter-up mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton
              href="#work"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg"
            >
              <span className="inline-flex items-center gap-2">
                View selected work <ArrowDown className="h-4 w-4" />
              </span>
            </MagneticButton>

            <MagneticButton
              href={site.resume}
              external
              className="rounded-full border border-line bg-bg-card/60 px-5 py-2.5 text-sm font-medium text-ink"
            >
              <span className="inline-flex items-center gap-2">
                Résumé <ArrowUpRight className="h-4 w-4" />
              </span>
            </MagneticButton>
          </div>
        </div>

        <div style={{ animationDelay: "0.25s" }} className="enter-left">
          <CodePanel />
        </div>
      </motion.div>

      <div
        style={{ animationDelay: "0.5s" }}
        className="enter-fade absolute inset-x-0 bottom-0 z-10 border-t border-line bg-bg/40 backdrop-blur"
      >
        <div className="container-x flex items-center justify-between py-4 text-[11px] uppercase tracking-[0.18em] text-ink-dim">
          <span className="font-mono">/ 01 — Intro</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono"
          >
            Scroll ↓
          </motion.span>
          <span className="font-mono hidden sm:inline">React · Next.js · Node.js</span>
        </div>
      </div>
    </section>
  );
}

function Line({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden">
      <span
        style={{ animationDelay: `${delay}s` }}
        className={`enter-line inline-block ${className ?? ""}`}
      >
        {children}
      </span>
    </span>
  );
}

function CodePanel() {
  return (
    <div className="relative w-full max-w-md overflow-hidden lg:ml-auto rounded-2xl border border-line bg-bg-card/60 shadow-2xl">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
          ~/narayanan/engineer.ts
        </span>
        <span className="h-2.5 w-2.5" />
      </div>
      <pre className="overflow-hidden p-4 font-mono text-[12px] leading-relaxed text-ink-dim sm:p-5 sm:text-[13px]">
{`const engineer = {
  name: "Narayanan M S",
  role: "Software Developer",
  stack: [
    "React", "Next.js", "TS",
    "Node.js", "Express",
  ],
  shipping: [
    "lexreception.com",
    "setmore.com",
    "answerconnect.com",
    "answerforce.com",
    "serviceforge.com",
  ],
  status: "open-to-work",
} as const;`}
      </pre>
      <div className="border-t border-line px-5 py-3 font-mono text-[11px] text-ink-mute">
        <span className="text-accent">›</span> tsc --noEmit · 0 errors
      </div>
    </div>
  );
}
