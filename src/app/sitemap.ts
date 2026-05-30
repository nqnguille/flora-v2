import type { MetadataRoute } from "next";
const base = "https://flora.ar";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/asociate`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog/terpenos-que-son-y-por-que-importan`, lastModified: new Date("2026-05-20"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/blog/reprocann-guia-completa-2026`, lastModified: new Date("2026-05-10"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/blog/uso-responsable-cannabis-medicinal`, lastModified: new Date("2026-04-28"), changeFrequency: "yearly", priority: 0.6 },
  ];
}
