#!/usr/bin/env node
/**
 * 11_english(Loopla) → Workmate 정적 임베드 배포.
 *
 * 실서비스는 workmate.tools/loopla — Workmate 가 자기 public/loopla/ 를 정적으로
 * 서빙한다. 그래서 basePath 를 "/loopla" 로 빌드해 out/ 을 10_worktool/public/loopla/
 * 로 통째 교체한다. (github.io/vibe-english 는 deploy.yml 이 basePath=/vibe-english 로
 * 별도 빌드 — 같은 코드, basePath 만 다름.)
 *
 * 실행:  node scripts/deploy-to-worktool.mjs
 * 이후:  10_worktool 을 커밋/배포하면 workmate.tools/loopla 에 반영된다.
 *
 * 단일 앱(런타임 코스 전환) 구조:
 *   /loopla/ko = 영어 학습 / /loopla/en = 한국어 학습 / /loopla/zh = 중국어→한국어
 */
import { spawnSync } from "node:child_process";
import { rmSync, cpSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "out");
const dest = resolve(root, "..", "10_worktool", "public", "loopla");

console.log("▶ Building Loopla with basePath=/loopla ...");
const build = spawnSync("npm", ["run", "build"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
  env: { ...process.env, NEXT_PUBLIC_BASE_PATH: "/loopla" },
});
if (build.status !== 0) {
  console.error("✗ Build failed");
  process.exit(build.status ?? 1);
}
if (!existsSync(outDir)) {
  console.error("✗ out/ not found after build");
  process.exit(1);
}

console.log("▶ Replacing", dest);
if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(outDir, dest, { recursive: true });

console.log(
  "✓ Deployed to Workmate public/loopla.\n" +
    "  Next: commit & push 10_worktool to publish to workmate.tools/loopla",
);
