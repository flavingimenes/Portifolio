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
  tipe: string;
  summary: string;
  problem: string;
  contribution: string;
  stack: string[];
  liveUrl?: string;
  noLiveUrl?: string;
  repoUrl?: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "zgmotos-os",
    name: "ZGMotos OS",
    tipe: "Sistema web",
    summary:
      "Sistema de pedidos e orçamentos para uma oficina de motos, substituindo o controle em papel por um fluxo único de clientes, motos, produtos e histórico.",
    problem:
      "A oficina fechava cada orçamento em ficha física, sem histórico consultável e sem forma rápida de saber o que já tinha sido feito em cada moto. Cada consulta antiga dependia de vasculhar papéis.",
    contribution:
      "Projetei e implementei sozinho o sistema completo: modelagem do banco com Prisma, cadastro de clientes e motos vinculados, montagem de pedidos com múltiplos itens, histórico editável e impressão do orçamento, além do deploy em produção.",
    stack: ["Next.js", "React", "TypeScript", "Prisma", "SQLite/Turso"],
    noLiveUrl: "Sistema em produção, mas não acessível publicamente",
    repoUrl: "https://github.com/flavingimenes/projeto-zgmotos-os",
    image: "/images/essencial/zg-motos-print.png",
  },
  {
    slug: "nexus-rpg",
    name: "Nexus RPG",
    tipe: "Sistema web + mobile",
    summary:
      "Plataforma de aprendizado de programação que transforma conteúdos e exercícios em uma jornada gamificada, com planetas, missões, desafios e progressão do usuário.",
    problem:
      "O aprendizado de programação pode se tornar pouco envolvente quando baseado apenas em conteúdos e exercícios tradicionais. O projeto buscou tornar essa experiência mais interativa, criando uma jornada na qual o estudante pudesse aprender enquanto explora, completa missões e acompanha sua própria evolução.",
    contribution:
      "Participei do desenvolvimento de uma solução integrada entre aplicativo mobile, landing page e backend, trabalhando com autenticação, consumo de API, fluxo de missões, progressão do usuário e organização da interface.",
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
      "PostgreSQL",
    ],
    liveUrl: "https://trabalho-univag-nexus.vercel.app/",
    repoUrl: "https://github.com/flavingimenes/TrabalhoUnivagNexus",
    image: "/images/essencial/nexus-rpg-print.png",
  },
];

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPrisma,
  SiSqlite,
  SiPostgresql,
  SiTurso,
  SiGit,
  SiGithub,
  SiVercel,
  SiJavascript,
  SiHtml5,
  SiDbeaver,
  SiMariadb,
  SiLinux,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export type Skill = {
  name: string;
  icon: IconType;
};

export type SkillGroup = {
  label: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt},
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "APIs REST", icon: SiNodedotjs },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    label: "Banco de dados",
    items: [
      { name: "SQLite", icon: SiSqlite },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MariaDB", icon: SiMariadb },
      { name: "Turso", icon: SiTurso },
    ],
  },

  {
  label: "Ferramentas & Ambiente",
  items: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Linux", icon: SiLinux },
    { name: "VS Code", icon: VscVscode },
    { name: "DBeaver", icon: SiDbeaver },
    { name: "Vercel", icon: SiVercel },
  ],
},
];

export type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  description: string;
};

export const experienceItems: ExperienceItem[] = [
  {
    period: "2023 — 2027",
    title: "Engenharia de Software",
    place: "Bacharelado",
    description:
      "Graduação em Engenharia de Software, com formação voltada ao desenvolvimento de software, desenvolvimento web, estruturas de dados, bancos de dados, arquitetura de sistemas e boas práticas de engenharia.",
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
title: "Entender antes de executar",
description:
"Antes de pensar em tecnologia, procuro entender o problema, o objetivo do projeto e como ele vai ser usado na prática.",
},

{
title: "Começar pelo simples",
description:
"Gosto de começar com uma solução simples e funcional. Se algo mais complexo for necessário, adiciono depois.",
},

{
title: "Trabalho pensado à longo prazo",
description:
"Organização e nomes claros fazem diferença. Principalmente quando preciso voltar ao projeto meses depois e entender o que eu mesmo fiz.",
},
];


export const contactLinks = {
  email: "gflavio581@gmail.com",
  github: "https://github.com/flavingimenes",
  linkedin: "https://linkedin.com/in/flaviogimenes",
};
