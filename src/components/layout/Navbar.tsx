"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FloraLogo } from "@/components/ui/FloraLogo";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#que-es", label: "Qué es Flora" },
  { href: "/#membresias", label: "Membresías" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b border-white/8" : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <FloraLogo className="w-7 h-7" />
          <span className="font-garamond text-xl font-semibold text-white tracking-wide">
            Flora
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="font-jakarta text-sm text-white/50 hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/#contacto"
            className="font-jakarta text-sm font-semibold text-flora-base bg-flora-accent hover:opacity-90 px-5 py-2 rounded-full transition">
            Asociarme
          </Link>
        </div>

        <button className="md:hidden text-white/60 hover:text-white p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-white/8 px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="font-jakarta text-sm text-white/70 hover:text-white py-1"
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/#contacto"
            className="mt-1 text-center font-jakarta text-sm font-bold text-flora-base bg-flora-accent rounded-full py-2.5"
            onClick={() => setOpen(false)}>
            Asociarme
          </Link>
        </div>
      )}
    </header>
  );
}
