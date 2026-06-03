"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setDark(stored === "dark");
      return;
    }
    setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    
    <header className="fixed top-1 left-0 right-0 z-50 px-4 pt-3">
      {/* ── MAIN BAR ── */}
      <div className="mx-auto max-w-4xl">
        <div
          className={`flex items-center justify-between rounded-[20px] border px-4 py-2 transition-all duration-100  ${
            scrolled
              ? "border-white/15 bg-black/60 shadow-2xl"
              : "border-white/10 bg-black/30 shadow-none"
          }`}
        >
          {/* LOGO */}
          <span className="font-serif text-[17px] font-bold tracking-tight text-white">
            Jose Velasco
            <span className="text-rose-500">.</span>
          </span>

          {/* DESKTOP LINKS */}
          <nav className="hidden items-center gap-0.5 sm:flex">
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="rounded-xl px-[14px] py-[7px] text-[13px] font-normal tracking-[0.01em] text-white/60 transition-all hover:bg-white/[0.07] hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            {/* DARK MODE TOGGLE */}
            <button
              onClick={() => setDark((p) => !p)}
              aria-label="Cambiar tema"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.05] text-white/80 transition-all hover:bg-white/10 hover:border-white/20"
            >
              {dark ? (
                /* Sun */
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4"/>
                  <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41"/>
                </svg>
              ) : (
                /* Moon */
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
              )}
            </button>

            {/* CTA — desktop only */}
            <a
              href="#contacto"
              className="hidden rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 px-[18px] py-2 text-[13px] font-medium tracking-[0.02em] text-white transition-all hover:scale-[1.03] hover:opacity-90 sm:block"
            >
              Contacto
            </a>

            {/* HAMBURGER — mobile only */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.05] text-white/80 transition-all hover:bg-white/10 sm:hidden"
            >
              {menuOpen ? (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN ── */}
        <div
          aria-hidden={!menuOpen}
          className={`overflow-hidden transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] sm:hidden ${
            menuOpen ? "mt-2 max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[18px] border border-white/10 bg-black/80 p-2.5 backdrop-blur-2xl">
            <div className="flex flex-col">
              {navLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-[14px] tracking-[0.01em] text-white/70 transition-all hover:bg-white/[0.07] hover:text-white"
                >
                  {label}
                </a>
              ))}

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 px-4 py-3 text-center text-[14px] font-medium text-white transition-transform hover:scale-[1.01]"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}