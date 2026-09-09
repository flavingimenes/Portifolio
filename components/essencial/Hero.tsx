import Image from "next/image";

export function Hero() {
  function Saudacao() {
    const partes = new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      hour12: false,
      timeZone: "America/Cuiaba",
    }).formatToParts(new Date());

    const hora = Number(
      partes.find((parte) => parte.type === "hour")?.value ?? 0,
    );

    if (hora >= 5 && hora < 12) {
      return "Bom dia";
    } else if (hora >= 12 && hora < 18) {
      return "Boa tarde";
    } else if (hora >= 18 && hora < 24) {
      return "Boa noite";
    } else {
      return "Boa madrugada";
    }
  }

  return (
    <section
      id="topo"
      className="mx-auto max-w-275 px-6 pb-20 pt-16 md:pb-28 md:pt-24"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-center">

        <div className="order-1 md:order-2 md:pr-8 lg:pr-16">
          <h1 className="mt-3 text-[44px] leading-[1.05] text-[#16181B] sm:text-[56px] md:text-[64px] font-sf">
            <span className="block text-left text-[25px] text-[#6E7075] font-sf">
              {Saudacao()}! Me chamo
            </span>

            <span className="block">Flávio Gimenes</span>

            <span className="block text-right text-[17px] text-[#6E7075] font-sfRegular">
              Engenheiro de Software
            </span>
          </h1>

          <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-[#3E4044] md:text-[19px]">
            Estudo, desenvolvo e coloco ideias para funcionar. Desenvolvedor
            focado em sistemas web que resolvem um problema concreto de quem vai
            usar todos os dias.
          </p>

          <div className="mt-8 mb-8 flex flex-wrap items-center justify-center gap-6 md:justify-start">
            <a
              href="#projetos"
              className="rounded-md bg-[#16181B] px-10 py-3 text-[15px] font-sf text-[#FAFAF8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2F5D50]"
            >
              Projetos
            </a>

            <a
              href="#contato"
              className="rounded-md border border-black px-10 py-3 text-[15px] font-sf text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bab9b9]"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="order-2 flex justify-center md:order-1 md:justify-start">
          <Image
            src="/images/essencial/FGImg.jpeg"
            alt="Flávio Gimenes"
            width={280}
            height={280}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
