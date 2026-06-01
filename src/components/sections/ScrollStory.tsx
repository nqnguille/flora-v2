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
  // 0 → sin scroll: grande y visible
  // 0.06 → empezó a scrollear: se achica y desaparece
  const opacity = useTransform(progress, [0, 0.005, 0.06], [1,   1,    0]);
  const scale   = useTransform(progress, [0, 0.005, 0.06], [1,   1,    0.4]);
  const y       = useTransform(progress, [0, 0.005, 0.06], [0,   0,    24]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none select-none origin-bottom"
    >
      {/* Texto principal grande */}
      <motion.span
        className="font-noodle text-cream/90 tracking-widest"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      >
        SCROLLEÁ
      </motion.span>

      {/* Mouse icon — grande */}
      <div className="relative w-9 h-14 rounded-full border-2 border-cream/35 flex items-start justify-center pt-2.5">
        <motion.div
          className="w-1.5 h-3 rounded-full bg-green-accent"
          animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </div>

      {/* Chevrons en cascada */}
      <div className="flex flex-col items-center gap-1">
        {[0, 1, 2, 3].map((i) => (
          <motion.svg
            key={i}
            width="22" height="12" viewBox="0 0 22 12"
            className="fill-none stroke-cream/50"
            strokeWidth="1.8"
            strokeLinecap="round"
            animate={{ opacity: [0.15, 0.9, 0.15], y: [0, 3, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
          >
            <polyline points="1,1 11,11 21,1" />
          </motion.svg>
        ))}
      </div>

      {/* Subtexto */}
      <span className="section-tag text-cream/30 tracking-[0.25em]">
        para explorar
      </span>
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
