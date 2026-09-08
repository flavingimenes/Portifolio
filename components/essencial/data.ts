export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Formação", href: "#formacao" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contato" },
];

export type Project = {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  contribution: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "zgmotos-os",
    name: "ZGMotos OS",
    summary:
      "Sistema de pedidos e orçamentos para uma oficina de motos, substituindo o controle em papel por um fluxo único de clientes, motos, produtos e histórico.",
    problem:
      "A oficina fechava cada orçamento em ficha física, sem histórico consultável e sem forma rápida de saber o que já tinha sido feito em cada moto. Cada consulta antiga dependia de vasculhar papéis.",
    contribution:
      "Projetei e implementei sozinho o sistema completo: modelagem do banco com Prisma, cadastro de clientes e motos vinculados, montagem de pedidos com múltiplos itens, histórico editável e impressão do orçamento, além do deploy em produção.",
    stack: ["Next.js", "React", "TypeScript", "Prisma", "SQLite/Turso"],
    repoUrl: "https://github.com/flavingimenes/projeto-zgmotos-os",
    image: "/images/essencial/zg-motos-print.png",
  },
  {
slug: "nexus-rpg",
name: "Nexus RPG",
summary:
"Plataforma de aprendizado de programação que transforma conteúdos e exercícios em uma jornada gamificada, com planetas, missões, desafios e progressão do usuário.",
problem:
"O aprendizado de programação pode se tornar pouco envolvente quando baseado apenas em conteúdos e exercícios tradicionais. O projeto buscou tornar essa experiência mais interativa, criando uma jornada na qual o estudante pudesse aprender enquanto explora, completa missões e acompanha sua própria evolução.",
contribution:
"Participei do desenvolvimento de uma solução integrada entre aplicativo mobile, landing page e backend, trabalhando com autenticação, consumo de API, fluxo de missões, progressão do usuário e organização da interface. O projeto também envolveu integração entre diferentes tecnologias e persistência dos dados em banco relacional.",
stack: [
"React Native",
"Expo",
"TypeScript",
"Next.js",
"React",
"Tailwind CSS",
"Java",
"Spring Boot",
"Spring Security",
"JWT",
"PostgreSQL"
],
liveUrl: "https://trabalho-univag-nexus.vercel.app/",
repoUrl: "https://github.com/flavingimenes/TrabalhoUnivagNexus",
image: "/images/essencial/nexus-rpg-print.png",
},

];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "APIs REST", "Prisma"] },
  { label: "Banco de dados", items: ["SQLite", "PostgreSQL", "Turso"] },
  { label: "Ferramentas", items: ["Git", "GitHub", "Vercel"] },
];

export type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  description: string;
};

export const experienceItems: ExperienceItem[] = [
  {
    period: "2023 — atual",
    title: "Engenharia de Software",
    place: "Graduação",
    description:
      "Formação em andamento com foco em desenvolvimento web, estruturas de dados e engenharia de sistemas.",
  },
  {
    period: "2026",
    title: "Desenvolvimento independente",
    place: "Projetos próprios e freelance",
    description:
      "Construção do Zero Grau Motos do zero e desenvolvimento de sites sob encomenda para comércios locais, atuando sozinho em todas as etapas — do planejamento ao deploy.",
  },
];

export const approachPoints = [
  {
    title: "Entender antes de codar",
    description:
      "Prefiro mapear o problema real e como as pessoas vão usar o sistema antes de decidir qual tecnologia entra no projeto.",
  },
  {
    title: "Simples primeiro",
    description:
      "Começo pela solução mais direta que resolve o problema e só adiciono complexidade quando ela realmente se justifica.",
  },
  {
    title: "Pensando em quem mantém depois",
    description:
      "Código organizado e nomes claros importam tanto quanto a funcionalidade — inclusive quando esse alguém sou eu mesmo, meses depois.",
  },
];

export const contactLinks = {
  email: "flavio.gimenes@example.com",
  github: "https://github.com/flavingimenes",
  linkedin: "https://linkedin.com/in/flaviogimenes",
};
