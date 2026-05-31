"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-cream border-b border-green-dark/10" : "bg-transparent"
    )}>
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-garamond text-xl font-semibold text-green-dark tracking-tight">
          Flora
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {[["/#membresias","Membresías"],["/#como-funciona","Cómo funciona"],["/blog","Blog"]].map(([h,l]) => (
            <Link key={h} href={h}
              className="font-jakarta text-xs font-medium tracking-wide text-green-dark/50 hover:text-green-dark transition-colors uppercase">
              {l}
            </Link>
          ))}
        </div>

        <Link href="/#contacto"
          className="hidden md:inline-flex font-jakarta text-xs font-bold tracking-wide uppercase bg-green-dark text-cream px-5 py-2.5 rounded-full hover:bg-green-mid transition-colors">
          Asociarme
        </Link>

        {/* Mobile */}
        <button className="md:hidden font-jakarta text-xs font-bold text-green-dark uppercase tracking-wide"
          onClick={() => setOpen(!open)}>
          {open ? "cerrar" : "menú"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-t border-green-dark/10 px-6 py-5 flex flex-col gap-4">
          {[["/#membresias","Membresías"],["/#como-funciona","Cómo funciona"],["/blog","Blog"],["/asociate","Asociate"]].map(([h,l]) => (
            <Link key={h} href={h}
              className="font-jakarta text-sm text-green-dark/70 hover:text-green-dark"
              onClick={() => setOpen(false)}>{l}</Link>
          ))}
          <Link href="/#contacto"
            className="mt-2 font-jakarta text-xs font-bold uppercase bg-green-dark text-cream text-center py-3 rounded-full"
            onClick={() => setOpen(false)}>
            Asociarme
          </Link>
        </div>
      )}
    </header>
  );
}
