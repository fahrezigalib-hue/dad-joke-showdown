// Entry for make.fun bounty u-mfnakmal-dad-joke-showdown-1d2ce3e5:
// "Dad Joke Showdown" — one dad joke, at most 200 characters, written
// to /output/entry.txt. Deterministic: same bytes on every run.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I named my dog Six Miles, so every morning I can honestly tell people I walk Six Miles before breakfast.";

// The bounty gate accepts 1 to 200 characters; fail loudly rather than
// write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("wrote entry.txt");
