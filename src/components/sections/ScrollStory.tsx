"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const statements = [
  { text: "Sabés lo que usás." },
  { text: "Pero no sabés qué contiene.", highlight: true },
  { text: "Ni si tiene pesticidas.", highlight: true },
  { text: "Ni si es la misma genética que la última vez.", highlight: true },
  { text: "Esa incertidumbre tiene solución.", accent: true },
];

// Each statement is its own component so useTransform is called at the
// top level of a component — not inside a loop (rules of hooks).
function Statement({
  s,
  i,
  total,
  progress,
}: {
  s: (typeof statements)[number];
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = i / total;
  const end   = (i + 1) / total;
  const peak  = (start + end) / 2; // midpoint of this statement's window

  // All five offsets are strictly increasing:
  // start < fadeInEnd < peak < fadeOutStart < end
  const fadeInEnd    = start + (peak - start) * 0.5;
  const fadeOutStart = end   - (end - peak)   * 0.3;

  const opacity = useTransform(
    progress,
    [start, fadeInEnd, peak, fadeOutStart, end],
    [0,     0.7,       1,    1,             0]
  );

  const y = useTransform(
    progress,
    [start, fadeInEnd],
    [28,    0]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-5 text-center pointer-events-none"
    >
      <p
        className={`font-garamond font-bold leading-tight text-balance ${
          s.accent
            ? "text-5xl sm:text-6xl text-flora-accent text-glow"
            : s.highlight
            ? "text-4xl sm:text-5xl text-white/55"
            : "text-5xl sm:text-6xl text-white"
        }`}
      >
        {s.text}
      </p>
    </motion.div>
  );
}

// Scroll indicator extracted so useTransform is valid at component level.
function ScrollIndicator({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.08], [1, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="section-tag text-white/25">scrolleá</span>
      <motion.div
        className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        animate={{ scaleY: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className="relative"
      style={{ height: `${statements.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Decorative vertical line */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-flora-accent/15 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-5 w-full h-32">
          {statements.map((s, i) => (
            <Statement
              key={i}
              s={s}
              i={i}
              total={statements.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <ScrollIndicator progress={scrollYProgress} />
      </div>
    </section>
  );
}
