import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-cream border-t border-green-dark/12 py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-between mb-10">
          <div>
            <Link href="/" className="font-garamond text-xl font-semibold text-green-dark block mb-1">Flora</Link>
            <p className="font-garamond italic text-green-dark/35 text-sm">Cultivamos Conciencia</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="section-tag text-green-dark/25 mb-3">Sitio</p>
              {[["/#que-es","Qué es Flora"],["/#membresias","Membresías"],["/#como-funciona","Cómo funciona"],["/asociate","Asociate"],["/blog","Blog"]].map(([h,l]) => (
                <Link key={h} href={h} className="block font-jakarta text-xs text-green-dark/45 hover:text-green-dark mb-1.5 transition-colors">{l}</Link>
              ))}
            </div>
            <div>
              <p className="section-tag text-green-dark/25 mb-3">Legal</p>
              {["Ley 27.350","REPROCANN","Privacidad","Términos"].map(l => (
                <Link key={l} href="#" className="block font-jakarta text-xs text-green-dark/45 hover:text-green-dark mb-1.5 transition-colors">{l}</Link>
              ))}
            </div>
            <div>
              <p className="section-tag text-green-dark/25 mb-3">Contacto</p>
              <p className="font-jakarta text-xs text-green-dark/45 mb-1">hola@flora.ar</p>
              <p className="font-jakarta text-xs text-green-dark/45 mb-1">Argentina</p>
              <a href="https://instagram.com/flora.cultivamosconciencia" target="_blank" rel="noopener noreferrer"
                className="font-jakarta text-xs text-green-dark/45 hover:text-green-dark transition-colors">
                @flora.cultivamosconciencia
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-dark/10 pt-6 flex flex-col gap-2">
          <p className="font-jakarta text-xs text-green-dark/30 leading-relaxed max-w-2xl">
            El acceso al cannabis medicinal en Flora se realiza bajo el marco de la Ley Nacional 27.350.
            No reemplaza el diagnóstico ni el tratamiento médico.
          </p>
          <p className="font-jakarta text-xs text-green-dark/20">
            © {new Date().getFullYear()} Flora · flora.ar
          </p>
        </div>
      </div>
    </footer>
  );
}
