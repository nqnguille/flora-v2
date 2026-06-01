"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

const testimonios = [
  {
    texto: "Llevaba tres años tomando ibuprofeno todos los días. Desde que empecé con Flora, lo dejé casi por completo. Lo que más me sorprendió fue que alguien me explicó por qué cada variedad y cómo usarla.",
    nombre: "Martín G.",
    detalle: "Dolor crónico · socio hace 8 meses",
    inicial: "M",
  },
  {
    texto: "Tenía miedo de que fuera complicado o que me miraran raro. Fue lo opuesto. El proceso fue claro, me acompañaron con el REPROCANN y en dos semanas ya tenía mi primera entrega en casa.",
    nombre: "Valeria R.",
    detalle: "Ansiedad · socia hace 5 meses",
    inicial: "V",
  },
  {
    texto: "Probé aceites de otros lados y nunca sabía exactamente qué tenían. Con Flora recibo un informe del lote con cada envío. Eso para mí lo cambia todo. No es un capricho, es mi salud.",
    nombre: "Diego T.",
    detalle: "Insomnio · socio hace 11 meses",
    inicial: "D",
  },
];

const AUTOPLAY_MS = 4800;

export function Testimonios() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const dragStartX = useRef(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const go = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonios.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonios.length) % testimonios.length);
  }, []);

  useEffect(() => {
    if (paused || !inView) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next, paused, inView]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section className="section-dark py-24 px-6 md:px-10" ref={ref}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag text-green-accent mb-4 block">Testimonios</span>
          <h2 className="title-section text-cream">
            Lo dicen
            <br />
            <em className="text-green-accent">nuestros socios.</em>
          </h2>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="overflow-hidden rounded-2xl border border-white/10 min-h-[260px] relative">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragStart={(_, info) => {
                  dragStartX.current = info.point.x;
                  setPaused(true);
                }}
                onDragEnd={(_, info) => {
                  const delta = info.point.x - dragStartX.current;
                  if (delta < -40) next();
                  else if (delta > 40) prev();
                  setPaused(false);
                }}
              >
                {/* Quote mark */}
                <span className="font-noodle text-green-accent/20 text-8xl leading-none select-none absolute top-4 left-8">
                  &ldquo;
                </span>

                <blockquote className="font-redhat text-cream/80 text-base md:text-lg leading-relaxed relative z-10 mt-8">
                  {testimonios[current].texto}
                </blockquote>

                <div className="flex items-center gap-4 relative z-10 mt-8">
                  <div className="w-10 h-10 rounded-full bg-green-accent/20 border border-green-accent/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-noodle text-green-accent text-xl leading-none">
                      {testimonios[current].inicial}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-cream text-sm">
                      {testimonios[current].nombre}
                    </p>
                    <p className="font-redhat text-white/35 text-xs">
                      {testimonios[current].detalle}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonios.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Testimonio ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-green-accent w-6"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Hint mobile */}
          <p className="text-center font-redhat text-xs text-white/20 mt-4 md:hidden">
            deslizá para cambiar
          </p>
        </motion.div>
      </div>
    </section>
  );
}
