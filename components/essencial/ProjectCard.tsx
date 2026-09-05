import Image from "next/image";
import type { Project } from "./data";

type ProjectCardProps = {
  project: Project;
  reverse?: boolean;
};

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <article className="grid gap-6 border-t border-[#E4E2DD] py-10 md:grid-cols-2 md:gap-12 md:py-14">
      <div className={reverse ? "md:order-2" : undefined}>
        <Image
          src={project.image}
          alt={`Captura de tela do projeto ${project.name}`}
          width={1200}
          height={800}
          className="h-auto w-full rounded-md border border-[#E4E2DD] object-cover"
        />
      </div>

      <div className={reverse ? "md:order-1" : undefined}>
        <h3
          className="text-[24px] text-[#16181B]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {project.name}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#3E4044]">
          {project.problem}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-[#3E4044]">
          {project.contribution}
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-[#6E7075]">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-5 text-[14px]">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#16181B] underline decoration-[#2F5D50] decoration-2 underline-offset-4"
            >
              Ver projeto
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#6E7075] underline decoration-[#E4E2DD] decoration-2 underline-offset-4 transition-colors hover:text-[#16181B]"
            >
              Código-fonte
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
