// Break Production, Own It — the line an AI agent prints the instant it breaks production.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, single line.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I renamed one variable. The database heard a different name, and every order since lunch belongs to nobody.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
