import type { Project } from "@/data/projects";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { Card } from "./ui";
import { ArrowUpRight, Code2 } from "lucide-react";

const isExternal = (url: string) => /^https?:\/\//.test(url);

export function ProjectCard({ project }: { project: Project }) {
  const hasLive = Boolean(project.liveUrl);
  const hasRepo = Boolean(project.repositoryUrl);
  const liveIsExternal = hasLive && isExternal(project.liveUrl);

  return (
    <Card className="flex flex-col">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {project.category}
        </span>
        {project.status ? <Badge>{project.status}</Badge> : null}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {project.shortDescription}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap">
        {hasLive ? (
          <Button
            href={project.liveUrl}
            variant="solid"
            size="sm"
            target={liveIsExternal ? "_blank" : undefined}
            rel={liveIsExternal ? "noreferrer noopener" : undefined}
          >
            Ver exemplo
            <ArrowUpRight size={14} />
          </Button>
        ) : null}
        {hasRepo ? (
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
    </Card>
  );
}
