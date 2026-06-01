"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#membresias", label: "Membresías" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/blog", label: "Blog" },
];

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
      scrolled
        ? "bg-green-dark/95 backdrop-blur-sm border-b border-white/8 shadow-sm"
        : "bg-transparent"
    )}>
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

        <Link href="/" className="font-noodle text-2xl text-cream tracking-wide leading-none">
          Flora
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="font-redhat text-xs font-medium tracking-widest uppercase text-cream/55 hover:text-cream transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/#contacto"
          className="hidden md:inline-flex font-redhat text-xs font-bold tracking-wide uppercase bg-green-accent text-green-dark px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
          Asociarme
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-redhat text-xs font-bold text-cream uppercase tracking-wide"
          onClick={() => setOpen(!open)}>
          {open ? "cerrar" : "menú"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-green-dark border-t border-white/8 px-6 py-5 flex flex-col gap-4">
          {[...links, { href: "/asociate", label: "Asociate" }].map((l) => (
            <Link key={l.href} href={l.href}
              className="font-redhat text-sm text-cream/70 hover:text-cream"
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/#contacto"
            className="mt-1 font-redhat text-xs font-bold uppercase bg-green-accent text-green-dark text-center py-3 rounded-full"
            onClick={() => setOpen(false)}>
            Asociarme
          </Link>
        </div>
      )}
    </header>
  );
}
