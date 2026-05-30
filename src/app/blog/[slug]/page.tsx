import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props { params: { slug: string } }

const posts: Record<string, { title: string; category: string; readTime: string; body: string[] }> = {
  "terpenos-que-son-y-por-que-importan": {
    title: "Terpenos: qué son y por qué determinan tu experiencia",
    category: "Ciencia", readTime: "6 min",
    body: [
      "Cuando elegís una variedad por su aroma, estás eligiendo su perfil de terpenos. No es intuición, es química.",
      "Los terpenos son compuestos aromáticos presentes en cientos de plantas. En el cannabis, trabajan junto al THC y el CBD para modular efectos — lo que se conoce como efecto entourage. Una variedad rica en mirceno tiende a ser más sedante. El limoneno se asocia a estados más activos. El beta-cariofileno tiene propiedades antiinflamatorias propias.",
      "Esto explica por qué dos variedades con la misma concentración de THC pueden producir experiencias completamente distintas. La diferencia no está en el porcentaje — está en el perfil completo.",
      "En Flora, el informe de cada lote incluye los terpenos principales además de los cannabinoides. No porque sea un dato técnico interesante, sino porque es la información que necesitás para elegir bien.",
    ],
  },
  "reprocann-guia-completa-2026": {
    title: "Cómo tramitar el REPROCANN en 2026: paso a paso",
    category: "Trámites", readTime: "5 min",
    body: [
      "El REPROCANN es el Registro del Programa de Cannabis del Ministerio de Salud. El trámite es online, gratuito y más rápido de lo que parece.",
      "Quiénes pueden solicitarlo: cualquier persona con una condición reconocida en el marco de la Ley 27.350. La lista incluye dolor crónico, epilepsia refractaria, ansiedad, insomnio y cuidados paliativos. Un médico habilitado debe certificar el diagnóstico.",
      "Qué necesitás: DNI vigente, historia clínica o certificado médico con diagnóstico, y la firma digital de un profesional matriculado. El médico puede ser tu médico de cabecera o, si no encontrás uno que firme, nuestro equipo te orienta.",
      "El proceso es completamente online vía el portal del Ministerio de Salud. En la mayoría de los casos la resolución llega en 7 a 15 días hábiles.",
      "En Flora acompañamos a todos nuestros socios en este proceso sin cargo adicional.",
    ],
  },
  "uso-responsable-cannabis-medicinal": {
    title: "Uso responsable: lo que nadie te explica",
    category: "Práctica", readTime: "7 min",
    body: [
      "Responsable no significa cauteloso hasta la inutilidad. Significa hacer las cosas bien para que funcionen.",
      "El primer principio es la titulación. Empezar con la dosis mínima efectiva y ajustar gradualmente. No porque el cannabis sea peligroso, sino porque cada organismo responde distinto y encontrar tu dosis tarda tiempo.",
      "El segundo es la consistencia. El cannabis medicinal funciona mejor con un patrón regular. Si lo usás para dormir, usalo a la misma hora. Si es para dolor crónico, el protocolo importa más que la dosis puntual.",
      "El tercero es el registro. Anotar qué variedad, cuánto, cuándo y qué efecto tuvo. En dos semanas tenés información real sobre lo que funciona para vos. Sin eso, estás adivinando.",
      "El cuarto: la interacción con otros fármacos. Si tomás medicación de base, revisarlo con un profesional no es optativo. Hay interacciones conocidas con anticoagulantes, benzodiacepinas y algunos antidepresivos.",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.slug];
  if (!post) return { title: "Artículo | Flora" };
  return {
    title: `${post.title} | Flora`,
    description: post.body[0],
    openGraph: { title: post.title, description: post.body[0], url: `https://flora.ar/blog/${params.slug}` },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts[params.slug];
  return (
    <div className="pt-16 relative z-10">
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/35 hover:text-white font-jakarta text-sm mb-8 transition-colors">
            <ArrowLeft size={14} /> Blog
          </Link>
          {post ? (
            <>
              <span className="section-tag text-flora-accent mb-4 block">{post.category} · {post.readTime}</span>
              <h1 className="font-garamond font-bold text-white text-5xl sm:text-6xl leading-tight mb-12">{post.title}</h1>
              <div className="glass rounded-3xl p-8 sm:p-12 space-y-5">
                {post.body.map((p, i) => (
                  <p key={i} className={`font-jakarta leading-relaxed ${i === 0 ? "text-lg text-white/90 font-medium" : "text-base text-white/50"}`}>
                    {p}
                  </p>
                ))}
                <div className="pt-6 mt-2 border-t border-white/8">
                  <p className="font-jakarta text-xs text-white/30">
                    ¿Tenés dudas?{" "}
                    <Link href="/#contacto" className="text-flora-accent hover:underline">Escribinos</Link>.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="glass rounded-3xl p-10 text-center">
              <p className="font-jakarta text-white/40">Artículo en preparación.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "terpenos-que-son-y-por-que-importan" },
    { slug: "reprocann-guia-completa-2026" },
    { slug: "uso-responsable-cannabis-medicinal" },
  ];
}
