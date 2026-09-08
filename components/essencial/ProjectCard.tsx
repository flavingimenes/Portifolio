"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "./data";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  project: Project;
  reverse?: boolean;
};

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="group grid gap-8 border-t border-[#E4E2DD] py-12 md:grid-cols-2 md:items-center md:gap-14 md:py-16">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`
            group/image overflow-hidden rounded-2xl border border-[#E4E2DD]
            bg-[#F7F6F2] text-left
            shadow-[0_8px_30px_rgba(22,24,27,0.05)]
            transition-all duration-500
            hover:border-[#D8D5CE]
            hover:shadow-[0_16px_40px_rgba(22,24,27,0.09)]
            focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/30
            ${reverse ? "md:order-2" : "md:order-1"}
          `}
          aria-label={`Ampliar imagem do projeto ${project.name}`}
        >
          <div className="relative">
            <Image
              src={project.image}
              alt={`Captura de tela do projeto ${project.name}`}
              width={1200}
              height={800}
              className="
                h-auto w-full object-cover
                transition-transform duration-700
              "
            />

            <div
              className="
                absolute inset-0 flex items-center justify-center
                bg-black/0
                transition-all duration-300
                group-hover/image:bg-black/10
                cursor-pointer
              "
            >
              <div
                className="
                  translate-y-2 rounded-full
                  bg-white/90 px-4 py-2
                  text-xs font-medium text-[#16181B]
                  opacity-0 shadow-lg
                  transition-all duration-300
                  group-hover/image:translate-y-0
                  group-hover/image:opacity-100
                "
              >
                Clique para ampliar
              </div>
            </div>
          </div>
        </button>

        <div
          className={`
            flex flex-col
            ${reverse ? "md:order-1" : "md:order-2"}
          `}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6E7075]">
              {project.tipe}
            </span>
          </div>

          <h3
            className="text-[28px] leading-tight text-[#16181B] md:text-[32px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {project.name}
          </h3>

          <div className="mt-5 space-y-4">
            <p className="text-[15px] leading-7 text-[#3E4044]">
              {project.problem}
            </p>

            <p className="text-[15px] leading-7 text-[#3E4044]">
              {project.contribution}
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="
                  rounded-full
                  border border-[#E4E2DD]
                  bg-[#F7F6F2]
                  px-3 py-1.5
                  text-[12px]
                  font-medium
                  text-[#55585D]
                "
              >
                {tech}
              </li>
            ))}
          </ul>

          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="
                    inline-flex items-center gap-2
                    bg-[#16181B]
                    px-5 py-2.5
                    text-[13px] font-medium text-[#FAFAF8]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#2F5D50]
                  "
                >
                  Ver projeto
                </a>
              ) : null}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="
                    inline-flex items-center gap-2
                    border border-[#E4E2DD]
                    bg-white
                    px-5 py-2.5
                    text-[13px] font-medium text-[#3E4044]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[#16181B]
                    hover:text-[#16181B]
                  "
                >
                  Código-fonte
                  <span aria-hidden="true" className="text-xl">
                    <FaGithub />
                  </span>
                </a>
              ) : null}
            </div>
          )}
        </div>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="
                absolute -right-3 -top-3 z-10
                flex h-10 w-10 items-center justify-center
                rounded-full
                bg-white
                text-xl text-[#16181B]
                shadow-lg
                transition-transform
                hover:scale-105
                cursor-pointer
              "
              aria-label="Fechar imagem"
            >
              X
            </button>

            <Image
              src={project.image}
              alt={`Imagem ampliada do projeto ${project.name}`}
              width={1800}
              height={1200}
              className="
                max-h-[90vh]
                w-auto
                rounded-xl
                object-contain
                shadow-2xl
              "
            />
          </div>
        </div>
      )}
    </>
  );
}
