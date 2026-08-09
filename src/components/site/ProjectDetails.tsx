import type { Project } from "@/data/projects";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { SectionTitle } from "./SectionTitle";
import { Card, Section } from "./ui";
import { ArrowUpRight, Code2, ArrowLeft } from "lucide-react";

const isExternal = (url: string) => /^https?:\/\//.test(url);

export function ProjectDetails({ project }: { project: Project }) {
  const liveIsExternal = project.liveUrl && isExternal(project.liveUrl);

  return (
    <main className="min-h-screen bg-background px-6 py-24 lg:px-10">
      <section className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow={project.category}
              title={project.title}
              description={project.shortDescription}
              as="h1"
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge>{project.status}</Badge>
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-6 shadow-sm">
            <div className="space-y-3">
<<<<<<< HEAD
              <p className="text-sm text-muted-foreground">Demonstração interna</p>
=======
              <p className="text-sm text-muted-foreground">Projeto demonstrativo</p>
>>>>>>> ab482e6 (corrigindo erro de mostragem de projeto)
              <p className="text-lg font-semibold text-foreground">Resumo rápido</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Card className="p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Problema
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">{project.problem}</p>
              </Card>
              <Card className="p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Solução</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                  {project.solution}
                </p>
              </Card>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {project.liveUrl ? (
                <Button
                  href={liveIsExternal ? project.liveUrl : "#demo"}
                  variant="solid"
                  size="sm"
                  target={liveIsExternal ? "_blank" : undefined}
                  rel={liveIsExternal ? "noreferrer noopener" : undefined}
                >
<<<<<<< HEAD
                  Ver exemplo
=======
                  Ver demonstração
>>>>>>> ab482e6 (corrigindo erro de mostragem de projeto)
                  <ArrowUpRight size={14} />
                </Button>
              ) : null}
              {project.repositoryUrl ? (
                <Button
                  href={project.repositoryUrl}
                  variant="outline"
                  size="sm"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Code2 size={14} /> Ver código
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl" id="demo">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8">
            <Card>
              <h2 className="text-2xl font-semibold text-foreground">O desafio</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-foreground">A solução</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-foreground">Como funciona</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
<<<<<<< HEAD
                Esta página apresenta o projeto demonstrativo com foco em entrega rápida, navegação
                simples e resultados que ajudam pequenos negócios a tomar decisão.
=======
                Este projeto demonstrativo reúne a proposta de pipeline de dados e dashboard
                executivo em uma experiência simples, com foco em clareza, rastreabilidade e
                validação automática.
>>>>>>> ab482e6 (corrigindo erro de mostragem de projeto)
              </p>
            </Card>
          </div>
          <div className="space-y-6">
<<<<<<< HEAD
            <img
              src={project.image}
              alt={`Imagem do projeto ${project.title}`}
              className="w-full rounded-3xl border border-border bg-surface object-cover shadow-sm"
            />
=======
            <Card className="overflow-hidden p-0">
              <div className="border-b border-border bg-surface-2/60 p-4">
                <h3 className="text-lg font-semibold text-foreground">Pré-visualização</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Uma visão rápida do conceito visual do projeto.
                </p>
              </div>
              {liveIsExternal ? (
                <div className="relative aspect-[800/500] w-full overflow-hidden bg-surface">
                  <iframe
                    src={project.liveUrl}
                    title={`Demonstração ao vivo de ${project.title}`}
                    className="absolute left-0 top-0 h-[142.85%] w-[142.85%] origin-top-left border-0"
                    style={{ transform: "scale(0.7)" }}
                    loading="lazy"
                  />
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={`Pré-visualização do projeto ${project.title}`}
                  className="block aspect-[800/500] w-full border-0 bg-surface object-cover"
                />
              )}
            </Card>
>>>>>>> ab482e6 (corrigindo erro de mostragem de projeto)
            <Card>
              <h3 className="text-lg font-semibold text-foreground">Tecnologias usadas</h3>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                {project.technologies.map((tech) => (
                  <li key={tech} className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-wine-soft" aria-hidden="true" />
                    {tech}
                  </li>
                ))}
              </ul>
            </Card>
            <Button href="/" variant="ghost" size="sm">
              <ArrowLeft size={14} /> Voltar ao portfólio
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
