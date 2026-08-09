import { createFileRoute } from "@tanstack/react-router";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { SectionTitle } from "@/components/site/SectionTitle";
import { projects } from "@/data/projects";

const title = "Projetos demonstrativos — Pedro Estevam";
const description = "Veja projetos de sites, automações e dashboards para pequenos negócios.";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projetos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Projetos"
          title="Projetos demonstrativos"
          description="Estes projetos mostram como transformo ideias em sites, automações e dashboards funcionais para pequenos negócios."
        />
        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
