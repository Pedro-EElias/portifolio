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
    id: "agenda-barber",
    title: "Agenda Barber",
    slug: "barbearia",
    category: "Landing page",
    shortDescription:
      "Landing page responsiva para barbearia com serviços, preços e contato direto por WhatsApp.",
    problem:
      "Uma barbearia precisa apresentar serviços, preços e localização de forma simples para atrair clientes sem perder tempo com mensagens desconectadas.",
    solution:
      "Página responsiva com seções claras de serviços, preços, localização e botão direto para contato no WhatsApp.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/projects/project-barbearia.svg",
    liveUrl: "/projetos/barbearia",
    repositoryUrl: "",
    featured: true,
    status: "Projeto demonstrativo",
  },
  {
<<<<<<< HEAD
    id: "visao-vendas",
    title: "Visão de Vendas",
    slug: "dashboard-vendas",
    category: "Dashboard",
    shortDescription:
      "Dashboard com indicadores de faturamento, vendas e produtos mais vendidos para pequenos negócios.",
    problem:
      "Um pequeno negócio precisa visualizar vendas, faturamento e produtos mais vendidos, mas os números estavam espalhados em planilhas.",
    solution:
      "Painel com indicadores, gráficos e filtros usando dados fictícios para mostrar resultados de forma simples e útil.",
    technologies: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    image: "/projects/project-dashboard-vendas.svg",
    liveUrl: "/projetos/dashboard-vendas",
    repositoryUrl: "",
=======
    id: "top-analytics",
    title: "TOP Analytics",
    slug: "dashboard-vendas",
    category: "Análise de dados",
    shortDescription:
      "Pipeline de EDA para vendas de eletrônicos, com validação automática de qualidade e um dashboard executivo interativo.",
    problem:
      "Planilhas de vendas brutas costumam vir com dados inconsistentes, como formatos numéricos diferentes, textos mal padronizados e campos ausentes, dificultando análises confiáveis e a geração de indicadores de negócio.",
    solution:
      "Pipeline em Python com Pandas e Pandera para padronizar e validar os dados, converter a planilha Excel em banco SQLite, calcular indicadores de participação por região, vendedor e período, além de auditar pendências de qualidade automaticamente. Os resultados alimentam o Power BI e um dashboard web próprio com Dash e Plotly, sem necessidade de reprocessamento.",
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
    repositoryUrl: "https://github.com/Pedro-EElias/top_analytics",
>>>>>>> ab482e6 (corrigindo erro de mostragem de projeto)
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
      "Um pequeno negócio registra entradas e saídas manualmente e tem dificuldade para identificar produtos parados no estoque.",
    solution:
      "Interface para registrar movimentações e destacar itens com baixa rotação ou estoque baixo.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
    image: "/projects/project-controle-estoque.svg",
    liveUrl: "/projetos/controle-estoque",
    repositoryUrl: "",
    featured: true,
    status: "Projeto demonstrativo",
  },
];
