"use client";

import { motion } from "framer-motion";
import { Scale, Microscope, Stethoscope, Leaf, Package, HandHeart } from "lucide-react";

const features = [
  { icon: Scale,       title: "100% legal",              desc: "Asociación Civil con REPROCANN activo. Cada socio tiene su registro en el Ministerio de Salud." },
  { icon: Microscope,  title: "Trazabilidad de lote",    desc: "Cada entrega incluye el perfil de cannabinoides. Sabés exactamente qué recibís." },
  { icon: Stethoscope, title: "Evaluación inicial",      desc: "Un profesional de salud evalúa tu caso sin cargo. Acompañamiento real, no formulario." },
  { icon: Leaf,        title: "Genéticas seleccionadas", desc: "Cultivamos lo que funciona terapéuticamente. No lo que hay, sino lo que corresponde." },
  { icon: Package,     title: "Envío a todo el país",    desc: "Andreani, con número de seguimiento. Discreto. Documentado. Sin zona gris." },
  { icon: HandHeart,   title: "Precio de comunidad",     desc: "USD 9-12/g. Sin especulación. El precio refleja el costo real del cultivo." },
];

export function Features() {
  return (
    <section id="que-es" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-tag text-flora-accent mb-4 block">Qué es Flora</span>
          <h2 className="font-garamond font-bold text-white text-5xl sm:text-6xl leading-tight max-w-2xl mb-4">
            Un club de cultivo.
            <br />
            <em className="text-flora-accent">Nada más. Nada menos.</em>
          </h2>
          <p className="font-jakarta text-white/45 text-lg max-w-xl leading-relaxed">
            Somos una Asociación Civil con sede en Neuquén. Cultivamos cannabis
            medicinal para nuestros socios con el mismo rigor con el que tratan
            su salud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl glass-accent flex items-center justify-center mb-5">
                <f.icon size={18} className="text-flora-accent" />
              </div>
              <h3 className="font-garamond font-semibold text-white text-xl mb-2">{f.title}</h3>
              <p className="font-jakarta text-white/45 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
