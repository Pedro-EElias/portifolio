import { Action } from "./ui";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_60%_20%,black,transparent)]"
      />
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-wine-soft">
            Desenvolvedor freelancer
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Transformo problemas do dia a dia em soluções digitais que funcionam.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Crio sites, automações e dashboards para pequenos negócios que querem economizar tempo,
            vender mais e tomar decisões com mais clareza.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Trabalho de forma simples, direta e com entregas objetivas, sem enrolação.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Action href="#projetos">
              Ver exemplos <ArrowRight size={16} />
            </Action>
            <Action href="#contato" variant="outline">
              Falar no WhatsApp
            </Action>
          </div>
        </div>
      </div>
    </section>
  );
}
