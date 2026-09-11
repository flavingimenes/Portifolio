import { contactLinks } from "./data";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export function Contact() {
  return (
    <section
      id="contato"
      className="border-t border-[#2A2C30] bg-[#16181B] text-[#FAFAF8]"
    >
      <div className="mx-auto max-w-275 px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.18em] text-[#8F9195]">
              Contato
            </span>

            <h2
              className="max-w-[24ch] text-[30px] leading-[1.12] md:text-[38px]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Tem um projeto em mente ou uma vaga que combina com o que eu faço?
            </h2>

            <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-[#C9CACC]">
              Me manda uma mensagem. Estou sempre aberto a conversar sobre
              novos projetos e oportunidades.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-[#2A2C30] pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href={`mailto:${contactLinks.email}`}
              className="
                group flex items-center gap-3
                rounded-md border border-[#2A2C30]
                bg-[#1B1D20]
                px-4 py-3
                text-[14px] text-[#FAFAF8]
                transition-all duration-200
                hover:border-[#3E4044]
                hover:bg-[#202226]
              "
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#23262A] text-[#C9CACC] transition-colors group-hover:text-[#FAFAF8]">
                <FaEnvelope size={13} />
              </span>

              <span className="truncate">
                {contactLinks.email}
              </span>
            </a>

            <a
              href={contactLinks.github}
              target="_blank"
              rel="noreferrer noopener"
              className="
                group flex items-center gap-3
                rounded-md border border-[#2A2C30]
                bg-[#1B1D20]
                px-4 py-3
                text-[14px] text-[#C9CACC]
                transition-all duration-200
                hover:border-[#3E4044]
                hover:bg-[#202226]
                hover:text-[#FAFAF8]
              "
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#23262A]">
                <FaGithub size={14} />
              </span>

              <span>GitHub</span>
            </a>

            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="
                group flex items-center gap-3
                rounded-md border border-[#2A2C30]
                bg-[#1B1D20]
                px-4 py-3
                text-[14px] text-[#C9CACC]
                transition-all duration-200
                hover:border-[#3E4044]
                hover:bg-[#202226]
                hover:text-[#FAFAF8]
              "
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#23262A]">
                <FaLinkedinIn size={13} />
              </span>

              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}