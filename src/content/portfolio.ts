export const profile = {
  name: "Pedro Henrique Estevam Elias",
  shortName: "Pedro Estevam",
  role: "Sites, automações e dashboards para pequenos negócios",
  phone: "+55 84 98117-1919",
  whatsapp: "https://wa.me/5584981171919",
  email: "phestevamelias16@gmail.com",
  github: "https://github.com/Pedro-EElias?tab=repositories",
  linkedin: "https://www.linkedin.com/in/pedro-henrique-estevam-elias-68834936b/",
};

export type Service = {
  icon: "layout" | "workflow" | "chart";
  title: string;
  description: string;
  benefit: string;
};

export const services: Service[] = [
  {
    icon: "layout",
    title: "Sites e landing pages",
    description:
      "Páginas rápidas, claras e responsivas, feitas para apresentar seu negócio e receber contatos sem complicação.",
    benefit: "Benefício: mais contatos qualificados e uma primeira impressão profissional.",
  },
  {
    icon: "workflow",
    title: "Automação de tarefas",
    description:
      "Planilhas, relatórios e envios repetitivos passam a acontecer sozinhos, com regras simples e previsíveis.",
    benefit: "Benefício: menos trabalho manual e mais tempo para atender clientes.",
  },
  {
    icon: "chart",
    title: "Dashboards e análise de dados",
    description:
      "Seus números reunidos em um painel único, com indicadores fáceis de ler no computador ou no celular.",
    benefit: "Benefício: decisões tomadas com base em dados, não em achismo.",
  },
];

export const steps = [
  {
    title: "Entender o problema",
    text: "Conversa inicial para mapear a rotina, o que trava o dia a dia e qual resultado você espera.",
  },
  {
    title: "Planejar a solução",
    text: "Defino escopo, prazo e o formato mais simples que resolve — sem complicar o que não precisa.",
  },
  {
    title: "Desenvolver e validar",
    text: "Construo em etapas curtas e mostro o andamento, para você ajustar antes de tudo estar pronto.",
  },
  {
    title: "Publicar e dar suporte",
    text: "Coloco no ar, explico como usar e acompanho os ajustes dos primeiros dias de uso.",
  },
];
