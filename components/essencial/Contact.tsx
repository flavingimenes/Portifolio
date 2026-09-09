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
      className="border-t border-[#E4E2DD] bg-[#16181B] text-[#FAFAF8]"
    >
      <div className="mx-auto max-w-275 px-6 py-16 md:py-24">
        <h2
          className="max-w-[24ch] text-[30px] leading-tight md:text-[38px]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Tem um projeto em mente ou uma vaga que combina com o que eu faço?
        </h2>

        <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-[#C9CACC]">
          Me manda uma mensagem, respondo rápido.
        </p>

        <div className="mt-10 flex flex-col gap-4 text-[16px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">

          <a
            href={`mailto:${contactLinks.email}`}
            className="group flex items-center gap-3 text-[#FAFAF8]"
          >
              <FaEnvelope size={14} />
            <span className="underline decoration-[#2F5D50] decoration-2 underline-offset-4">
              {contactLinks.email}
            </span>
          </a>

          <a
            href={contactLinks.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-3 text-[#C9CACC] transition-colors hover:text-[#FAFAF8]"
          >
              <FaGithub size={15} />
            <span className="underline decoration-[#3E4044] decoration-2 underline-offset-4">
              GitHub
            </span>
          </a>

          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-3 text-[#C9CACC] transition-colors hover:text-[#FAFAF8]"
          >
              <FaLinkedinIn size={14} />
            <span className="underline decoration-[#3E4044] decoration-2 underline-offset-4">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}