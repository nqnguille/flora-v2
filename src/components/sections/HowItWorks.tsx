"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Contactanos",
    desc: "Completá el chat o escribinos por WhatsApp. Tres preguntas, menos de dos minutos.",
    detail: "Respondemos en menos de 24 horas.",
  },
  {
    n: "02",
    title: "Evaluación inicial",
    desc: "Nuestro equipo médico revisa tu caso, orienta el tratamiento y gestiona el REPROCANN si no lo tenés.",
    detail: "Sin cargo. Sin burocracia.",
  },
  {
    n: "03",
    title: "Te llega donde estés",
    desc: "Entrega discreta en cualquier punto del país. Perfil de cannabinoides del lote y documentación legal en cada paquete.",
    detail: "Andreani a todo el país.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-funciona" className="section-cream botanical-texture py-24 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>

        <div className="border-b border-green-dark/15 pb-10 mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="title-section text-green-dark"
          >
            Tres pasos.
          </motion.h2>
        </div>

        <div className="divide-y divide-green-dark/8">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.13 }}
              className="flex flex-col md:flex-row md:items-start gap-6 md:gap-14 py-10 group cursor-default"
            >
              {/* Número */}
              <span className="font-noodle text-[5.5rem] leading-none text-green-accent/20 group-hover:text-green-accent/40 transition-colors duration-300 min-w-[6rem] select-none">
                {s.n}
              </span>

              {/* Contenido */}
              <div className="flex-1 pt-1">
                <h3 className="font-display font-bold text-green-dark text-2xl md:text-3xl mb-2.5">
                  {s.title}
                </h3>
                <p className="font-redhat text-sm text-green-dark/55 leading-relaxed max-w-lg mb-3">
                  {s.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 font-redhat text-xs font-semibold text-green-accent/70">
                  <span className="w-1 h-1 rounded-full bg-green-accent/50" />
                  {s.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
