"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MEMBERSHIPS, waLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Memberships() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="membresias" className="section-dark py-24 px-6 md:px-10">
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
            className="font-redhat text-sm text-white/45 max-w-xs leading-relaxed"
          >
            Cuatro planes según tu consumo mensual. Evaluación médica inicial sin cargo en todos.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MEMBERSHIPS.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="border border-white/10 rounded-2xl p-7 flex flex-col hover:border-green-accent/40 hover:bg-white/4 transition-all duration-300 group"
            >
              {/* Nombre + gramos */}
              <div className="mb-6">
                <p className="section-tag text-green-accent mb-2">{m.name}</p>
                <div className="flex items-end gap-1.5 leading-none">
                  <span className="font-noodle text-cream" style={{ fontSize: "clamp(2.8rem,5.5vw,4rem)" }}>
                    {m.grams}
                  </span>
                  <span className="font-redhat text-white/35 text-base mb-1">g / mes</span>
                </div>
              </div>

              <div className="h-px bg-white/8 mb-5" />

              {/* Features */}
              <ul className="flex-1 space-y-2 mb-7">
                {m.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="text-green-accent text-xs leading-none mt-1 flex-shrink-0">✦</span>
                    <span className="font-redhat text-xs text-white/50 leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={waLink(m.waText)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "block text-center font-redhat font-semibold text-xs py-3 rounded-full transition-all duration-200",
                  "bg-green-accent/10 text-green-accent border border-green-accent/20",
                  "group-hover:bg-green-accent group-hover:text-green-dark group-hover:border-green-accent"
                )}
              >
                Quiero esta membresía →
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="font-redhat text-xs text-white/25 mt-8 text-center"
        >
          Sin contratos ni permanencia mínima. Podés cambiar de plan cuando quieras.
        </motion.p>
      </div>
    </section>
  );
}
