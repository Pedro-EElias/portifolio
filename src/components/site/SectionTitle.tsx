import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2";

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
  as = "h2",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  as?: HeadingLevel;
}) {
  const HeadingTag = as;

  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-wine-soft">{eyebrow}</p>
      <HeadingTag className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</HeadingTag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
