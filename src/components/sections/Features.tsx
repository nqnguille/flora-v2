"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { n: "01", title: "Acceso legal",         desc: "Asociación Civil inscripta. Operamos bajo Ley 27.350 con REPROCANN activo. Cada socio tiene su registro oficial." },
  { n: "02", title: "Trazabilidad de lote", desc: "Cada entrega incluye el perfil de cannabinoides y terpenos. Sabés qué recibís antes de recibirlo." },
  { n: "03", title: "Evaluación inicial",   desc: "Un profesional revisa tu caso sin cargo. Acompañamiento real, no un formulario genérico." },
  { n: "04", title: "Genéticas propias",    desc: "Cultivamos variedades seleccionadas por perfil terapéutico. No lo que hay — lo que funciona." },
  { n: "05", title: "Llegamos donde estés", desc: "Entrega discreta a cualquier punto del país. Con número de seguimiento y documentación legal en cada paquete." },
  { n: "06", title: "Precio de comunidad",  desc: "USD 9 a 12 por gramo. El precio refleja el costo real del cultivo, no la especulación del mercado informal." },
];

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="que-es" className="section-cream py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-green-dark/15">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="title-section text-green-dark max-w-lg"
          >
            Un club de cultivo.
            <br />
            <em>Nada más. Nada menos.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-jakarta text-sm text-green-dark/50 max-w-xs leading-relaxed md:text-right"
          >
            Una Asociación Civil inscripta en Argentina. Cultivamos cannabis medicinal con el mismo rigor con el que tratan su salud quienes confían en nosotros.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {features.map((f, i) => (
            <motion.div
              key={f.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="border-b border-r-0 md:border-r border-green-dark/10 py-8 pr-0 md:pr-10 group"
              style={{ borderRight: (i + 1) % 3 === 0 ? "none" : undefined }}
            >
              <span className="section-tag text-green-dark/25 block mb-5">{f.n}</span>
              <h3 className="font-garamond font-semibold text-green-dark text-2xl mb-3 group-hover:text-green-accent transition-colors">
                {f.title}
              </h3>
              <p className="font-jakarta text-sm text-green-dark/55 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
