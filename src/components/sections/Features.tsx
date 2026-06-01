"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BotanicalLeaf } from "@/components/ui/BotanicalLeaf";

const features = [
  { n: "01", title: "Acceso legal",          desc: "Asociación Civil inscripta. Operamos bajo Ley 27.350 con REPROCANN activo. Cada socio tiene su registro oficial." },
  { n: "02", title: "Trazabilidad de lote",  desc: "Cada entrega incluye el perfil de cannabinoides y terpenos. Sabés qué recibís antes de recibirlo." },
  { n: "03", title: "Evaluación inicial",    desc: "Un profesional revisa tu caso sin cargo. Acompañamiento real, no un formulario genérico." },
  { n: "04", title: "Genéticas propias",     desc: "Cultivamos variedades seleccionadas por perfil terapéutico. No lo que hay — lo que funciona." },
  { n: "05", title: "Llegamos donde estés",  desc: "Entrega discreta a cualquier punto del país. Con número de seguimiento y documentación legal." },
  { n: "06", title: "Precio de comunidad",   desc: "USD 9 a 12 por gramo. El precio refleja el costo real del cultivo, sin especulación." },
];

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="que-es" className="section-cream botanical-texture py-24 px-6 md:px-10 relative overflow-hidden">
      {/* Hoja decorativa */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute -right-12 top-12 pointer-events-none hidden lg:block"
      >
        <BotanicalLeaf className="w-64 h-auto" color="#2D4239" opacity={0.1} />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-green-dark/15">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="title-section text-green-dark"
          >
            Un club de cultivo.
            <br />
            <em>Nada más. Nada menos.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-redhat text-sm text-green-dark/50 max-w-xs leading-relaxed md:text-right"
          >
            Cultivamos cannabis medicinal con el mismo rigor con el que tratás cualquier aspecto de tu salud.
          </motion.p>
        </div>

        {/* Grid — border logic via CSS nth-child */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`py-9 pr-8 border-b border-green-dark/10 group
                ${i % 3 !== 2 ? "lg:border-r lg:border-green-dark/10" : ""}
                ${i % 2 !== 1 ? "md:border-r md:border-green-dark/10 lg:border-r-0" : ""}
                ${i % 2 !== 1 && i % 3 !== 2 ? "lg:border-r lg:border-green-dark/10" : ""}
              `}
            >
              <span className="section-tag text-green-dark/20 block mb-4">{f.n}</span>
              <h3 className="font-display font-bold text-green-dark text-xl mb-3 group-hover:text-green-accent transition-colors duration-200">
                {f.title}
              </h3>
              <p className="font-redhat text-sm text-green-dark/55 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
