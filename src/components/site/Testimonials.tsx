import { Card } from "./ui";
import { SectionTitle } from "./SectionTitle";

const testimonials = [
  {
    quote:
      "Entregas claras e rápidas: consegui colocar meu serviço no ar com uma página que funciona no celular e no computador.",
    author: "Empreendedor local",
  },
  {
    quote:
      "A automação reduziu o tempo gasto em planilhas e me deu mais horas para atender clientes.",
    author: "Proprietário de loja pequena",
  },
  {
    quote:
      "O painel deixou nossos números fáceis de entender e mostrou onde vale mais a pena investir.",
    author: "Responsável por vendas",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Depoimentos"
          title="O que o público espera de um projeto claro e útil"
          description="Sem promessas vazias: um site, uma automação ou um dashboard deve gerar resultado e reduzir o esforço do dia a dia."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.quote} className="bg-surface/80">
              <p className="text-base leading-relaxed text-foreground">“{item.quote}”</p>
              <p className="mt-6 text-sm font-semibold text-wine-soft">{item.author}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
