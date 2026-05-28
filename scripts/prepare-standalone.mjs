import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const standaloneDir = path.join(root, ".next", "standalone");
const publicDir = path.join(root, "public");
const nextStaticDir = path.join(root, ".next", "static");
const standalonePublicDir = path.join(standaloneDir, "public");
const standaloneNextDir = path.join(standaloneDir, ".next");
const standaloneNextStaticDir = path.join(standaloneNextDir, "static");

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await exists(standaloneDir))) {
    throw new Error("Missing .next/standalone. Did you run `next build` with output:'standalone'?");
  }

  // Ensure fresh copies of *assets* (avoid stale files between builds).
  // Do NOT delete `.next/standalone/.next` entirely, as it can contain build metadata
  // required by the standalone server at runtime (e.g., BUILD_ID / manifests).
  await rm(standalonePublicDir, { recursive: true, force: true });
  await rm(standaloneNextStaticDir, { recursive: true, force: true });

  await mkdir(standalonePublicDir, { recursive: true });
  await mkdir(standaloneNextDir, { recursive: true });
  await mkdir(standaloneNextStaticDir, { recursive: true });

  if (await exists(publicDir)) {
    await cp(publicDir, standalonePublicDir, { recursive: true });
  }
  if (await exists(nextStaticDir)) {
    await cp(nextStaticDir, standaloneNextStaticDir, { recursive: true });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

