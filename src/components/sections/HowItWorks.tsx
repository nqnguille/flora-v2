"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", title: "Contactanos",           desc: "Completá el chat o escribinos por WhatsApp. Tres preguntas, menos de dos minutos." },
  { n: "02", title: "Evaluación inicial",    desc: "Nuestro equipo médico revisa tu caso, orienta el tratamiento y gestiona el REPROCANN si no lo tenés. Sin cargo." },
  { n: "03", title: "Te llega donde estés",  desc: "Entrega discreta en cualquier punto del país. Con perfil de cannabinoides del lote y documentación legal en cada paquete." },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-funciona" className="bg-cream py-24 px-6 md:px-10">
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

        <div className="divide-y divide-green-dark/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 py-10 group"
            >
              <span className="font-garamond text-7xl font-bold text-green-dark/8 group-hover:text-green-accent/20 transition-colors min-w-[5rem] leading-none">
                {s.n}
              </span>
              <div className="flex-1">
                <h3 className="font-garamond font-semibold text-green-dark text-3xl mb-2">{s.title}</h3>
                <p className="font-jakarta text-sm text-green-dark/55 leading-relaxed max-w-lg">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
