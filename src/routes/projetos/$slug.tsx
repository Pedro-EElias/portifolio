import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { ProjectDetails } from "@/components/site/ProjectDetails";
import { Footer } from "@/components/site/Sections";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projetos/$slug")({
  head: () => ({
    meta: [
      { title: "Projeto — Pedro Estevam" },
      { name: "description", content: "Detalhes do projeto e tecnologia usada." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectDetailsPage,
});

function ProjectDetailsPage() {
  const params = Route.useParams();
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main id="main-content" className="min-h-screen bg-background px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface p-10 text-center">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Projeto não encontrado
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-foreground">
              Parece que esse projeto não existe.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Volte para a lista de projetos e escolha outro exemplo de site, automação ou
              dashboard.
            </p>
            <Link
              to="/projetos"
              className="mt-8 inline-flex rounded-md border border-border bg-wine px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-wine-soft"
            >
              Voltar para projetos
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProjectDetails project={project} />
      <Footer />
    </div>
  );
}
