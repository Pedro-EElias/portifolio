import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ActionProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md";
};

export function Action({
  variant = "solid",
  size = "md",
  className,
  children,
  ...props
}: ActionProps) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200",
        size === "sm" ? "px-4 py-2 text-sm" : "px-5 py-3 text-sm",
        variant === "solid" && "bg-wine text-primary-foreground hover:bg-wine-soft",
        variant === "outline" &&
          "border border-border text-foreground hover:border-wine-soft hover:text-wine-soft",
        variant === "ghost" && "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-wine-soft">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("border-t border-border px-6 py-20 sm:py-28 lg:px-10", className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.03),0_18px_40px_-30px_rgba(0,0,0,0.9)] transition-colors duration-200 hover:border-wine-soft/50",
        className,
      )}
    >
      {children}
    </div>
  );
}
