"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MEMBERSHIPS, waLink } from "@/lib/constants";

export function Memberships() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="membresias" className="bg-green-dark py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Header */}
        <div className="border-b border-white/10 pb-10 mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="title-section text-cream"
          >
            Adaptable
            <br />
            <em className="text-green-accent">a tus hábitos.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-jakarta text-sm text-white/40 max-w-xs leading-relaxed"
          >
            Cuatro planes según tu consumo mensual. Evaluación inicial sin cargo para todos los socios. Precio consultado por WhatsApp.
          </motion.p>
        </div>

        {/* 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {MEMBERSHIPS.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="bg-green-dark p-8 flex flex-col group hover:bg-green-mid transition-colors duration-300"
            >
              {/* Nombre + gramos */}
              <div className="mb-8">
                <p className="section-tag text-green-accent mb-3">{m.name}</p>
                <span className="font-garamond font-bold text-cream leading-none"
                  style={{ fontSize: "clamp(3rem,6vw,4.5rem)" }}>
                  {m.grams}
                  <span className="text-2xl font-normal text-white/30 ml-1">g</span>
                </span>
                <p className="font-jakarta text-xs text-white/35 mt-2">por mes</p>
              </div>

              <div className="h-px bg-white/10 mb-6" />

              {/* Features */}
              <ul className="flex-1 space-y-2.5 mb-8">
                {m.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="text-green-accent text-sm leading-none mt-0.5">✦</span>
                    <span className="font-jakarta text-xs text-white/45 leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={waLink(m.waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-jakarta font-bold text-xs uppercase tracking-wider border border-white/15 text-white/60 py-3 rounded-full hover:bg-green-accent hover:text-green-dark hover:border-green-accent transition-all duration-200"
              >
                Consultar precio
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Nota al pie */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-jakarta text-xs text-white/25 mt-8 text-center"
        >
          Podés cambiar de plan en cualquier momento. Sin contratos ni permanencia mínima.
        </motion.p>
      </div>
    </section>
  );
}
