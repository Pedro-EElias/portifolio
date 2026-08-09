# Portfólio — Pedro Estevam

Site de portfólio pessoal com apresentação de serviços, projetos e contato direto via WhatsApp/e-mail, focado em soluções para pequenos negócios (sites, automações e dashboards).

## Stack

- **[TanStack Start](https://tanstack.com/start)** — framework full-stack com roteamento por arquivo (TanStack Router) e SSR
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** (componentes em `src/components/ui`) + **Radix UI**
- **Vite** como bundler/dev server
- Deploy alvo: **Cloudflare** (via Nitro)

## Estrutura do projeto

```
src/
├── routes/            # Roteamento por arquivo (TanStack Router)
│   ├── __root.tsx      # Layout raiz, envolve todas as páginas
│   ├── index.tsx        # Página inicial
│   └── projetos/         # Listagem e detalhe de cada projeto
├── components/
│   ├── site/            # Componentes próprios do site (Header, Hero, Sections...)
│   └── ui/               # Componentes shadcn/ui
├── data/                # Dados dos projetos exibidos no portfólio
├── content/             # Conteúdo estático do site (perfil, serviços, etapas de trabalho)
├── hooks/               # Hooks React reutilizáveis
├── lib/                 # Utilidades (helpers, captura de erro)
├── server.ts            # Entry point do servidor SSR
└── styles.css            # Estilos globais / tokens Tailwind
```

> ⚠️ `src/routes/routeTree.gen.ts` é gerado automaticamente pelo TanStack Router — não edite esse arquivo manualmente.

## Como rodar localmente

Requer Node.js instalado ([instale via nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
git clone <url-do-repositorio>
cd <nome-do-repositorio>
npm install
npm run dev
```

O site sobe em modo desenvolvimento com hot reload.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run build:dev` | Build em modo desenvolvimento (debug) |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint` | Roda o ESLint |
| `npm run format` | Formata o código com Prettier |

## Editando conteúdo

- **Perfil (nome, telefone, e-mail, redes), serviços e etapas de trabalho** → `src/content/portfolio.ts`
- **Projetos exibidos no portfólio** (título, descrição, tecnologias, imagem, links) → `src/data/projects.ts`
- **Imagens dos cards de projeto** → arquivos em `public/projects/`, referenciados pelo campo `image` de cada projeto em `src/data/projects.ts`

## Deploy

O projeto usa [Nitro](https://nitro.build) como camada de deploy, o que permite publicar em várias plataformas sem mudar o código da aplicação — só o preset do Nitro em `vite.config.ts` muda conforme o destino (Vercel, Node, Cloudflare etc.). Veja as opções em [nitro.build/deploy](https://nitro.build/deploy).
