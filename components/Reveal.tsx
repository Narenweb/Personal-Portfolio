"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (custom: { delay: number; y: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom.delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Reveal({ children, delay = 0, y = 30, className, once = true }: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      custom={{ delay, y }}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  text,
  className,
  stagger = 0.05,
}: {
  text: string;
  className?: string;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
