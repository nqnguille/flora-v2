export const WA_NUMBER = "5492994000000";
export const WA_BASE   = `https://wa.me/${WA_NUMBER}`;
export const WA_LINK   = `${WA_BASE}?text=${encodeURIComponent("Hola, me interesa asociarme a Flora 🌿")}`;
export const waLink    = (t: string) => `${WA_BASE}?text=${encodeURIComponent(t)}`;

export const MEMBERSHIPS = [
  {
    name: "Esencial", grams: 10, priceUSD: 100, pricePerGram: "10",
    description: "Para quienes empiezan o tienen requerimientos moderados.",
    features: ["10g de flor medicinal por mes","Evaluación inicial sin cargo","Gestión REPROCANN incluida","Envío nacional Andreani","Perfil de cannabinoides del lote"],
    featured: false,
    waText: "Hola, me interesa la Membresía Esencial de Flora 🌿",
  },
  {
    name: "Plus", grams: 20, priceUSD: 190, pricePerGram: "9.5",
    description: "La más elegida. Mejor precio por gramo y más opciones.",
    features: ["20g de flor medicinal por mes","Evaluación inicial sin cargo","Gestión REPROCANN incluida","Envío nacional Andreani","Perfil de cannabinoides del lote","Selección de variedad disponible"],
    featured: true,
    waText: "Hola, me interesa la Membresía Plus de Flora 🌿",
  },
  {
    name: "Completa", grams: 40, priceUSD: 360, pricePerGram: "9",
    description: "Para tratamientos continuos o requerimientos más altos.",
    features: ["40g de flor medicinal por mes","Evaluación inicial sin cargo","Gestión REPROCANN incluida","Envío nacional Andreani","Perfil de cannabinoides del lote","Selección de variedad disponible","Seguimiento médico prioritario"],
    featured: false,
    waText: "Hola, me interesa la Membresía Completa de Flora 🌿",
  },
];

export const FAQ = [
  { q: "¿Es legal acceder a través de Flora?", a: "Sí. Somos una Asociación Civil inscripta que opera bajo la Ley Nacional 27.350 y REPROCANN del Ministerio de Salud. Cada socio tiene su registro individual." },
  { q: "¿Qué es el REPROCANN y cómo lo tramito?", a: "REPROCANN es el Registro del Programa de Cannabis del Ministerio de Salud. El trámite es online, gratuito y lleva menos de una semana en la mayoría de los casos. Te acompañamos en cada paso sin cargo." },
  { q: "¿Necesito REPROCANN antes de asociarme?", a: "No. Podés iniciar sin tenerlo. Durante la evaluación inicial orientamos la gestión y en muchos casos lo resolvemos en la primera semana." },
  { q: "¿Cómo llega el pedido?", a: "Por Andreani a todo el país. Packaging sin identificación externa. Con número de seguimiento y documentación legal en cada envío." },
  { q: "¿Cómo garantizan la calidad?", a: "Cultivamos nosotros con genéticas seleccionadas por perfil terapéutico. Cada lote tiene su análisis de cannabinoides y terpenos principales. No hay intermediarios ni reventas." },
  { q: "¿Los precios son en dólares?", a: "El precio de referencia es USD para mantener estabilidad. El pago se coordina en pesos al tipo de cambio del día. Consultanos por medios de pago disponibles." },
  { q: "¿Puedo cambiar de plan o pausar?", a: "Sí. Sin contratos ni permanencia mínima. Avisanos con anticipación y coordinamos el siguiente ciclo sin problema." },
];

export const BLOG_POSTS = [
  { slug: "terpenos-que-son-y-por-que-importan", title: "Terpenos: qué son y por qué determinan tu experiencia", excerpt: "El aroma de una variedad no es marketing. Los terpenos modulan los efectos de manera concreta.", date: "2026-05-20", category: "Ciencia", readTime: "6 min" },
  { slug: "reprocann-guia-completa-2026",         title: "Cómo tramitar el REPROCANN en 2026: paso a paso",       excerpt: "Proceso online, gratuito y más rápido de lo que pensás. Todo lo que necesitás saber.",         date: "2026-05-10", category: "Trámites", readTime: "5 min" },
  { slug: "uso-responsable-cannabis-medicinal",   title: "Uso responsable: lo que nadie te explica",              excerpt: "Titulación, consistencia, registro. Tres prácticas que hacen la diferencia.",                  date: "2026-04-28", category: "Práctica", readTime: "7 min" },
];
