"use client";

import { motion } from "framer-motion";
import { MessageSquare, Stethoscope, PackageCheck } from "lucide-react";

const steps = [
  { icon: MessageSquare, n: "01", title: "Contactanos", desc: "Completá el chat de onboarding o escribinos por WhatsApp. Tres preguntas, menos de dos minutos." },
  { icon: Stethoscope,   n: "02", title: "Evaluación inicial", desc: "Nuestro equipo médico revisa tu caso, orienta el tratamiento y gestiona el REPROCANN si no lo tenés." },
  { icon: PackageCheck,  n: "03", title: "Recibís tu medicamento", desc: "Envío por Andreani a todo el país, con perfil de cannabinoides del lote en cada entrega." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 px-5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag text-flora-accent mb-4 block">El proceso</span>
          <h2 className="font-garamond font-bold text-white text-5xl sm:text-6xl mb-4">
            Tres pasos.
          </h2>
          <p className="font-jakarta text-white/40 text-base">
            Sin burocracia. Con acompañamiento real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* connector */}
          <div className="hidden md:block absolute top-11 left-[calc(16.5%+2rem)] right-[calc(16.5%+2rem)] h-px bg-gradient-to-r from-transparent via-flora-accent/25 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-[88px] h-[88px] rounded-full glass-accent border border-flora-accent/20 flex items-center justify-center mb-6">
                <s.icon size={28} className="text-flora-accent" />
              </div>
              <span className="section-tag text-flora-accent/50 mb-2">{s.n}</span>
              <h3 className="font-garamond font-semibold text-white text-2xl mb-3">{s.title}</h3>
              <p className="font-jakarta text-white/40 text-sm leading-relaxed max-w-xs">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
