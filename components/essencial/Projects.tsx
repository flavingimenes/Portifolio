import { projects } from "./data";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projetos" className="border-t border-[#E4E2DD] bg-[#F3F2EE]">
      <div className="mx-auto max-w-[1100px] px-6 py-16 md:py-24">
        <h2
          className="text-[22px] text-[#16181B]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Projetos
        </h2>
        <p className="mt-3 max-w-[52ch] text-[15px] text-[#6E7075]">
          Dois projetos que resumem bem como eu trabalho, do primeiro
          commit ao ar no navegador.
        </p>

        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
