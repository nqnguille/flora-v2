"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { waLink } from "@/lib/constants";
import Link from "next/link";

const productos = [
  {
    star: true,
    tag: "Producto estrella",
    name: "Flores",
    desc: "Flor seca de cultivo propio. Cada lote tiene su perfil completo de cannabinoides y terpenos. Distintas variedades disponibles según tu tratamiento.",
    detalle: ["Múltiples variedades","Lote analizado en laboratorio","Perfil THC:CBD por variedad","Empaque discreto y sellado"],
    waText: "Hola, me interesa saber más sobre las flores de Flora 🌿",
    imagen: "🌿",
  },
  {
    star: false,
    tag: "Complemento",
    name: "Aceites",
    desc: "Extractos sublinguales en distintas concentraciones de CBD y THC. Absorción rápida, dosificación precisa.",
    detalle: ["Varias concentraciones","Uso sublingual","Fácil dosificación"],
    waText: "Hola, me interesa saber más sobre los aceites de Flora 🌿",
    imagen: "💧",
  },
  {
    star: false,
    tag: "Uso tópico",
    name: "Cremas",
    desc: "Formulaciones tópicas para aplicación localizada. Para dolor muscular, articular o inflamación en zona específica.",
    detalle: ["Aplicación localizada","Sin efecto sistémico","Para dolor e inflamación"],
    waText: "Hola, me interesa saber más sobre las cremas de Flora 🌿",
    imagen: "🫙",
  },
];

export function Productos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-cream botanical-texture py-24 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>

        <div className="border-b border-green-dark/15 pb-10 mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="title-section text-green-dark"
          >
            Lo que
            <br />
            <em>cultivamos.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-redhat text-sm text-green-dark/50 max-w-xs leading-relaxed md:text-right"
          >
            Sin precios en la web porque el acceso es como socio, no como cliente. Consultá disponibilidad por WhatsApp.
          </motion.p>
        </div>

        {/* Star product — Flores */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          <div className="bg-green-dark rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[320px] relative overflow-hidden group">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
              <span className="text-[12rem] leading-none select-none">🌿</span>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="section-tag text-green-accent">
                  {productos[0].tag}
                </span>
                <span className="font-redhat text-xs text-white/30 border border-white/15 px-3 py-1 rounded-full">
                  Más solicitado
                </span>
              </div>
              <h3 className="font-noodle text-cream leading-none mb-4"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                {productos[0].name}
              </h3>
              <p className="font-redhat text-white/60 text-sm leading-relaxed max-w-sm mb-6">
                {productos[0].desc}
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
              <ul className="grid grid-cols-2 gap-2">
                {productos[0].detalle.map((d) => (
                  <li key={d} className="flex items-center gap-1.5 font-redhat text-xs text-white/50">
                    <span className="text-green-accent text-xs">✦</span>
                    {d}
                  </li>
                ))}
              </ul>
              <Link
                href={waLink(productos[0].waText)}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-redhat font-bold text-sm bg-green-accent text-green-dark px-6 py-3 rounded-full hover:opacity-90 transition-opacity w-fit group-hover:-translate-y-0.5 transition-transform"
              >
                Consultar disponibilidad →
              </Link>
            </div>
          </div>

          {/* Columna derecha — Aceites + Cremas */}
          <div className="flex flex-col gap-4">
            {productos.slice(1).map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="border border-green-dark/15 rounded-2xl p-7 flex flex-col gap-4 hover:border-green-dark/35 transition-colors group flex-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="section-tag text-green-dark/40">{p.tag}</span>
                    <span className="text-2xl">{p.imagen}</span>
                  </div>
                  <h3 className="font-display font-bold text-green-dark text-2xl mb-2">{p.name}</h3>
                  <p className="font-redhat text-sm text-green-dark/55 leading-relaxed">{p.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.detalle.map((d) => (
                    <span key={d} className="font-redhat text-xs text-green-dark/50 border border-green-dark/12 px-3 py-1 rounded-full">
                      {d}
                    </span>
                  ))}
                </div>

                <Link
                  href={waLink(p.waText)}
                  target="_blank" rel="noopener noreferrer"
                  className="font-redhat font-semibold text-xs text-green-dark/50 group-hover:text-green-dark transition-colors flex items-center gap-1.5 mt-auto"
                >
                  Consultar →
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-redhat text-xs text-green-dark/30 text-center"
        >
          La disponibilidad de variedades varía según el ciclo de cultivo.
        </motion.p>
      </div>
    </section>
  );
}
