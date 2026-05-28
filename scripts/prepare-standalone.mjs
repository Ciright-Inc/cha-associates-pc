import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const standaloneDir = path.join(root, ".next", "standalone");
const publicDir = path.join(root, "public");
const nextStaticDir = path.join(root, ".next", "static");
const standalonePublicDir = path.join(standaloneDir, "public");
const standaloneNextStaticDir = path.join(standaloneDir, ".next", "static");

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

  // Ensure fresh copies (avoids stale assets between builds).
  await rm(standalonePublicDir, { recursive: true, force: true });
  await rm(path.join(standaloneDir, ".next"), { recursive: true, force: true });

  await mkdir(standalonePublicDir, { recursive: true });
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

