import { Action, Card, Section, SectionHeading } from "./ui";
import { ProjectGrid } from "./ProjectGrid";
import { services, steps, profile } from "@/content/portfolio";
import { projects } from "@/data/projects";
import {
  LayoutTemplate,
  Workflow,
  BarChart3,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
} from "lucide-react";

const icons = { layout: LayoutTemplate, workflow: Workflow, chart: BarChart3 };

export function Services() {
  return (
    <Section id="servicos">
      <SectionHeading
        eyebrow="Serviços"
        title="Três formas de destravar a rotina do seu negócio"
        description="Trabalho com escopo claro e entregas objetivas. Você entende o que será feito, quanto tempo leva e o que muda na prática."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {services.map((s) => {
          const Icon = icons[s.icon];
          return (
            <Card key={s.title} className="flex flex-col">
              <Icon size={22} className="text-wine-soft" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <p className="mt-5 border-t border-border pt-4 text-sm text-foreground/90">
                {s.benefit}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projetos">
      <SectionHeading
        eyebrow="Projetos"
        title="Exemplos de projetos"
        description="Os exemplos abaixo mostram como eu resolvo problemas reais de pequenos negócios com soluções claras, simples e fáceis de usar."
      />
      <ProjectGrid projects={projects} />
    </Section>
  );
}

export function Process() {
  return (
    <Section id="processo" className="bg-surface/40">
      <SectionHeading
        eyebrow="Processo"
        title="Um processo simples, direto e sem enrolação"
        description="Cada etapa tem começo e fim definidos, para você acompanhar o projeto com tranquilidade."
      />
      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title}>
            <Card className="h-full">
              <span className="font-mono text-sm text-wine-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function About() {
  return (
    <Section id="sobre">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <SectionHeading eyebrow="Sobre" title={`Olá, sou ${profile.name}.`} />
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Sou desenvolvedor freelancer e crio soluções digitais para pequenos negócios que
            precisam de praticidade, organização e mais clareza no dia a dia.
          </p>
          <p>
            Eu gosto de entender o problema antes de montar qualquer solução. Muitas vezes, o ganho
            não está em “mais tecnologia”, mas em remover esforço desnecessário.
          </p>
          <p>
            Trabalho com comunicação direta, prazos claros e entregas objetivas, para que você saiba
            exatamente o que está sendo feito e por quê.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contato">
      <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
        <SectionHeading
          eyebrow="Contato"
          title="Tem um processo que pode ser melhorado?"
          description="Me conte em poucas linhas o que está travando seu dia a dia. Eu respondo com uma proposta simples, objetiva e sem compromisso."
        />
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Action href={profile.whatsapp} target="_blank" rel="noreferrer noopener">
            <MessageCircle size={16} /> WhatsApp
          </Action>
          <Action href={`mailto:${profile.email}`} variant="outline">
            <Mail size={16} /> E-mail
          </Action>
          <Action href={profile.github} variant="outline" target="_blank" rel="noreferrer noopener">
            <Github size={16} /> GitHub
          </Action>
          <Action
            href={profile.linkedin}
            variant="outline"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Linkedin size={16} /> LinkedIn
          </Action>
        </div>
        <p className="mt-8 font-mono text-xs text-muted-foreground">
          {profile.phone} · {profile.email}
        </p>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.role}</p>
      </div>
    </footer>
  );
}
