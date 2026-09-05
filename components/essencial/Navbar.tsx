"use client";

import { useState } from "react";
import { navLinks } from "./data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E2DD] bg-[#FAFAF8]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <a
          href="#topo"
          className="text-[15px] font-semibold tracking-tight text-[#16181B]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Flávio Gabriel
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-[#4A4C50] transition-colors hover:text-[#16181B]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-[14px] text-[#16181B] underline decoration-[#2F5D50] decoration-2 underline-offset-4"
          >
            Fale comigo
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4E2DD] text-[#16181B] md:hidden"
        >
          <span aria-hidden="true">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {isOpen ? (
        <nav
          id="menu-mobile"
          className="flex flex-col gap-1 border-t border-[#E4E2DD] px-6 py-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-2 text-[15px] text-[#16181B]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="py-2 text-[15px] font-medium text-[#2F5D50]"
          >
            Fale comigo
          </a>
        </nav>
      ) : null}
    </header>
  );
}
