"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { waLink } from "@/lib/constants";
import Link from "next/link";

const perfiles = [
  {
    emoji: "🌿",
    tag: "Dolor & inflamación",
    title: "Para quienes buscan una alternativa real.",
    desc: "Variedades con alto CBD y terpenos antiinflamatorios como beta-cariofileno. Para dolor crónico, articular o muscular que no encuentra respuesta en la medicina convencional.",
    accion: "Quiero hablar sobre dolor",
    waText: "Hola, me interesa Flora para manejo del dolor crónico 🌿",
  },
  {
    emoji: "🌙",
    tag: "Sueño & descanso",
    title: "Para quienes no logran descansar de verdad.",
    desc: "Genéticas indica-dominantes seleccionadas por su perfil sedante. Mirceno alto, THC balanceado. Para el insomnio, el sueño interrumpido y la mente que no para.",
    accion: "Quiero hablar sobre sueño",
    waText: "Hola, me interesa Flora para mejorar mi sueño 🌿",
  },
  {
    emoji: "☀️",
    tag: "Bienestar & ansiedad",
    title: "Para quienes buscan equilibrio en el día a día.",
    desc: "Variedades CBD:THC balanceadas para uso diurno. Sin sedación, sin niebla mental. Para la ansiedad, el estrés cotidiano y el bienestar como práctica continua.",
    accion: "Quiero hablar sobre bienestar",
    waText: "Hola, me interesa Flora para bienestar y ansiedad 🌿",
  },
];

export function Perfiles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-dark py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto" ref={ref}>

        <div className="border-b border-white/10 pb-10 mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="title-section text-cream"
          >
            ¿Por qué llegaste
            <br />
            <em className="text-green-accent">a Flora?</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-redhat text-sm text-white/40 max-w-xs leading-relaxed"
          >
            El cannabis medicinal no es una sola cosa. Nuestro equipo orienta el tratamiento según tu situación específica.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {perfiles.map((p, i) => (
            <motion.div
              key={p.tag}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="border border-white/10 rounded-2xl p-7 flex flex-col hover:border-green-accent/35 transition-colors duration-300 group"
            >
              <span className="text-3xl mb-5 block">{p.emoji}</span>
              <span className="section-tag text-green-accent mb-3 block">{p.tag}</span>
              <h3 className="font-display font-bold text-cream text-xl leading-snug mb-4">
                {p.title}
              </h3>
              <p className="font-redhat text-sm text-white/50 leading-relaxed flex-1 mb-7">
                {p.desc}
              </p>
              <Link
                href={waLink(p.waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-redhat font-semibold text-xs text-green-accent/70 group-hover:text-green-accent transition-colors flex items-center gap-1.5"
              >
                {p.accion}
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
