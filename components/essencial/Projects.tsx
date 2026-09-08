import { projects } from "./data";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projetos" className="border-t border-[#E4E2DD] bg-[#F3F2EE]">
      <div className="mx-auto max-w-275 px-6 py-16 md:py-24">
        <h2
          className="text-4xl text-[#16181B] font-sf"
          
        >
          Projetos
        </h2>
        <p className="mt-3 max-w-[52ch] text-[15px] text-[#6E7075]">
          Alguns do projetos que desenvolvi, com foco em resolver problemas reais e entregar valor para os usuários.
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
