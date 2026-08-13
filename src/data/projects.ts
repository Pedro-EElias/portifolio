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
    id: "estoque-smart",
    title: "EstoqueSmart",
    slug: "estoquesmart",
    category: "Automação",
    shortDescription:
      "Automação de monitoramento de estoque com disparo de alertas de reposição, e dashboard interativo mostrando produtos em risco de ruptura.",
    problem:
      "Pequenos e médios comércios costumam descobrir que um produto acabou só quando já é tarde — perdendo vendas por falta de acompanhamento manual constante do estoque.",
    solution:
      "Motor de automação em Python que calcula a velocidade média de venda de cada produto (média móvel de 7 dias), estima os dias restantes de estoque e classifica automaticamente cada item em 🟢 Saudável, 🟡 Atenção ou 🔴 Crítico. Quando um produto entra em estado crítico, o sistema registra o alerta em log e dispara automaticamente um e-mail de aviso (simulado por padrão, com opção de envio real via SMTP). Um dashboard interativo em Dash exibe KPIs (produtos críticos, valor em risco, produto mais vendido), tabela de produtos ordenada por urgência com barra de progresso, gráfico de consumo histórico e painel com o histórico de alertas disparados.",
    technologies: ["Python", "Pandas", "Dash", "Plotly", "SMTP", "Logging"],
    image: "/projects/project-estoque-smart.svg",
    liveUrl: "https://pedroestevamelias.pythonanywhere.com/",
    repositoryUrl: "https://github.com/Pedro-EElias/estoque-smart",
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
];
