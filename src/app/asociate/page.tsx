import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { MEMBERSHIPS, FAQ, waLink, WA_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Asociate — Flora",
  description: "Membresías de acceso legal al cannabis medicinal bajo Ley 27.350. Evaluación inicial sin cargo. Envío nacional.",
};

export default function AsociatePage() {
  return (
    <div className="pt-16 relative z-10">
      <section className="py-24 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-tag text-flora-accent mb-5 block">Membresías</span>
          <h1 className="font-garamond font-bold text-white text-6xl sm:text-7xl leading-tight mb-5">
            Asociate.
          </h1>
          <p className="font-jakarta text-white/45 text-lg max-w-lg mx-auto">
            Acceso legal, calidad verificada, precio de comunidad. Sin burocracia innecesaria.
          </p>
        </div>
      </section>

      <section className="pb-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MEMBERSHIPS.map((m) => (
              <div
                key={m.name}
                className={cn(
                  "relative rounded-3xl p-7 flex flex-col",
                  m.featured ? "glass-accent border border-flora-accent/25" : "glass"
                )}
              >
                {m.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-flora-accent text-flora-base font-jakarta font-bold text-[0.6rem] tracking-widest uppercase px-4 py-1 rounded-full">
                    Más elegida
                  </span>
                )}
                <h2 className="font-garamond font-semibold text-white text-2xl mb-1">{m.name}</h2>
                <p className="font-jakarta text-white/35 text-xs mb-5">{m.description}</p>
                <div className={cn("font-garamond text-5xl font-bold leading-none mb-1", m.featured ? "text-flora-accent" : "text-white")}>
                  <span className="text-2xl align-super font-semibold">USD </span>{m.priceUSD}
                </div>
                <p className="font-jakarta text-white/30 text-xs mb-6">{m.grams}g · ≈ USD {m.pricePerGram}/g</p>
                <div className="h-px bg-white/8 mb-5" />
                <ul className="flex-1 space-y-2.5 mb-6">
                  {m.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-flora-accent/20 border border-flora-accent/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <Check size={8} className="text-flora-accent" strokeWidth={3} />
                      </span>
                      <span className="font-jakarta text-white/50 text-xs leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link href={waLink(m.waText)} target="_blank" rel="noopener noreferrer"
                  className={cn(
                    "block text-center font-jakarta font-bold text-sm py-3 rounded-full transition-all",
                    m.featured ? "bg-flora-accent text-flora-base hover:opacity-90" : "glass text-white hover:glass-strong border border-white/10"
                  )}>
                  Empezar con {m.name}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center font-jakarta text-xs text-white/25 mt-6">
            Precios en USD referenciales. Pago coordinado en pesos al tipo de cambio del día.{" "}
            <Link href={WA_LINK} className="underline hover:text-flora-accent transition" target="_blank" rel="noopener noreferrer">Consultá →</Link>
          </p>
        </div>
      </section>

      <section className="pb-24 px-5 border-t border-white/8">
        <div className="max-w-2xl mx-auto pt-20">
          <div className="text-center mb-12">
            <span className="section-tag text-flora-accent mb-4 block">FAQ</span>
            <h2 className="font-garamond font-bold text-white text-5xl">Preguntas frecuentes.</h2>
          </div>
          <Accordion multiple={false} className="space-y-3">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}
                className="glass rounded-2xl px-5 overflow-hidden data-[state=open]:glass-accent">
                <AccordionTrigger className="font-jakarta font-semibold text-white/80 text-sm text-left py-4 hover:no-underline hover:text-white">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-jakarta text-white/50 text-sm leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-10">
            <Link href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-accent text-flora-accent font-jakarta font-semibold text-sm px-6 py-3 rounded-full hover:bg-flora-accent/15 transition-all border border-flora-accent/20">
              ¿Otra pregunta? Escribinos →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
