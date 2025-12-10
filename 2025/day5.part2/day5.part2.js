import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "puzzleInput.txt");
let puzzleInput = await fs.readFile(filePath, "utf-8");

puzzleInput = puzzleInput.replace(/\r\n/g, "\n"); // normalize
let parts = puzzleInput.split(/\n\s*\n/).map((p) => p.trim());

let ranges = parts[0].split("\n").map((p) => p.trim());
let lines = ranges.map((r) => {
  let [start, end] = r.split("-").map((x) => BigInt(x.trim()));
  return { start, end };
});

export function solve(freshRanges = lines) {
  let ranges = [...freshRanges].sort((a, b) => {
    if (a.start < b.start) return -1;
    if (a.start > b.start) return 1;
    return 0;
  });
  const merged = [];
  for (const r of ranges) {
    if (!merged.length) {
      merged.push({ ...r });
      continue;
    }

    const last = merged[merged.length - 1];

    if (r.start <= last.end) {
      if (r.end > last.end) {
        last.end = r.end;
      }
    } else {
      merged.push({ ...r });
    }
  }
  let count = 0n;
  for (let range of merged) {
    count += range.end - range.start + 1n;
  }

  return Number(count);
}
