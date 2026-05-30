import Link from "next/link";
import { FloraLogo } from "@/components/ui/FloraLogo";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 justify-between mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <FloraLogo className="w-6 h-6" />
              <span className="font-garamond text-lg font-semibold text-white">Flora</span>
            </Link>
            <p className="font-garamond italic text-white/30 text-sm mb-4">Cultivamos Conciencia</p>
            <a href="https://instagram.com/flora.cultivamosconciencia" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-jakarta text-xs text-white/40 hover:text-flora-accent transition-colors">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @flora.cultivamosconciencia
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="section-tag text-white/25 mb-3">Sitio</p>
              {[["/#que-es","Qué es Flora"],["/#membresias","Membresías"],["/#como-funciona","Cómo funciona"],["/asociate","Asociate"],["/blog","Blog"]].map(([h,l]) => (
                <Link key={h} href={h} className="block font-jakarta text-white/45 hover:text-white transition-colors mb-1.5">{l}</Link>
              ))}
            </div>
            <div>
              <p className="section-tag text-white/25 mb-3">Legal</p>
              {[["#","Ley 27.350"],["#","REPROCANN"],["#","Privacidad"],["#","Términos"]].map(([h,l]) => (
                <Link key={l} href={h} className="block font-jakarta text-white/45 hover:text-white transition-colors mb-1.5">{l}</Link>
              ))}
            </div>
            <div>
              <p className="section-tag text-white/25 mb-3">Contacto</p>
              <p className="font-jakarta text-white/45 text-xs mb-1">hola@flora.ar</p>
              <p className="font-jakarta text-white/45 text-xs mb-1">Neuquén, Argentina</p>
              <p className="font-jakarta text-white/45 text-xs">Asoc. Civil inscripta</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col gap-2">
          <p className="font-jakarta text-xs text-white/20 leading-relaxed max-w-2xl">
            El acceso al cannabis medicinal en Flora ONG se realiza bajo el marco de la Ley Nacional 27.350.
            No reemplaza el diagnóstico ni el tratamiento médico.
          </p>
          <p className="font-jakarta text-xs text-white/15">
            © {new Date().getFullYear()} Flora · flora.ar
          </p>
        </div>
      </div>
    </footer>
  );
}
