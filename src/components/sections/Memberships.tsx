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
    <section id="membresias" className="bg-green-dark py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Header */}
        <div className="border-b border-white/10 pb-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="title-section text-cream"
          >
            Membresías.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-jakarta text-sm text-white/40 max-w-xs leading-relaxed"
          >
            USD 9–12/g. Evaluación inicial sin cargo para todos los socios.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MEMBERSHIPS.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={cn(
                "relative border rounded-2xl p-7 flex flex-col",
                m.featured
                  ? "bg-green-accent border-green-accent"
                  : "bg-transparent border-white/15 hover:border-white/30 transition-colors"
              )}
            >
              {m.featured && (
                <span className="absolute -top-3 left-6 section-tag bg-green-dark text-green-accent px-3 py-1 rounded-full">
                  Más elegida
                </span>
              )}

              <div className="mb-6">
                <h3 className={cn("font-garamond font-semibold text-3xl mb-1",
                  m.featured ? "text-green-dark" : "text-cream")}>
                  {m.name}
                </h3>
                <p className={cn("font-jakarta text-xs", m.featured ? "text-green-dark/60" : "text-white/35")}>
                  {m.grams}g por mes
                </p>
              </div>

              <div className="mb-6">
                <span className={cn("font-garamond font-bold leading-none",
                  m.featured ? "text-green-dark" : "text-cream",
                  "text-6xl")}>
                  {m.priceUSD}
                  <span className="text-2xl align-super ml-1">USD</span>
                </span>
                <p className={cn("font-jakarta text-xs mt-1.5",
                  m.featured ? "text-green-dark/50" : "text-white/30")}>
                  ≈ {m.pricePerGram} USD/g
                </p>
              </div>

              <div className={cn("h-px mb-6", m.featured ? "bg-green-dark/20" : "bg-white/10")} />

              <ul className="flex-1 space-y-2.5 mb-7">
                {m.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <span className={cn("text-base leading-none mt-0.5",
                      m.featured ? "text-green-dark" : "text-green-accent")}>
                      ✦
                    </span>
                    <span className={cn("font-jakarta text-xs leading-relaxed",
                      m.featured ? "text-green-dark/70" : "text-white/50")}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={waLink(m.waText)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "block text-center font-jakarta font-bold text-sm py-3.5 rounded-full transition-all",
                  m.featured
                    ? "bg-green-dark text-green-accent hover:bg-green-mid"
                    : "bg-white/8 text-cream border border-white/15 hover:bg-white/15"
                )}
              >
                Empezar con {m.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
