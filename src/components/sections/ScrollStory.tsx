"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const lines = [
  { text: "Ya tomaste la decisión.",         dim: false },
  { text: "Pero sin respaldo,",              dim: true  },
  { text: "sin trazabilidad,",               dim: true  },
  { text: "sin médico que te oriente,",      dim: true  },
  { text: "no es medicina. Es azar.",        dim: false, accent: true },
];

function Line({
  line, i, total, progress,
}: {
  line: typeof lines[number];
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start     = i / total;
  const end       = (i + 1) / total;
  const fadeIn    = start + (end - start) * 0.35;
  const fadeOut   = start + (end - start) * 0.85;

  const opacity = useTransform(progress, [start, fadeIn, fadeOut, end], [0, 1, 1, 0]);
  const y       = useTransform(progress, [start, fadeIn], [32, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className={`absolute inset-0 flex items-center justify-center px-6 text-center title-impact ${
        line.accent ? "text-green-accent" : line.dim ? "text-white/40" : "text-white"
      }`}
    >
      {line.text}
    </motion.p>
  );
}

function ScrollCue({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.06], [1, 0]);
  return (
    <motion.div style={{ opacity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="section-tag text-white/30">scrolleá</span>
      <motion.div
        className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        animate={{ scaleY: [1, 0.4, 1] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
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
    <section ref={ref} className="relative bg-green-dark" style={{ height: `${lines.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {lines.map((line, i) => (
          <Line key={i} line={line} i={i} total={lines.length} progress={scrollYProgress} />
        ))}
        <ScrollCue progress={scrollYProgress} />
      </div>
    </section>
  );
}
