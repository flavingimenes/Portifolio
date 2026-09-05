import { contactLinks } from "./data";

export function Contact() {
  return (
    <section id="contato" className="border-t border-[#E4E2DD] bg-[#16181B] text-[#FAFAF8]">
      <div className="mx-auto max-w-[1100px] px-6 py-16 md:py-24">
        <h2
          className="max-w-[24ch] text-[30px] leading-tight md:text-[38px]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Tem um projeto em mente ou uma vaga que combina com o que eu faço?
        </h2>
        <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-[#C9CACC]">
          Me manda uma mensagem — respondo rápido.
        </p>

        <div className="mt-10 flex flex-col gap-3 text-[16px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
          <a
            href={`mailto:${contactLinks.email}`}
            className="underline decoration-[#2F5D50] decoration-2 underline-offset-4"
          >
            {contactLinks.email}
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#C9CACC] underline decoration-[#3E4044] decoration-2 underline-offset-4 transition-colors hover:text-[#FAFAF8]"
          >
            GitHub
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#C9CACC] underline decoration-[#3E4044] decoration-2 underline-offset-4 transition-colors hover:text-[#FAFAF8]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
