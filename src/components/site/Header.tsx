import { useEffect, useState } from "react";
import { Action } from "./ui";
import { profile } from "@/content/portfolio";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [headerOffset, setHeaderOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const ratio = Math.max(0, Math.min(1, 1 - scrollY / 120));
      setHeaderOpacity(ratio);
      setHeaderOffset((1 - ratio) * -24);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header
      style={{
        opacity: headerOpacity,
        transform: `translateY(${headerOffset}px)`,
      }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur transition-all duration-300"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 lg:px-10">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-wine font-mono text-sm font-semibold text-primary-foreground">
            PE
          </span>
          <span className="truncate font-display text-sm font-semibold tracking-tight">
            {profile.shortName}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Action href="#contato" size="sm">
            Vamos conversar
          </Action>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="rounded-md border border-border p-2 text-foreground transition-colors hover:border-wine-soft md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Menu móvel"
          className="border-t border-border bg-background px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Action href="#contato" size="sm" className="mt-3 w-full" onClick={() => setOpen(false)}>
            Vamos conversar
          </Action>
        </nav>
      ) : null}
    </header>
  );
}
