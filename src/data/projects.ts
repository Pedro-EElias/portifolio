export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  repositoryUrl?: string;
  featured: boolean;
  status: string;
};

export const projects: Project[] = [
  {
    id: "loja-lumiere",
    title: "Loja Lumiere",
    slug: "loja-lumiere",
    category: "Site/E-commerce",
    shortDescription:
      "Landing page de uma loja de maquiagem com apresentação visual da marca, produtos principais, benefícios e uma jornada de compra simulada.",
    problem:
      "Apresentar uma loja online de forma elegante e objetiva, mostrando a proposta da marca e conduzindo o visitante por uma experiência de compra simplificada sem depender de um backend real.",
    solution:
      "Criei uma landing page com foco em conversão, com catálogo visual, páginas de produto, carrinho, checkout simulado e elementos de identidade da marca, tudo com uma interface limpa e pronta para evoluir para uma integração real.",
    technologies: [
      "TanStack Start",
      "TanStack Router",
      "TanStack Query",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Radix UI",
      "Vitest",
      "Vite",
      "Nitro",
    ],
    image: "/projects/project-loja-lumiere.svg",
    liveUrl: "https://lumiere-maquiagem-website.vercel.app/",
    repositoryUrl: "https://github.com/Pedro-EElias/lumiere",
    featured: true,
    status: "Projeto demonstrativo",
  },
  {
    id: "controle-estoque",
    title: "Controle Simples",
    slug: "controle-estoque",
    category: "Automação e estoque",
    shortDescription:
      "Interface leve para registrar entradas, saídas e produtos que precisam de atenção no estoque.",
    problem:
      "Um pequeno negócio precisava controlar entradas, saídas e produtos parados no estoque sem depender apenas de anotações manuais e de uma rotina pouco organizada.",
    solution:
      "Implementei uma interface simples para registrar movimentações, acompanhar o estoque e destacar itens com baixa rotação ou estoque baixo, tornando a rotina mais visual e objetiva.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
    image: "/projects/project-controle-estoque.svg",
    liveUrl: "/projetos/controle-estoque",
    repositoryUrl: "",
    featured: true,
    status: "Projeto demonstrativo",
  },
  {
    id: "top-analytics",
    title: "TOP Analytics",
    slug: "dashboard-vendas",
    category: "Análise de dados",
    shortDescription:
      "Pipeline de EDA de vendas de eletrônicos com validação automática de qualidade e um dashboard executivo interativo.",
    problem:
      "Planilhas de vendas brutas costumam chegar com dados inconsistentes, como formatos numéricos diferentes, textos mal padronizados e campos ausentes, dificultando análises confiáveis e a geração de indicadores de negócio.",
    solution:
      "Criei um pipeline em Python com Pandas e Pandera para padronizar e validar os dados, converter a planilha Excel em banco SQLite, calcular indicadores de participação por região, vendedor e período, além de auditar pendências de qualidade automaticamente. Os resultados alimentam tanto o Power BI quanto um dashboard web próprio com Dash e Plotly, sem necessidade de reprocessamento.",
    technologies: [
      "Python",
      "Pandas",
      "Pandera",
      "SQLite",
      "openpyxl",
      "Dash",
      "Plotly",
      "dash-bootstrap-components",
      "pytest",
      "GitHub Actions",
    ],
    image: "/projects/project-dashboard-vendas.svg",
    liveUrl: "https://pedroestevam.pythonanywhere.com",
    repositoryUrl: "https://github.com/Kelly-0W/Projeto-analise-de-dados",
    featured: true,
    status: "Projeto demonstrativo",
  },
  {
    id: "agenda-barber",
    title: "Agenda Barber",
    slug: "barbearia",
    category: "Landing page",
    shortDescription:
      "Landing page responsiva para barbearia com serviços, preços e contato direto por WhatsApp.",
    problem:
      "Uma barbearia precisava mostrar serviços, preços e localização de forma simples, sem depender de mensagens dispersas ou de uma presença digital fraca.",
    solution:
      "Criei uma landing page responsiva, com seções claras para serviços, valores, localização e um botão direto para WhatsApp, oferecendo uma experiência mais objetiva para clientes em busca de agendamento.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/projects/project-barbearia.svg",
    liveUrl: "/projetos/barbearia",
    repositoryUrl: "",
    featured: false,
    status: "Projeto demonstrativo",
  },
];
