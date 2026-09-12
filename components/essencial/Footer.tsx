import getDiaSemana from "@/lib/week";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2A2C30] bg-[#16181B] text-[#8A8C8F]">
      <div className="mx-auto flex max-w-275 justify-between gap-5 px-6 py-7 text-[13px] leading-relaxed sm:flex-row sm:items-center">
        <p className="font-sfMedium text-[#77797D]">
          Flávio Gimenes{" "}
          <span className="mx-1 hidden text-[#3E4044] md:inline">—</span>{" "}
          {year}
        </p>

        <p className="font-sfMedium text-[#77797D]">
          Obrigado por ler até aqui, {getDiaSemana()} :)
        </p>
      </div>
    </footer>
  );
}
