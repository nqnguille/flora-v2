import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://flora.ar"),
  title: { default: "Flora — Cultivamos Conciencia", template: "%s | Flora" },
  description: "Club de cultivo medicinal. Acceso legal al cannabis medicinal bajo Ley 27.350. Trazabilidad completa, acompañamiento médico y entrega en todo el país.",
  keywords: ["cannabis medicinal argentina","ley 27350","REPROCANN","club de cultivo","cannabis terapéutico"],
  openGraph: {
    type: "website", locale: "es_AR", url: "https://flora.ar", siteName: "Flora",
    title: "Flora — Cultivamos Conciencia",
    description: "Club de cultivo medicinal. Acceso legal bajo Ley 27.350.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Flora" }],
  },
  twitter: { card: "summary_large_image", title: "Flora — Cultivamos Conciencia", images: ["/og-image.jpg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Organization",
          name: "Flora", url: "https://flora.ar",
          description: "Club de cultivo medicinal. Ley 27.350.",
          sameAs: ["https://instagram.com/flora.cultivamosconciencia"],
        })}} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
