"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { waLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CatKey = "flores" | "aceites" | "cremas";

const CATEGORIAS: Record<CatKey, {
  label: string;
  desc: string;
  detalle: string;
  planes: { name: string; cantidad: string; unidad: string; features: string[]; waText: string }[];
}> = {
  flores: {
    label: "Flores",
    desc: "Flor seca de cultivo propio. Perfil completo de cannabinoides y terpenos por lote.",
    detalle: "Disponibilidad según ciclo de cultivo. Distintas variedades por temporada.",
    planes: [
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
    ],
  },
  aceites: {
    label: "Aceites",
    desc: "Extractos sublinguales en distintas concentraciones de CBD y THC. Absorción rápida, dosificación precisa.",
    detalle: "Concentraciones disponibles según indicación médica. Consultar variedad.",
    planes: [
      {
        name: "Small", cantidad: "30", unidad: "ml / mes",
        features: ["Evaluación inicial sin cargo","Gestión REPROCANN incluida","Entrega en todo el país","Etiquetado con concentración exacta"],
        waText: "Hola, me interesa el plan Small de aceites en Flora 🌿",
      },
      {
        name: "Medium", cantidad: "60", unidad: "ml / mes",
        features: ["Evaluación inicial sin cargo","Gestión REPROCANN incluida","Entrega en todo el país","Etiquetado con concentración exacta","Selección de concentración"],
        waText: "Hola, me interesa el plan Medium de aceites en Flora 🌿",
      },
      {
        name: "Large", cantidad: "90", unidad: "ml / mes",
        features: ["Evaluación inicial sin cargo","Gestión REPROCANN incluida","Entrega en todo el país","Etiquetado con concentración exacta","Selección de concentración","Seguimiento médico incluido"],
        waText: "Hola, me interesa el plan Large de aceites en Flora 🌿",
      },
      {
        name: "Extra Large", cantidad: "120", unidad: "ml / mes",
        features: ["Evaluación inicial sin cargo","Gestión REPROCANN incluida","Entrega en todo el país","Etiquetado con concentración exacta","Selección de concentración","Seguimiento médico prioritario"],
        waText: "Hola, me interesa el plan Extra Large de aceites en Flora 🌿",
      },
    ],
  },
  cremas: {
    label: "Cremas",
    desc: "Formulaciones tópicas para dolor localizado, inflamación muscular o articular. Sin efecto sistémico.",
    detalle: "Para uso externo. No requiere REPROCANN. Consultar disponibilidad.",
    planes: [
      {
        name: "Small", cantidad: "1", unidad: "tubo / mes",
        features: ["Evaluación inicial sin cargo","Entrega en todo el país","Formulación antiinflamatoria","Uso externo sin restricción"],
        waText: "Hola, me interesa el plan Small de cremas en Flora 🌿",
      },
      {
        name: "Medium", cantidad: "2", unidad: "tubos / mes",
        features: ["Evaluación inicial sin cargo","Entrega en todo el país","Formulación antiinflamatoria","Uso externo sin restricción","Selección de fórmula"],
        waText: "Hola, me interesa el plan Medium de cremas en Flora 🌿",
      },
      {
        name: "Large", cantidad: "3", unidad: "tubos / mes",
        features: ["Evaluación inicial sin cargo","Entrega en todo el país","Formulación antiinflamatoria","Uso externo sin restricción","Selección de fórmula","Seguimiento médico incluido"],
        waText: "Hola, me interesa el plan Large de cremas en Flora 🌿",
      },
      {
        name: "Extra Large", cantidad: "4", unidad: "tubos / mes",
        features: ["Evaluación inicial sin cargo","Entrega en todo el país","Formulación antiinflamatoria","Uso externo sin restricción","Selección de fórmula","Seguimiento médico prioritario"],
        waText: "Hola, me interesa el plan Extra Large de cremas en Flora 🌿",
      },
    ],
  },
};

const KEYS: CatKey[] = ["flores", "aceites", "cremas"];

export function Productos() {
  const [activo, setActivo] = useState<CatKey>("flores");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const cat = CATEGORIAS[activo];

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
            Adaptable
            <br />
            <em className="text-green-accent">a tus hábitos.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-redhat text-sm text-white/40 max-w-xs leading-relaxed"
          >
            Sin contratos ni permanencia mínima. Evaluación médica inicial sin cargo en todos los planes.
          </motion.p>
        </div>

        {/* Selector triple */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-2 mb-10"
        >
          {KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setActivo(key)}
              className={cn(
                "font-redhat font-semibold text-sm px-6 py-3 rounded-full transition-all duration-250",
                activo === key
                  ? "bg-green-accent text-green-dark"
                  : "border border-white/15 text-white/50 hover:border-white/35 hover:text-white/80"
              )}
            >
              {CATEGORIAS[key].label}
            </button>
          ))}
        </motion.div>

        {/* Descripción del producto seleccionado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activo + "-desc"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <p className="font-redhat text-white/55 text-sm max-w-xl leading-relaxed">
              {cat.desc}
              <span className="text-white/30"> — {cat.detalle}</span>
            </p>
          </motion.div>
        </AnimatePresence>

        {/* 4 planes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activo + "-planes"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {cat.planes.map((p) => (
              <div
                key={p.name}
                className="border border-white/10 rounded-2xl p-7 flex flex-col hover:border-green-accent/40 hover:bg-white/4 transition-all duration-300 group"
              >
                {/* Nombre + cantidad */}
                <div className="mb-6">
                  <p className="section-tag text-green-accent mb-2">{p.name}</p>
                  <div className="flex items-end gap-1.5 leading-none">
                    <span
                      className="font-noodle text-cream"
                      style={{ fontSize: "clamp(2.8rem, 5.5vw, 4rem)" }}
                    >
                      {p.cantidad}
                    </span>
                    <span className="font-redhat text-white/35 text-sm mb-1">{p.unidad}</span>
                  </div>
                </div>

                <div className="h-px bg-white/8 mb-5" />

                {/* Features */}
                <ul className="flex-1 space-y-2 mb-7">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="text-green-accent text-xs leading-none mt-1 flex-shrink-0">✦</span>
                      <span className="font-redhat text-xs text-white/50 leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={waLink(p.waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-redhat font-semibold text-xs py-3 rounded-full transition-all duration-200 bg-green-accent/10 text-green-accent border border-green-accent/20 group-hover:bg-green-accent group-hover:text-green-dark group-hover:border-green-accent"
                >
                  Quiero este plan →
                </Link>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-redhat text-xs text-white/20 mt-8 text-center"
        >
          Precio consultado por WhatsApp. Sin precios en la web porque el acceso es como socio, no como cliente.
        </motion.p>
      </div>
    </section>
  );
}
