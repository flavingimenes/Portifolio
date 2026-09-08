import Image from "next/image"

import { FiFolder, FiPhone } from "react-icons/fi"
import { FolderCode } from "lucide-react"



export function Hero() {

  function Saudacao() {
    const hora = Number(
      new Intl.DateTimeFormat("pt-BR", {
        hour: "numeric",
        hour12: false,
        timeZone: "America/Sao_Paulo",
      }).format(new Date())
    )

    if (hora >= 5 && hora < 12) {
      return "Bom dia"
    } else if (hora >= 12 && hora < 18) {
      return "Boa tarde"
    } else if (hora >= 18 && hora < 24) {
      return "Boa noite"
    } else {
      return "Boa madrugada"
    }
  }

  return (
    <section
      id="topo"
      className="mx-auto max-w-275 px-6 pb-20 pt-16 md:pb-28 md:pt-24"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-center">

        <Image
          src="/images/flavio-gabriel.jpg"
          alt="Flávio Gabriel"
          width={260}
          height={260}
          className="rounded-full object-cover"
        />

        <div className="md:pr-8 lg:pr-16">

         <h1 className="mt-3 text-[44px] leading-[1.05] text-[#16181B] sm:text-[56px] md:text-[64px] font-sf">
  <span className="block text-left text-[25px] text-[#6E7075] font-sf">
    {Saudacao()}! Me chamo
  </span>

  <span className="block">
    Flávio Gimenes
  </span>

  <span className="block text-right text-[17px] text-[#6E7075] font-sfRegular">
    Engenheiro de Software
  </span>
</h1>

          <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-[#3E4044] md:text-[19px]">
            Estudo, desenvolvo e coloco ideias para funcionar. Desenvolvedor
            focado em sistemas web que resolvem um problema concreto de quem
            vai usar todos os dias.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#projetos"
              className="rounded-md bg-[#16181B] px-10 py-3 text-[15px] font-medium text-[#FAFAF8] transition-all duration-300 hover:bg-[#2F5D50] hover:-translate-y-0.5"
            >
              Projetos
            </a>

            <a
              href="#contato"
              className="rounded-md border border-black px-10 py-3 text-[15px] font-medium text-black transition-all duration-300 hover:bg-[#bab9b9] hover:-translate-y-0.5"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}