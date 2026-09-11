import getDiaSemana from "@/lib/week"

export function Footer() {
  const year = new Date().getFullYear();
  const dia = new Date().getDay();

  return (
    <footer className="border-t border-[#2A2C30] bg-[#16181B] text-[#8A8C8F]">
      <div className="mx-auto justify-between flex max-w-275 gap-5 px-6 py-7 text-[13px] leading-relaxed sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[#77797D] font-sfMedium md: text-center">
          Flávio Gimenes <span className="mx-1 text-[#3E4044] hidden md:inline">—</span> {year}
        </p>

        <p className="text-[#77797D] text-end font-sfMedium">
          Obrigado por ler até aqui, {getDiaSemana(dia)} :)
        </p>
      </div>
    </footer>
  );
}