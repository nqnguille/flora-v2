"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { WA_LINK } from "@/lib/constants";
import { BotanicalLeaf } from "@/components/ui/BotanicalLeaf";

const d = (i: number) => ({ duration: 0.8, delay: 0.1 + i * 0.15, ease: "easeOut" as const });

export function Hero() {
  return (
    <section className="relative min-h-screen section-dark overflow-hidden flex flex-col">

      {/* Foto botánica — fondo completo con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=85"
          alt="Jardín botánico"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay oscuro — más intenso en la izquierda donde va el texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-dark/95 via-green-dark/75 to-green-dark/30" />
        {/* Overlay inferior para transición suave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-dark to-transparent" />
      </div>

      {/* Hoja SVG decorativa — flota a la derecha */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] z-10 flex items-center justify-end pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          <BotanicalLeaf
            className="w-[340px] md:w-[420px] lg:w-[500px] h-auto translate-x-1/4"
            color="#71CE6A"
            opacity={0.55}
          />
        </motion.div>
      </div>

      {/* Contenido */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full flex-1 flex flex-col justify-between pt-28 pb-10">

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={d(0)}>
          <span className="inline-flex items-center gap-2 border border-green-accent/40 text-green-accent section-tag px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-accent animate-pulse" />
            Cannabis medicinal · Argentina · Ley 27.350
          </span>
        </motion.div>

        {/* Título */}
        <div className="max-w-2xl mt-auto mb-auto pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={d(1)}
            className="title-brutal text-cream leading-[0.92] mb-8"
          >
            Cultivamos
            <br />
            <span className="text-green-accent">conciencia.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={d(2)}
            className="font-redhat text-cream/70 text-lg leading-relaxed mb-10 max-w-md"
          >
            Calidad verificada, genéticas seleccionadas y acceso legal.
            Sin incertidumbre, sin zona gris.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={d(3)}
            className="flex flex-wrap gap-3"
          >
            <Link href="/#contacto"
              className="font-redhat font-bold text-sm bg-green-accent text-green-dark px-7 py-3.5 rounded-full hover:opacity-90 transition-all hover:-translate-y-0.5">
              Quiero asociarme
            </Link>
            <Link href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="font-redhat font-semibold text-sm border border-cream/30 text-cream px-7 py-3.5 rounded-full hover:border-cream/60 hover:bg-cream/5 transition-all flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current opacity-70" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="flex flex-wrap gap-8 pt-8 border-t border-cream/10"
        >
          {[
            { n: "50+", label: "Socios activos" },
            { n: "Ley 27.350", label: "Marco legal" },
            { n: "REPROCANN", label: "Registro oficial" },
            { n: "Gratis", label: "Evaluación inicial" },
          ].map((s) => (
            <div key={s.label}>
              <span className="font-noodle text-green-accent text-2xl block leading-none">{s.n}</span>
              <span className="section-tag text-cream/35 mt-1 block">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Scroll cue Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-30"
      >
        <motion.div
          className="flex flex-col items-center gap-0.5"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          {[0, 1].map((i) => (
            <svg key={i} width="16" height="9" viewBox="0 0 16 9"
              className="fill-none stroke-cream/25" strokeWidth="1.5" strokeLinecap="round">
              <polyline points="1,1 8,8 15,1" />
            </svg>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
