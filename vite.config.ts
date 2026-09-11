// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Force the Vercel output preset. Without this, nitro relies on its own
  // auto-detection to notice it's running on Vercel, which requires
  // nitro >= 3.0.260603-beta. This project is pinned to 3.0.260429-beta,
  // so auto-detection silently falls back to a plain Node build that
  // Vercel can't route — causing 404s on every page.
  nitro: {
    preset: "vercel",
  },
});
