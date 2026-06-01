"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { waLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CatKey = "flores" | "aceites" | "cremas";
const KEYS: CatKey[] = ["flores", "aceites", "cremas"];

const TABS: Record<CatKey, { label: string; sub: string; photo: string }> = {
  flores: {
    label: "Flores",
    sub: "Membresía mensual",
    photo: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=85",
  },
  aceites: {
    label: "Aceites",
    sub: "Q1 · Q2 · Q3",
    photo: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&q=85",
  },
  cremas: {
    label: "Crema",
    sub: "50 cc · 100 cc",
    photo: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=85",
  },
};

/* ── Flores — membresías ─────────────────────────────── */
const PLANES = [
  {
    name: "Small", cantidad: "10", unidad: "g / mes",
    features: ["Evaluación inicial sin cargo","Gestión REPROCANN incluida","Entrega en todo el país","Perfil de cannabinoides del lote"],
    waText: "Hola, me interesa el plan Small de flores en Flora 🌿",
  },
  {
    name: "Medium", cantidad: "20", unidad: "g / mes",
    features: ["Evaluación inicial sin cargo","Gestión REPROCANN incluida","Entrega en todo el país","Perfil de cannabinoides del lote","Selección de variedad"],
    waText: "Hola, me interesa el plan Medium de flores en Flora 🌿",
  },
  {
    name: "Large", cantidad: "30", unidad: "g / mes",
    features: ["Evaluación inicial sin cargo","Gestión REPROCANN incluida","Entrega en todo el país","Perfil de cannabinoides del lote","Selección de variedad","Seguimiento médico incluido"],
    waText: "Hola, me interesa el plan Large de flores en Flora 🌿",
  },
  {
    name: "Extra Large", cantidad: "40", unidad: "g / mes",
    features: ["Evaluación inicial sin cargo","Gestión REPROCANN incluida","Entrega en todo el país","Perfil de cannabinoides del lote","Selección de variedad","Seguimiento médico prioritario"],
    waText: "Hola, me interesa el plan Extra Large de flores en Flora 🌿",
  },
];

/* ── Aceites — Q1 Q2 Q3 ──────────────────────────────── */
const ACEITES = [
  {
    codigo: "Q1",
    subtitulo: "Entrada al tratamiento",
    desc: "Concentración baja, ideal para quienes empiezan. Suave, predecible y fácil de dosificar. El primer paso con respaldo médico.",
    usos: ["Inicio de tratamiento", "Ansiedad leve", "Bienestar general"],
    waText: "Hola, me interesa el aceite Q1 de Flora 🌿",
  },
  {
    codigo: "Q2",
    subtitulo: "El equilibrado",
    desc: "Fórmula balanceada para uso continuo. Acompaña el día y la noche. Elegido por quienes ya tienen su tratamiento calibrado.",
    usos: ["Uso diurno y nocturno", "Dolor moderado", "Insomnio"],
    waText: "Hola, me interesa el aceite Q2 de Flora 🌿",
  },
  {
    codigo: "Q3",
    subtitulo: "Alta concentración",
    desc: "Para tratamientos establecidos y condiciones complejas. Máxima potencia, formulación precisa. Indicado con acompañamiento médico.",
    usos: ["Dolor crónico", "Condiciones complejas", "Uso nocturno intensivo"],
    waText: "Hola, me interesa el aceite Q3 de Flora 🌿",
  },
];

/* ── Crema — 2 presentaciones ───────────────────────── */
const CREMAS = [
  {
    presentacion: "50 cc",
    subtitulo: "Presentación personal",
    desc: "Para uso localizado y tratamientos puntuales. Fácil de llevar, ideal para probar la fórmula.",
    waText: "Hola, me interesa la crema 50cc de Flora 🌿",
  },
  {
    presentacion: "100 cc",
    subtitulo: "Presentación completa",
    desc: "Para uso continuo y zonas de mayor extensión. La opción elegida por quienes ya incorporaron la crema a su rutina.",
    waText: "Hola, me interesa la crema 100cc de Flora 🌿",
  },
];

/* ── Componente ──────────────────────────────────────── */
export function Productos() {
  const [activo, setActivo] = useState<CatKey>("flores");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="membresias" className="section-dark py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Header */}
        <div className="border-b border-white/10 pb-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="title-section text-cream"
          >
            Elegí lo
            <br />
            <em className="text-green-accent">que necesitás.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-redhat text-sm text-white/40 max-w-xs leading-relaxed"
          >
            Flores como membresía mensual. Aceites y crema disponibles por consulta directa.
          </motion.p>
        </div>

        {/* Selector fotográfico full-width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-3 gap-2 mb-12 rounded-2xl overflow-hidden"
        >
          {KEYS.map((key) => {
            const tab = TABS[key];
            const isActive = activo === key;
            return (
              <button
                key={key}
                onClick={() => setActivo(key)}
                className={cn(
                  "relative h-44 md:h-56 overflow-hidden group transition-all duration-400 focus:outline-none",
                  isActive ? "flex-[1.3]" : "flex-1"
                )}
              >
                {/* Foto */}
                <Image
                  src={tab.photo}
                  alt={tab.label}
                  fill
                  className={cn(
                    "object-cover transition-all duration-700",
                    isActive ? "scale-105 brightness-75" : "scale-100 brightness-50 group-hover:brightness-60"
                  )}
                  sizes="(max-width: 768px) 33vw, 25vw"
                />

                {/* Overlay verde activo */}
                <div className={cn(
                  "absolute inset-0 transition-opacity duration-400",
                  isActive
                    ? "bg-gradient-to-t from-green-dark/80 via-green-dark/20 to-transparent opacity-100"
                    : "bg-green-dark/40 opacity-100 group-hover:opacity-60"
                )} />

                {/* Borde inferior activo */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300",
                  isActive ? "bg-green-accent" : "bg-transparent"
                )} />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-left">
                  <p className={cn(
                    "font-noodle leading-none transition-colors duration-300 mb-1",
                    isActive ? "text-cream" : "text-cream/60 group-hover:text-cream/85",
                    "text-3xl md:text-4xl"
                  )}>
                    {tab.label}
                  </p>
                  <p className={cn(
                    "font-redhat text-xs transition-all duration-300",
                    isActive ? "text-green-accent opacity-100" : "text-white/30 opacity-0 group-hover:opacity-100"
                  )}>
                    {tab.sub}
                  </p>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Contenido por tab */}
        <AnimatePresence mode="wait">

          {/* ── FLORES ── */}
          {activo === "flores" && (
            <motion.div key="flores"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-redhat text-sm text-white/45 mb-8 max-w-lg leading-relaxed">
                Flor seca de cultivo propio. Cada lote incluye perfil completo de cannabinoides y terpenos. Plan mensual, sin contratos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PLANES.map((p) => (
                  <div key={p.name}
                    className="border border-white/10 rounded-2xl p-7 flex flex-col hover:border-green-accent/40 hover:bg-white/4 transition-all duration-300 group">
                    <div className="mb-6">
                      <p className="section-tag text-green-accent mb-2">{p.name}</p>
                      <div className="flex items-end gap-1.5 leading-none">
                        <span className="font-noodle text-cream" style={{ fontSize: "clamp(2.8rem,5.5vw,4rem)" }}>
                          {p.cantidad}
                        </span>
                        <span className="font-redhat text-white/35 text-sm mb-1">{p.unidad}</span>
                      </div>
                    </div>
                    <div className="h-px bg-white/8 mb-5" />
                    <ul className="flex-1 space-y-2 mb-7">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="text-green-accent text-xs leading-none mt-1 flex-shrink-0">✦</span>
                          <span className="font-redhat text-xs text-white/50 leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={waLink(p.waText)} target="_blank" rel="noopener noreferrer"
                      className="block text-center font-redhat font-semibold text-xs py-3 rounded-full bg-green-accent/10 text-green-accent border border-green-accent/20 group-hover:bg-green-accent group-hover:text-green-dark group-hover:border-green-accent transition-all duration-200">
                      Quiero este plan →
                    </Link>
                  </div>
                ))}
              </div>
              <p className="font-redhat text-xs text-white/20 mt-6 text-center">
                Sin contratos ni permanencia mínima. Podés cambiar de plan cuando quieras.
              </p>
            </motion.div>
          )}

          {/* ── ACEITES ── */}
          {activo === "aceites" && (
            <motion.div key="aceites"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-redhat text-sm text-white/45 mb-10 max-w-lg leading-relaxed">
                Extractos sublinguales de producción propia. Tres formulaciones con distintas relaciones CBD:THC. Cada una pensada para una etapa o necesidad específica del tratamiento.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {ACEITES.map((a, i) => (
                  <motion.div key={a.codigo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="border border-white/10 rounded-2xl p-8 flex flex-col hover:border-green-accent/35 transition-colors duration-300 group"
                  >
                    {/* Código grande */}
                    <div className="mb-6">
                      <p className="section-tag text-white/25 mb-3">Aceite medicinal</p>
                      <h3 className="font-noodle text-cream leading-none mb-1"
                        style={{ fontSize: "clamp(4rem, 8vw, 5.5rem)" }}>
                        {a.codigo}
                      </h3>
                      <p className="font-redhat text-green-accent text-xs font-semibold tracking-wide">
                        {a.subtitulo}
                      </p>
                    </div>

                    <div className="h-px bg-white/8 mb-6" />

                    <p className="font-redhat text-sm text-white/55 leading-relaxed flex-1 mb-6">
                      {a.desc}
                    </p>

                    {/* Usos */}
                    <div className="flex flex-wrap gap-1.5 mb-7">
                      {a.usos.map((u) => (
                        <span key={u}
                          className="font-redhat text-xs text-white/35 border border-white/10 px-3 py-1 rounded-full">
                          {u}
                        </span>
                      ))}
                    </div>

                    <Link href={waLink(a.waText)} target="_blank" rel="noopener noreferrer"
                      className="block text-center font-redhat font-semibold text-xs py-3 rounded-full bg-green-accent/10 text-green-accent border border-green-accent/20 group-hover:bg-green-accent group-hover:text-green-dark group-hover:border-green-accent transition-all duration-200">
                      Consultar {a.codigo} →
                    </Link>
                  </motion.div>
                ))}
              </div>
              <p className="font-redhat text-xs text-white/20 mt-6 text-center">
                Concentraciones y disponibilidad por consulta. El equipo médico orienta la elección.
              </p>
            </motion.div>
          )}

          {/* ── CREMA ── */}
          {activo === "cremas" && (
            <motion.div key="cremas"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-redhat text-sm text-white/45 mb-10 max-w-lg leading-relaxed">
                Formulación tópica antiinflamatoria de uso externo. Una sola fórmula, dos presentaciones. Para dolor localizado, articulaciones y recuperación muscular.
              </p>

              {/* Nombre del producto — protagonismo */}
              <div className="mb-10">
                <h3 className="font-noodle text-cream leading-none"
                  style={{ fontSize: "clamp(4rem, 10vw, 7rem)" }}>
                  Crema Flora
                </h3>
                <p className="font-redhat text-green-accent text-sm font-semibold mt-2 tracking-wide">
                  Fórmula tópica medicinal
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
                {CREMAS.map((c, i) => (
                  <motion.div key={c.presentacion}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border border-white/10 rounded-2xl p-8 flex flex-col hover:border-green-accent/35 transition-colors duration-300 group"
                  >
                    <div className="mb-5">
                      <p className="section-tag text-white/25 mb-3">Presentación</p>
                      <div className="flex items-end gap-2 leading-none mb-1">
                        <span className="font-noodle text-cream"
                          style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}>
                          {c.presentacion}
                        </span>
                      </div>
                      <p className="font-redhat text-green-accent text-xs font-semibold tracking-wide mt-1">
                        {c.subtitulo}
                      </p>
                    </div>

                    <div className="h-px bg-white/8 mb-5" />

                    <p className="font-redhat text-sm text-white/55 leading-relaxed flex-1 mb-7">
                      {c.desc}
                    </p>

                    <Link href={waLink(c.waText)} target="_blank" rel="noopener noreferrer"
                      className="block text-center font-redhat font-semibold text-xs py-3 rounded-full bg-green-accent/10 text-green-accent border border-green-accent/20 group-hover:bg-green-accent group-hover:text-green-dark group-hover:border-green-accent transition-all duration-200">
                      Consultar {c.presentacion} →
                    </Link>
                  </motion.div>
                ))}
              </div>

              <p className="font-redhat text-xs text-white/20 mt-6">
                Uso externo. No requiere REPROCANN. Disponibilidad por consulta.
              </p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
