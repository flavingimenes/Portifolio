import Image from "next/image"

export function Hero() {
  return (
    <section id="topo" className="mx-auto max-w-275 px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">

        <Image
          src="/images/flavio-gabriel.jpg"
          alt="Flávio Gabriel"
          width={260}
          height={260}
          className="rounded-full object-cover"
        />
      
        <div className="md:pr-8 lg:pr-16 text-rig">
          <p className="text-[15px] text-[#6E7075]font-sfRegular">Engenheiro De Software</p>
          <h1
            className="mt-3 text-[44px] leading-[1.05] text-[#16181B] sm:text-[56px] md:text-[64px] font-sf"
          >
            Flávio Gabriel
          </h1>
          <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-[#3E4044] md:text-[19px]">
          Estudo, desenvolvo e coloco ideias para funcionar. Desenvolvedor focado em sistemas web que resolvem um problema concreto de quem vai usar todos os dias
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#projetos"
              className="rounded-md bg-[#16181B] px-8 py-3 text-[14px] font-medium text-[#FAFAF8] transition-colors hover:bg-[#2F5D50]"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="text-[14px] text-[#16181B] underline decoration-[#E4E2DD] decoration-2 underline-offset-4 transition-colors hover:decoration-[#2F5D50]"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
