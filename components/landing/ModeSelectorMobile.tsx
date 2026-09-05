"use client";

import Link from "next/link";

export default function ModeSelectorMobile() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden md:hidden">
      <Link
        href="/essencial"
        className="group relative flex flex-1 flex-col justify-center overflow-hidden bg-[#E9EEF2] text-[#1B2733] active:bg-[#DFE6EC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2733] focus-visible:ring-inset"
        style={{
          backgroundImage:
            "linear-gradient(#C7D3DB 1px, transparent 1px), linear-gradient(90deg, #C7D3DB 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
        }}
      >
        <div className="relative z-10 flex flex-col items-start px-6 py-4">
          <p className="font-sf text-2xl tracking-wider">Essencial</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#3E4C59] font-sfRegular">
            Um portfólio direto ao ponto, com uma visão geral do meu trabalho
            e experiência.
          </p>
          <span className="mt-4 border-b border-[#1B2733] pb-1 text-sm">
            Entrar
          </span>
        </div>
      </Link>

      <Link
        href="/explorar"
        className="group relative -mt-2 flex flex-1 flex-col justify-center bg-[#14161B] text-[#E7E9E4] active:bg-[#1C1F26] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7FFFC4] focus-visible:ring-inset"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="relative z-10 flex flex-col items-start px-6 py-4">
          <p className="text-2xl text-[#FFB86B] tracking-wider font-sf">
            Explorar
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#9AA1AC] font-sfRegular">
            Navegue pelo meu trabalho com mais detalhes, em uma página
            especial.
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm text-[#7FFFC4]">
            <span>&gt; entrar</span>
            <span
              className="h-4 w-2 animate-blink bg-[#7FFFC4]"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </div>
  );
}