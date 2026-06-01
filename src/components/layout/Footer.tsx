import Link from "next/link";

const navLinks: [string, string][] = [
  ["/#que-es", "Qué es Flora"],
  ["/#membresias", "Membresías"],
  ["/#como-funciona", "Cómo funciona"],
  ["/asociate", "Asociate"],
  ["/blog", "Blog"],
];

const legalLinks = ["Ley 27.350", "REPROCANN", "Privacidad", "Términos"];

export function Footer() {
  return (
    <footer className="section-cream border-t border-green-dark/12 py-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 justify-between mb-12">

          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="font-noodle text-3xl text-green-dark block mb-1 leading-none">
              Flora
            </Link>
            <p className="font-redhat italic text-green-dark/35 text-sm mb-5">Cultivamos Conciencia</p>
            <a href="https://instagram.com/flora.cultivamosconciencia"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-redhat text-xs text-green-dark/45 hover:text-green-dark transition-colors">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              @flora.cultivamosconciencia
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="section-tag text-green-dark/25 mb-4">Sitio</p>
              {navLinks.map(([h, l]) => (
                <Link key={h} href={h}
                  className="block font-redhat text-xs text-green-dark/50 hover:text-green-dark mb-2 transition-colors">
                  {l}
                </Link>
              ))}
            </div>
            <div>
              <p className="section-tag text-green-dark/25 mb-4">Legal</p>
              {legalLinks.map((l) => (
                <Link key={l} href="#"
                  className="block font-redhat text-xs text-green-dark/50 hover:text-green-dark mb-2 transition-colors">
                  {l}
                </Link>
              ))}
            </div>
            <div>
              <p className="section-tag text-green-dark/25 mb-4">Contacto</p>
              <p className="font-redhat text-xs text-green-dark/50 mb-2">hola@flora.ar</p>
              <p className="font-redhat text-xs text-green-dark/50 mb-2">Argentina</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-dark/10 pt-6 flex flex-col gap-2">
          <p className="font-redhat text-xs text-green-dark/30 leading-relaxed max-w-2xl">
            El acceso al cannabis medicinal en Flora se realiza bajo el marco de la Ley Nacional 27.350.
            No reemplaza el diagnóstico ni el tratamiento médico.
          </p>
          <p className="font-redhat text-xs text-green-dark/20">
            © {new Date().getFullYear()} Flora · flora.ar
          </p>
        </div>
      </div>
    </footer>
  );
}
