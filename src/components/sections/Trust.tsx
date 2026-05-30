"use client";

import { motion } from "framer-motion";
import { Users, Scale, ClipboardList, Building2 } from "lucide-react";

const stats = [
  { icon: Users,        value: "50+",       label: "Socios activos" },
  { icon: Scale,        value: "Ley 27.350",label: "Marco legal" },
  { icon: ClipboardList,value: "REPROCANN", label: "Registro oficial" },
  { icon: Building2,    value: "Asoc. Civil",label: "Neuquén" },
];

const items = [
  "Ley 27.350",
  "REPROCANN activo",
  "Asociación Civil inscripta",
  "Envío legal por Andreani",
];

export function Trust() {
  return (
    <section id="aval" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag text-flora-accent mb-4 block">Respaldo</span>
          <h2 className="font-garamond font-bold text-white text-5xl sm:text-6xl mb-4">
            Todo documentado.
            <br />
            <em className="text-flora-accent">Todo verificable.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <s.icon size={20} className="text-white/20 mx-auto mb-3" />
              <p className="font-garamond font-bold text-white text-lg mb-0.5">{s.value}</p>
              <p className="font-jakarta text-white/35 text-xs">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start"
        >
          <div className="flex-1">
            <span className="section-tag text-flora-accent mb-3 block">Marco legal</span>
            <h3 className="font-garamond font-bold text-white text-3xl mb-4">
              No te pedimos que confíes.
              <br />
              Te mostramos los documentos.
            </h3>
            <p className="font-jakarta text-white/45 text-sm leading-relaxed max-w-md">
              La Ley 27.350 habilita a clubes de cultivo a producir cannabis medicinal
              para sus socios. REPROCANN registra a la organización y a cada socio
              individualmente. Flora opera en ese marco desde el primer día.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 md:min-w-52">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-2.5 glass rounded-xl px-4 py-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-flora-accent flex-shrink-0" />
                <span className="font-jakarta text-white/65 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
