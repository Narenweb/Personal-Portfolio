"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { site } from "@/lib/data";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative z-10 overflow-hidden py-10 sm:py-12">
      <div className="aurora" />
      <div className="container-x relative z-10">
        <Reveal>
          <p className="eyebrow">/ 09 — Contact</p>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-[clamp(1.875rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-ink">
              Let&apos;s build{" "}
              <span className="text-ink-dim">something</span>{" "}
              that lasts.
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-dim">
                Senior roles, contract gigs, design-system rescues or a quick technical chat —
                inbox is open. Expect a reply within a day.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton
                href={`mailto:${site.email}`}
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg"
              >
                <span className="inline-flex items-center gap-2">
                  Email me <ArrowUpRight className="h-4 w-4" />
                </span>
              </MagneticButton>
              <MagneticButton
                href={site.socials.linkedin}
                external
                className="rounded-full border border-line bg-bg-card/60 px-6 py-3 text-sm font-medium text-ink"
              >
                <span className="inline-flex items-center gap-2">
                  LinkedIn DM <ArrowUpRight className="h-4 w-4" />
                </span>
              </MagneticButton>
              <MagneticButton
                href={site.resume}
                external
                className="rounded-full border border-line bg-bg-card/60 px-6 py-3 text-sm font-medium text-ink"
              >
                <span className="inline-flex items-center gap-2">
                  Résumé <ArrowUpRight className="h-4 w-4" />
                </span>
              </MagneticButton>
            </div>
          </div>

          <div className="space-y-4">
            <ContactRow
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value={site.email}
              href={`mailto:${site.email}`}
            />
            <ContactRow
              icon={<Phone className="h-5 w-5" />}
              label="Phone"
              value={site.phone}
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
            />
            <ContactRow
              icon={<MapPin className="h-5 w-5" />}
              label="Based in"
              value={`${site.location} · ${site.workMode}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex items-center justify-between rounded-2xl border border-line bg-bg-card/40 p-5"
    >
      <div className="flex items-center gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-bg-soft text-accent">
          {icon}
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
            {label}
          </p>
          <p className="mt-0.5 text-ink">{value}</p>
        </div>
      </div>
      {href && <ArrowUpRight className="h-5 w-5 text-ink-dim" />}
    </motion.div>
  );
  return href ? (
    <a href={href}>
      {Inner}
    </a>
  ) : (
    Inner
  );
}
