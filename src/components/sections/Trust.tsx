"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "50+",       label: "Socios activos" },
  { value: "Ley 27350", label: "Marco legal" },
  { value: "REPROCANN", label: "Registro oficial" },
  { value: "Nacional",  label: "Entrega en todo el país" },
];

export function Trust() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="aval" className="section-dark py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Impact statement */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="border-b border-white/10 pb-16 mb-16"
        >
          <h2 className="title-section text-cream max-w-3xl">
            Todo documentado.
            <br />
            <em className="text-green-accent">Todo verificable.</em>
          </h2>
        </motion.div>

        {/* Stats + texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="bg-green-dark p-8"
              >
                <p className="font-garamond font-bold text-cream text-3xl mb-1">{s.value}</p>
                <p className="font-jakarta text-white/35 text-xs">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Texto legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="section-tag text-green-accent mb-5 block">Marco legal</span>
            <p className="font-jakarta text-white/55 text-base leading-relaxed mb-8">
              La Ley 27.350 habilita a clubes de cultivo a producir cannabis medicinal para sus socios. El REPROCANN del Ministerio de Salud registra a la organización y a cada socio individualmente. Flora opera dentro de ese marco desde el primer día, con toda la documentación disponible para quien la quiera ver.
            </p>
            <div className="space-y-3">
              {["Ley 27.350","REPROCANN activo","Asociación Civil inscripta","Entrega en todo el país"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-green-accent text-lg leading-none">✦</span>
                  <span className="font-jakarta text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
