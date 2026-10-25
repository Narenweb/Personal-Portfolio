const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Payload CMS",
  "Tailwind",
  "Framer Motion",
  "Turborepo",
  "Cloud Run",
  "Web Performance",
  "Accessibility",
];

export function Marquee() {
  return (
    <div className="mask-fade-r relative z-10 overflow-hidden border-y border-line bg-bg-soft py-8">
      {/* Two identical copies + translateX(-50%) loop seamlessly, so the strip never shows a gap */}
      <div className="flex w-max animate-marquee whitespace-nowrap font-display text-[clamp(1.75rem,4vw,3.5rem)] font-semibold leading-none tracking-tight hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex">
            {items.map((t, i) => (
              <span key={t} className={i % 2 === 0 ? "text-ink" : "text-ink-mute"}>
                <span className="px-6 sm:px-8">{t}</span>
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
