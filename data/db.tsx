import { icons } from '../icons';
import React, { JSX } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  repoLink: string;
  deployLink?: string; // Opcional, apenas para front-end
  image?: string; // Opcional, apenas para front-end
  icons?: JSX.Element[]; // Opcional, apenas para front-end
}

interface Skill {
  name: string;
  icon: JSX.Element;
  description: string;
}

interface Contact {
  type: string;
  icon: JSX.Element;
  link: string;
  label: string;
}

export const fullstackProjects: Project[] = [
  {
    id: 1,
    title: 'Sale Point',
    image: '/images/sale-point.png',
    description:
      'Sistema completo de gestão de vendas desenvolvido com Node.js, TypeScript, Next.js e Supabase. O Sale Point oferece uma plataforma intuitiva para gerenciamento eficiente de vendas, com recursos avançados de autenticação e gestão de usuários, clientes, produtos e pedidos.',
    repoLink: 'https://github.com/gabrielponde/Sale-point',
    deployLink: 'https://sale-point-app.vercel.app',
    icons: [
      <icons.SiReact key="react" size={24} title="React" />,
      <icons.SiTypescript key="typescript" size={24} title="Typescript" />,
      <icons.SiNextdotjs key="nextjs" size={24} title="NextJs" />,
      <icons.SiPostgresql key="postgresql" size={24} title="Postgresql" />,
      <icons.SiSupabase key="supabase" size={24} title="Supabase" />,
      <icons.SiNodedotjs key="nodejs" size={24} title="NodeJs" />,  
      <icons.SiCss3 key="css3" size={24} title="Css3" />,
      <icons.SiFigma key="figma" size={24} title="Figma" />
    ],
  }
];

export const frontendProjects: Project[] = [
  {
    id: 1,
    title: 'Landing Page de Vendas - Psicólogos',
    image: '/images/landing-psicologos-showcase.png',
    description:
      'Landing page de vendas para serviço de criação de sites para psicólogos, psicanalistas e terapeutas. Apresenta 4 modelos de landing pages com showcase interativo, seção de preços, garantia de satisfação e formulário de contato. Design focado em conversão e profissionalismo.',
    repoLink: 'https://github.com/gabrielponde/landing_page_psi',
    deployLink: 'https://psicologos-landing-showcase.vercel.app',
    icons: [
      <icons.SiReact key="react" size={24} title="React" />,
      <icons.SiTypescript key="typescript" size={24} title="Typescript" />,
      <icons.SiNextdotjs key="nextjs" size={24} title="NextJs" />,
      <icons.SiTailwindcss key="tailwind" size={24} title="TailwindCSS" />,
      <icons.SiFigma key="figma" size={24} title="Figma" />
    ],
  },
  {
    id: 2,
    title: 'Landing Page Psicólogo - Modelo Clássico',
    image: '/images/landing-psicologo-classico.png',
    description:
      'Template profissional para psicólogos com design formal e elegante. Inclui seção FAQ, formulário de contato com validação LGPD e política de privacidade completa. Desenvolvido com foco em conformidade ética (CFP) e transmissão de credibilidade profissional.',
    repoLink: 'https://github.com/gabrielponde/landing_page_psi',
    deployLink: 'https://landing-psicologo-classico.vercel.app',
    icons: [
      <icons.SiReact key="react" size={24} title="React" />,
      <icons.SiTypescript key="typescript" size={24} title="Typescript" />,
      <icons.SiNextdotjs key="nextjs" size={24} title="NextJs" />,
      <icons.SiTailwindcss key="tailwind" size={24} title="TailwindCSS" />
    ],
  },
  {
    id: 3,
    title: 'Landing Page Psicólogo - Modelo Moderno',
    image: '/images/landing-psicologo-moderno.png',
    description:
      'Template minimalista e contemporâneo para psicólogos. Design clean com foco em espaços em branco e tipografia elegante. Ideal para profissionais com perfil moderno e público jovem.',
    repoLink: 'https://github.com/gabrielponde/landing_page_psi',
    deployLink: 'https://landing-psicologo-moderno.vercel.app',
    icons: [
      <icons.SiReact key="react" size={24} title="React" />,
      <icons.SiTypescript key="typescript" size={24} title="Typescript" />,
      <icons.SiNextdotjs key="nextjs" size={24} title="NextJs" />,
      <icons.SiTailwindcss key="tailwind" size={24} title="TailwindCSS" />
    ],
  },
  {
    id: 4,
    title: 'Landing Page Psicólogo - Modelo Acolhedor',
    image: '/images/landing-psicologo-acolhedor.png',
    description:
      'Template com cores quentes e formas orgânicas que criam um ambiente acolhedor e empático. Inclui seção FAQ. Ideal para abordagens humanistas e terapias focadas em vínculo emocional.',
    repoLink: 'https://github.com/gabrielponde/landing_page_psi',
    deployLink: 'https://landing-psicologo-acolhedor.vercel.app',
    icons: [
      <icons.SiReact key="react" size={24} title="React" />,
      <icons.SiTypescript key="typescript" size={24} title="Typescript" />,
      <icons.SiNextdotjs key="nextjs" size={24} title="NextJs" />,
      <icons.SiTailwindcss key="tailwind" size={24} title="TailwindCSS" />
    ],
  },
  {
    id: 5,
    title: 'Landing Page Psicólogo - Modelo Online',
    image: '/images/landing-psicologo-online.png',
    description:
      'Template especializado em terapia online. Inclui seções sobre plataformas de atendimento, segurança de dados, FAQ completo e design tech moderno. Ideal para profissionais que atuam 100% remotamente.',
    repoLink: 'https://github.com/gabrielponde/landing_page_psi',
    deployLink: 'https://landing-psicologo-online.vercel.app',
    icons: [
      <icons.SiReact key="react" size={24} title="React" />,
      <icons.SiTypescript key="typescript" size={24} title="Typescript" />,
      <icons.SiNextdotjs key="nextjs" size={24} title="NextJs" />,
      <icons.SiTailwindcss key="tailwind" size={24} title="TailwindCSS" />
    ],
  },
  {
    id: 6,
    title: 'Cafeteria Cubspresso',
    image: '/images/cafeteria-cubspresso.png',
    description:
      'Este projeto é um catálogo online de cafés, desenvolvido com React. O objetivo é listar diferentes tipos de café, permitindo aos usuários visualizarem informações detalhadas sobre cada um.',
    repoLink: 'https://github.com/gabrielponde/Projeto-Cafeteria-Cubspresso',
    deployLink: 'https://cafeteria-cubspresso.vercel.app',
    icons: [
      <icons.SiReact key="react" size={24} title="React" />,
      <icons.SiJavascript key="javascript" size={24} title="JavaScript" />,
      <icons.SiTypescript key="typescript" size={24} title="Typescript" />,
      <icons.SiNextdotjs key="nextjs" size={24} title="NextJs" />,
      <icons.SiPostgresql key="postgresql" size={24} title="Postgresql" />,
      <icons.SiSupabase key="supabase" size={24} title="Supabase" />,
      <icons.SiCss3 key="css3" size={24} title="Css3" />,
      <icons.SiFigma key="figma" size={24} title="Figma" />
    ],
  },
  {
    id: 7,
    title: 'Curso de AI com Python',
    image: '/images/curso-ai-python.png',
    description:
      'Landing page para um curso de Inteligência Artificial com Python. Desenvolvida com React, Figma e JavaScript, a página oferece uma experiência moderna e interativa para os usuários.',
    repoLink: 'https://github.com/gabrielponde/Curso-IA-com-Python---LandingPage',
    deployLink: 'https://curso-ia-com-python-landing-page.vercel.app',
    icons: [
      <icons.SiReact key="react" size={24} title="React" />,
      <icons.SiJavascript key="javascript" size={24} title="JavaScript" />,
      <icons.SiCss3 key="css" size={24} title="CSS" />,
      <icons.SiFigma key="figma" size={24} title="Figma" />,
    ],
  },
  {
    id: 8,
    title: 'Ebook Java Mastery',
    image: '/images/ebook-java-mastery.png',
    description:
      'A Landing Page Java Mastery é uma aplicação web desenvolvida para promover e comercializar o ebook completo de aprendizado em Java. Apresenta um design moderno e alto poder de conversão.',
    repoLink: 'https://github.com/gabrielponde/landing-page-conversao',
    deployLink: 'https://ebook-java-mastery.vercel.app',
    icons: [
      <icons.SiReact key="react" size={24} title="React" />,
      <icons.SiTypescript key="typescript" size={24} title="Typescript" />,
      <icons.SiNextdotjs key="nextjs" size={24} title="NextJs" />,
      <icons.SiCss3 key="css3" size={24} title="Css3" />,
      <icons.SiFigma key="figma" size={24} title="Figma" />
    ],
  },
  {
    id: 9,
    title: 'F1 Legends',
    image: '/images/f1-legends.png',
    description:
      'O projeto F1-Legends é uma aplicação web dedicada a homenagear os maiores pilotos da história da Fórmula 1. Através de perfis detalhados, os usuários podem explorar informações sobre a vida, carreira e conquistas desses ícones do automobilismo.',
    repoLink: 'https://github.com/gabrielponde/F1-Legends',
    deployLink: 'https://f1-legends.vercel.app',
    icons: [
      <icons.SiHtml5 key="html" size={24} title="HTML" />,
      <icons.SiJavascript key="javascript" size={24} title="JavaScript" />,
      <icons.SiCss3 key="css" size={24} title="CSS" />,
      <icons.SiFigma key="figma" size={24} title="Figma" />,
    ],
  },
];

export const backendProjects: Project[] = [
  {
    id: 1,
    title: 'Bank API',
    description:
      'BankAPI é uma API RESTful educativa que simula operações bancárias básicas. Projetada para desenvolvedores, oferece uma plataforma segura e intuitiva para treinar habilidades em APIs financeiras, com documentação clara e foco em aprendizado prático.',
    repoLink: 'https://github.com/gabrielponde/BankAPI',
  },
  {
    id: 2,
    title: 'Ponto de Venda',
    description:
      'Desenvolvimento de uma API RESTful para um sistema de Ponto de Venda (PDV), com funcionalidades de gerenciamento de usuários, produtos, categorias, clientes e pedidos. A API permite operações CRUD (Create, Read, Update, Delete) para otimizar processos comerciais e garantir eficiência nas operações.',
    repoLink: 'https://github.com/gabrielponde/Ponto-de-Venda',
  },
];

export const skills: Skill[] = [
  {
    name: 'Java',
    icon: <icons.FaJava size={40} />,
    description: 'Linguagem de programação orientada a objetos usada em aplicações robustas.',
  },
  {
    name: 'JavaScript',
    icon: <icons.SiJavascript size={40} />,
    description: 'Linguagem de programação para desenvolvimento web.',
  },
  {
    name: 'TypeScript',
    icon: <icons.SiTypescript size={40} />,
    description: 'Superset de JavaScript com tipagem estática.',
  },
  {
    name: 'Node.js',
    icon: <icons.SiNodedotjs size={40} />,
    description: 'Ambiente de execução para JavaScript no back-end.',
  },
  {
    name: 'React',
    icon: <icons.SiReact size={40} />,
    description: 'Biblioteca JavaScript para construção de interfaces de usuário.',
  },
  {
    name: 'PostgreSQL',
    icon: <icons.SiPostgresql size={40} />,
    description: 'Banco de dados relacional de código aberto.',
  },
  {
    name: 'Next.js',
    icon: <icons.SiNextdotjs size={40} />,
    description: 'Framework React para renderização do lado do servidor e geração de sites estáticos.',
  },
  {
    name: 'Vite',
    icon: <icons.SiVite size={40} />,
    description: 'Ferramenta de build rápida para desenvolvimento front-end.',
  },
  {
    name: 'Cypress',
    icon: <icons.SiCypress size={40} />,
    description: 'Ferramenta de teste end-to-end para aplicações web.',
  },
  {
    name: 'Jest',
    icon: <icons.SiJest size={40} />,
    description: 'Framework de testes para JavaScript.',
  },
  {
    name: 'Sass',
    icon: <icons.SiSass size={40} />,
    description: 'Pré-processador CSS para estilos mais eficientes.',
  },
  {
    name: 'Tailwind CSS',
    icon: <icons.SiTailwindcss size={40} />,
    description: 'Framework CSS utilitário para criação de designs responsivos.',
  },
  {
    name: 'HTML',
    icon: <icons.SiHtml5 size={40} />,
    description: 'Linguagem de marcação para estruturar páginas web.',
  },
  {
    name: 'CSS',
    icon: <icons.SiCss3 size={40} />,
    description: 'Linguagem de estilo para design de páginas web.',
  },
  {
    name: 'Git',
    icon: <icons.SiGit size={40} />,
    description: 'Sistema de controle de versão para gerenciamento de código.',
  },
  {
    name: 'GitHub',
    icon: <icons.SiGithub size={40} />,
    description: 'Plataforma de hospedagem de código e colaboração.',
  },
  {
    name: 'Docker',
    icon: <icons.SiDocker size={40} />,
    description: 'Plataforma para criação e execução de contêineres.',
  },
  {
    name: 'Figma',
    icon: <icons.SiFigma size={40} />,
    description: 'Ferramenta de design de interfaces e prototipagem.',
  },
];

export const contacts: Contact[] = [
  {
    type: 'email',
    icon: <icons.FaEnvelope size={40} />,
    link: 'mailto:gabrielpavena.developer@gmail.com',
    label: 'gabrielpavena.developer@gmail.com',
  },
  {
    type: 'linkedin',
    icon: <icons.FaLinkedin size={40} />,
    link: 'https://www.linkedin.com/in/gabriel-avena/',
    label: '@gabriel-avena',
  },
  {
    type: 'github',
    icon: <icons.FaInstagram size={40} />,
    link: 'https://www.instagram.com/avenacode/',
    label: '@avenacode',
  },
  {
    type: 'github',
    icon: <icons.FaGithub size={40} />,
    link: 'https://github.com/gabrielponde',
    label: '@gabrielponde'
  }
];