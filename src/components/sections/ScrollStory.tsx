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

// Las líneas empiezan después del 10% del scroll
// → nunca hay contenido visible al cargar la página, solo el scroll cue
const ENTRY = 0.10;

function Line({ line, i, total, progress }: {
  line: (typeof lines)[number];
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const range = 1 - ENTRY;
  const start   = ENTRY + (i / total) * range;
  const end     = ENTRY + ((i + 1) / total) * range;
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
  // Texto — desaparece al primer scroll
  const textOpacity = useTransform(progress, [0, 0.004, 0.05], [1, 1, 0]);
  const textScale   = useTransform(progress, [0, 0.004, 0.05], [1, 1, 0.7]);

  // Indicadores (mouse + chevrons) — quedan un poco más antes de desaparecer
  const iconOpacity = useTransform(progress, [0, 0.05, 0.12], [1, 1, 0]);
  const iconScale   = useTransform(progress, [0, 0.05, 0.12], [1, 1, 0.5]);

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none select-none">

      {/* Texto principal — desaparece primero */}
      <motion.div
        style={{ opacity: textOpacity, scale: textScale }}
        className="origin-bottom"
      >
        <motion.span
          className="font-noodle text-cream/90 tracking-widest block"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
        >
          DESLIZA PARA COMENZAR
        </motion.span>
      </motion.div>

      {/* Mouse mini + chevrons — quedan después del texto */}
      <motion.div
        style={{ opacity: iconOpacity, scale: iconScale }}
        className="flex flex-col items-center gap-2 origin-top"
      >
        {/* Mouse icon pequeño */}
        <div className="relative w-6 h-9 rounded-full border border-cream/30 flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 rounded-full bg-green-accent"
            animate={{ y: [0, 9, 0], opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </div>

        {/* Chevrons */}
        <div className="flex flex-col items-center gap-0.5">
          {[0, 1, 2].map((i) => (
            <motion.svg
              key={i}
              width="18" height="10" viewBox="0 0 18 10"
              className="fill-none stroke-cream/40"
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{ opacity: [0.15, 0.85, 0.15], y: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.18, ease: "easeInOut" }}
            >
              <polyline points="1,1 9,9 17,1" />
            </motion.svg>
          ))}
        </div>
      </motion.div>
    </div>
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
