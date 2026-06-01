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
  const opacity = useTransform(progress, [0, 0.1], [1, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none select-none"
    >
      {/* Mouse icon */}
      <div className="relative w-6 h-9 rounded-full border-2 border-cream/40 flex items-start justify-center pt-1.5">
        <motion.div
          className="w-1 h-2 rounded-full bg-green-accent"
          animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </div>
      <span className="section-tag text-cream/35 tracking-widest">deslizá</span>
      {/* Chevrons animados */}
      <div className="flex flex-col items-center gap-0.5">
        {[0, 1, 2].map((i) => (
          <motion.svg
            key={i}
            width="14" height="8" viewBox="0 0 14 8"
            className="fill-none stroke-cream/30"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{ opacity: [0.2, 0.8, 0.2], y: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.2, ease: "easeInOut" }}
          >
            <polyline points="1,1 7,7 13,1" />
          </motion.svg>
        ))}
      </div>
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
