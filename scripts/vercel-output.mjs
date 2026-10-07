// Newer nitro versions write the Vercel preset output into dist/ (dist/config.json,
// dist/client, dist/server). Vercel only deploys from .vercel/output, so on Vercel
// builds we assemble the Build Output API layout from it. No-op everywhere else.
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";

if (!process.env.VERCEL) process.exit(0);

if (!existsSync("dist/config.json") || !existsSync("dist/server") || !existsSync("dist/client")) {
  console.log("[vercel-output] dist/ is not in the expected nitro vercel layout, skipping");
  process.exit(0);
}

const out = ".vercel/output";
rmSync(out, { recursive: true, force: true });
mkdirSync(`${out}/functions`, { recursive: true });
cpSync("dist/config.json", `${out}/config.json`);
cpSync("dist/client", `${out}/static`, { recursive: true });
cpSync("dist/server", `${out}/functions/__server.func`, { recursive: true });
console.log("[vercel-output] assembled .vercel/output");
