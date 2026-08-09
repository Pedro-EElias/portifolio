import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Build target: Nitro's zero-config detection picks the right preset for
// Vercel automatically during `vercel deploy` / Git-based deploys. For other
// hosts, pass an explicit preset, e.g. nitro({ preset: "cloudflare-module" }),
// nitro({ preset: "node-server" }), etc. See https://nitro.build/deploy
export default defineConfig({
  resolve: {
    alias: { "@": `${process.cwd()}/src` },
  },
  css: { transformer: "lightningcss" },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    nitro(),
    viteReact(),
  ],
});
