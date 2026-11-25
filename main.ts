// Fridge Roast: One Line, Biggest Laugh
// Writes a single roast line (<=200 chars) to /output/entry.txt.
// Deterministic: the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge's touchscreen froze during a firmware update — now it's a $3,000 night-light with strong opinions about my milk.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
