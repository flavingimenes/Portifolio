"use client";

import Link from "next/link";
import { useState } from "react";
import ModeSelectorMobile from "./ModeSelectorMobile";

type Mode = "conventional" | "explore" | null;

export default function ModeSelector() {
  const [active, setActive] = useState<Mode>(null);

  return (
    <>
      <ModeSelectorMobile />

      <div className="relative hidden h-screen w-full overflow-hidden md:flex">
        <Link
          href="/conventional"
          onMouseEnter={() => setActive("conventional")}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive("conventional")}
          onBlur={() => setActive(null)}
          className="group relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-[#E9EEF2] text-[#1B2733] transition-[flex-grow] duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2733] focus-visible:ring-offset-2"
          style={{
            flexGrow:
              active === "explore" ? 0.8 : active === "conventional" ? 1.0 : 1,
            backgroundImage:
              "linear-gradient(#C7D3DB 1px, transparent 1px), linear-gradient(90deg, #C7D3DB 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            clipPath: "polygon(0 0, 100% 0, 96% 100%, 0 100%)",
          }}
        >
          <div className="relative z-10 flex max-w-sm flex-col items-start px-8">
            <p className="font-sf text-4xl tracking-wider md:text-6xl">
              Essencial
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#3E4C59] font-sfRegular">
              Um portfólio direto ao ponto, com uma visão geral do meu trabalho
              e experiência.
            </p>
            <span className="mt-8 border-b border-[#1B2733] pb-1 text-sm">
              Entrar
            </span>
          </div>
        </Link>

        <Link
          href="/explore"
          onMouseEnter={() => setActive("explore")}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive("explore")}
          onBlur={() => setActive(null)}
          className="group relative flex flex-1 flex-col items-center justify-center bg-[#14161B] text-[#E7E9E4] transition-[flex-grow] duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7FFFC4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#14161B]"
          style={{
            flexGrow:
              active === "conventional" ? 0.8 : active === "explore" ? 1.0 : 1,
            clipPath: "polygon(4% 0, 100% 0, 100% 100%, 0 100%)",
            marginLeft: "-2vw",
          }}
        >
          <div className="relative z-10 flex max-w-sm flex-col items-start px-8">
            <p className="text-4xl text-[#FFB86B] md:text-6xl tracking-wider text-start font-sf">
              Explorar
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#9AA1AC] text-start font-sfRegular">
              Navegue pelo meus trabalho com mais detalhes, em uma página
              especial.
            </p>
            <span className="mt-8 inline-flex items-center gap-1 text-sm text-[#7FFFC4]">
              <span>&gt; entrar</span>
              <span
                className="h-4 w-2 animate-blink bg-[#7FFFC4]"
                aria-hidden="true"
              />
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}
