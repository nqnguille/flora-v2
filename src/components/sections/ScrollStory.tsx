"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// 5 líneas × 70vh = 350vh — impactante pero no agotador
const SECTION_HEIGHT = 70;

const lines = [
  { text: "Que bueno que llegaste.", dim: false, accent: false },
  { text: "Acá no hay estigmas.",    dim: true,  accent: false },
  { text: "Solo acompañamiento,",    dim: true,  accent: false },
  { text: "calidad y acceso legal.", dim: true,  accent: false },
  { text: "Bienvenido a Flora.",     dim: false, accent: true  },
];

function Line({ line, i, total, progress }: {
  line: (typeof lines)[number];
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start   = i / total;
  const end     = (i + 1) / total;
  const fadeIn  = start + (end - start) * 0.3;
  const fadeOut = start + (end - start) * 0.82;

  const opacity = useTransform(progress, [start, fadeIn, fadeOut, end], [0, 1, 1, 0]);
  const y       = useTransform(progress, [start, fadeIn], [24, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className={`absolute inset-0 flex items-center justify-center px-8 text-center title-impact ${
        line.accent ? "text-green-accent" : line.dim ? "text-cream/40" : "text-cream"
      }`}
    >
      {line.text}
    </motion.p>
  );
}

function ScrollCue({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.08], [1, 0]);
  return (
    <motion.div style={{ opacity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
      <span className="section-tag text-cream/25">scrolleá</span>
      <motion.div
        className="w-px h-6 bg-gradient-to-b from-cream/30 to-transparent"
        animate={{ scaleY: [1, 0.3, 1] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
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
      className="relative section-dark"
      style={{ height: `${lines.length * SECTION_HEIGHT}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden pt-14">
        {lines.map((line, i) => (
          <Line key={i} line={line} i={i} total={lines.length} progress={scrollYProgress} />
        ))}
        <ScrollCue progress={scrollYProgress} />
      </div>
    </section>
  );
}
