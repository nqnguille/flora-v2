"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { MEMBERSHIPS, waLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Memberships() {
  return (
    <section id="membresias" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag text-flora-accent mb-4 block">Membresías</span>
          <h2 className="font-garamond font-bold text-white text-5xl sm:text-6xl mb-4">
            Elegí la tuya.
          </h2>
          <p className="font-jakarta text-white/40 text-base max-w-sm mx-auto">
            USD 9 a 12 por gramo. Evaluación inicial sin cargo para todos los socios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {MEMBERSHIPS.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={cn(
                "relative rounded-3xl p-6 flex flex-col transition-all hover:-translate-y-1",
                m.featured
                  ? "glass-accent border border-flora-accent/25 shadow-lg shadow-flora-accent/10"
                  : "glass hover:glass-strong"
              )}
            >
              {m.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-flora-accent text-flora-base font-jakarta font-bold text-[0.6rem] tracking-widest uppercase px-4 py-1 rounded-full">
                  Más elegida
                </span>
              )}

              <div className="mb-5">
                <h3 className="font-garamond font-semibold text-white text-2xl mb-0.5">{m.name}</h3>
                <p className="font-jakarta text-white/35 text-xs">{m.grams}g por mes</p>
              </div>

              <div className="mb-5">
                <span className={cn(
                  "font-garamond text-5xl font-bold leading-none",
                  m.featured ? "text-flora-accent" : "text-white"
                )}>
                  <span className="text-2xl align-super font-semibold">USD </span>
                  {m.priceUSD}
                </span>
                <p className="font-jakarta text-white/30 text-xs mt-1">≈ USD {m.pricePerGram}/g</p>
              </div>

              <div className="h-px bg-white/8 mb-5" />

              <ul className="flex-1 space-y-2.5 mb-6">
                {m.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-flora-accent/20 border border-flora-accent/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Check size={8} className="text-flora-accent" strokeWidth={3} />
                    </span>
                    <span className="font-jakarta text-white/55 text-xs leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={waLink(m.waText)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "block text-center font-jakarta font-bold text-sm py-3 rounded-full transition-all",
                  m.featured
                    ? "bg-flora-accent text-flora-base hover:opacity-90"
                    : "glass text-white hover:glass-strong border border-white/10"
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
