"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#production", label: "Products" },
  { href: "#work", label: "Work" },
  { href: "#articles", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          "fixed inset-x-0 top-0 z-[70] transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="container-x">
          <div
            className={clsx(
              "flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-300",
              scrolled
                ? "border-line bg-bg/70 backdrop-blur-md"
                : "border-transparent bg-transparent"
            )}
          >
            <a href="#home" className="group flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent font-display text-base text-bg transition-transform group-hover:rotate-12">
                n
              </span>
              <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-ink-dim sm:block">
                Narayanan / Developer
              </span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}

                  className="rounded-full px-4 py-2 text-sm text-ink-dim transition-colors hover:bg-bg-card hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />

              <a
                href="#contact"
                className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg transition-transform hover:scale-[1.03] md:inline-flex"
              >
                Let&apos;s talk
              </a>

              <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-bg-card/60 md:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[75] bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-dim">
                Menu
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="container-x mt-12 flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className="font-display text-4xl font-semibold text-ink"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
