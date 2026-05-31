import type { Metadata } from "next";
import Link from "next/link";
import { MEMBERSHIPS, FAQ, waLink, WA_LINK } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Asociate — Flora",
  description: "Cuatro planes de acceso legal al cannabis medicinal bajo Ley 27.350. Evaluación inicial sin cargo. Envío nacional.",
};

export default function AsociatePage() {
  return (
    <div className="pt-14">

      {/* Header */}
      <section className="bg-green-dark py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <span className="section-tag text-green-accent mb-5 block">Membresías</span>
          <h1 className="title-brutal text-cream mb-6 max-w-3xl">
            Adaptable<br />
            <em className="text-green-accent">a tus hábitos.</em>
          </h1>
          <p className="font-jakarta text-white/45 text-base max-w-md leading-relaxed">
            Cuatro planes según tu consumo mensual. Acceso legal, trazabilidad completa y acompañamiento médico. Precio consultado por WhatsApp.
          </p>
        </div>
      </section>

      {/* Plans grid */}
      <section className="bg-green-dark pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
            {MEMBERSHIPS.map((m) => (
              <div key={m.name}
                className="bg-green-dark p-8 flex flex-col hover:bg-green-mid transition-colors duration-300 group">
                <div className="mb-8">
                  <p className="section-tag text-green-accent mb-3">{m.name}</p>
                  <span className="font-garamond font-bold text-cream leading-none"
                    style={{ fontSize: "clamp(3rem,6vw,4.5rem)" }}>
                    {m.grams}
                    <span className="text-2xl font-normal text-white/30 ml-1">g</span>
                  </span>
                  <p className="font-jakarta text-xs text-white/30 mt-1.5">{m.description}</p>
                </div>
                <div className="h-px bg-white/10 mb-6" />
                <ul className="flex-1 space-y-2.5 mb-8">
                  {m.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="text-green-accent text-sm leading-none mt-0.5">✦</span>
                      <span className="font-jakarta text-xs text-white/45 leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link href={waLink(m.waText)} target="_blank" rel="noopener noreferrer"
                  className="block text-center font-jakarta font-bold text-xs uppercase tracking-wider border border-white/15 text-white/60 py-3 rounded-full hover:bg-green-accent hover:text-green-dark hover:border-green-accent transition-all duration-200">
                  Consultar precio
                </Link>
              </div>
            ))}
          </div>
          <p className="font-jakarta text-xs text-white/25 mt-8 text-center">
            Podés cambiar de plan en cualquier momento. Sin contratos ni permanencia mínima.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="border-b border-green-dark/15 pb-10 mb-2">
            <span className="section-tag text-green-dark/40 mb-4 block">FAQ</span>
            <h2 className="title-section text-green-dark">Preguntas frecuentes.</h2>
          </div>

          <Accordion className="divide-y divide-green-dark/10">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="font-jakarta font-semibold text-green-dark text-sm text-left hover:text-green-accent">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-jakarta text-green-dark/55 text-sm leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="border-t border-green-dark/10 pt-10 text-center">
            <Link href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-jakarta text-sm font-bold bg-green-dark text-cream px-6 py-3 rounded-full hover:bg-green-mid transition-colors">
              ¿Otra pregunta? WhatsApp →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
