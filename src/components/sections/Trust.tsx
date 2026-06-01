"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BotanicalLeaf } from "@/components/ui/BotanicalLeaf";

const stats = [
  { value: "50+",        label: "Socios activos" },
  { value: "Ley 27.350", label: "Marco legal" },
  { value: "REPROCANN",  label: "Registro oficial" },
  { value: "Nacional",   label: "Entrega en todo el país" },
];

const items = [
  "Ley 27.350 vigente",
  "REPROCANN activo",
  "Asociación Civil inscripta",
  "Entrega en todo el país",
];

export function Trust() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="aval" className="section-dark py-24 px-6 md:px-10 relative overflow-hidden">
      {/* Hoja decorativa esquina izquierda */}
      <div className="absolute -left-16 bottom-8 pointer-events-none hidden lg:block opacity-20 rotate-12">
        <BotanicalLeaf className="w-56 h-auto" color="#71CE6A" opacity={1} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="border-b border-white/10 pb-14 mb-14"
        >
          <h2 className="title-section text-cream max-w-2xl">
            Todo documentado.
            <br />
            <em className="text-green-accent">Todo verificable.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.09 }}
                className="border border-white/10 rounded-xl p-6 hover:border-green-accent/30 transition-colors group"
              >
                <p className="font-noodle text-cream text-2xl md:text-3xl mb-1 group-hover:text-green-accent transition-colors">
                  {s.value}
                </p>
                <p className="font-redhat text-white/35 text-xs">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="section-tag text-green-accent mb-4 block">Marco legal</span>
            <p className="font-redhat text-white/55 text-base leading-relaxed mb-8">
              La Ley 27.350 habilita a clubes de cultivo a producir cannabis medicinal para sus socios. REPROCANN registra a la organización y a cada socio individualmente. Flora opera en ese marco desde el primer día, con documentación disponible para quien la quiera ver.
            </p>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-accent flex-shrink-0" />
                  <span className="font-redhat text-white/60 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
