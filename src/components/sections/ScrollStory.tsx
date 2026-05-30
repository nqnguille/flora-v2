"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const statements = [
  { text: "Sabés lo que usás." },
  { text: "Pero no sabés qué contiene.", highlight: true },
  { text: "Ni si tiene pesticidas.", highlight: true },
  { text: "Ni si es la misma genética que la última vez.", highlight: true },
  { text: "Esa incertidumbre tiene solución.", accent: true },
];

export function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Each statement gets a 1/5 window of the scroll
  const opacities = statements.map((_, i) => {
    const start = i / statements.length;
    const peak  = (i + 0.5) / statements.length;
    const end   = (i + 1) / statements.length;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(
      scrollYProgress,
      [start, peak * 0.6, peak, end * 0.9, end],
      [0,      0.3,        1,     1,         0]
    );
  });

  const ys = statements.map((_, i) => {
    const start = i / statements.length;
    const peak  = (i + 0.5) / statements.length;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(scrollYProgress, [start, peak * 0.7], [30, 0]);
  });

  return (
    <section ref={ref} className="relative" style={{ height: `${statements.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background subtle line */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-flora-accent/20 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-5 w-full">
          {statements.map((s, i) => (
            <motion.div
              key={i}
              style={{ opacity: opacities[i], y: ys[i] }}
              className="absolute inset-x-5 text-center"
            >
              <p className={`font-garamond font-bold leading-tight text-balance
                ${s.accent
                  ? "text-5xl sm:text-6xl text-flora-accent text-glow"
                  : s.highlight
                    ? "text-4xl sm:text-5xl text-white/60"
                    : "text-5xl sm:text-6xl text-white"
                }`}
              >
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator — only visible when not scrolled */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        >
          <span className="section-tag text-white/25">scrolleá</span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
