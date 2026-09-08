export function About() {
  return (
    <section id="sobre" className="border-t border-[#E4E2DD]">
      <div className="mx-auto grid max-w-275 gap-6 px-6 py-16 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:py-24">
       <h2 className="text-[22px] md:text-3xl text-[#16181B] font-sf text-center self-center">
          Sobre
        </h2>
        <div className="max-w-[62ch] space-y-5 text-[16px] leading-relaxed text-[#3E4044] md:text-[17px]">
          <p>
            Sou estudante de Engenharia de Software e desenvolvedor Full
            Stack. Gosto de projetos onde dá pra ver o problema de perto:
            entender como uma pessoa trabalha hoje, o que está travando esse
            trabalho, e construir algo que substitua isso de verdade — não só
            mais uma tela bonita.
          </p>
          <p>
            Trabalho principalmente com Next.js, React e TypeScript no
            frontend, e Prisma no backend. Prefiro entregar um sistema
            pequeno que funciona de ponta a ponta do que um projeto grande
            que fica pela metade.
          </p>
          <p>
            Fora da faculdade, tenho usado esse tempo para construir projetos
            reais para pessoas reais, incluindo um sistema próprio para uma
            oficina de motos e sites para pequenos comércios da minha região.
          </p>
        </div>
      </div>
    </section>
  );
}
