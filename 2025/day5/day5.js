import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "puzzleInput.txt");
let puzzleInput = await fs.readFile(filePath, "utf-8");

let lines = puzzleInput.replace(/\r\n/g, "\n"); // normalize

export function solve(arr = lines) {
  let parts = arr.split(/\n\s*\n/).map((p) => p.trim());

  let ranges = parts[0].split("\n").map((p) => p.trim());
  let ingredients = parts[1].split("\n").map((p) => p.trim());

  let freshRanges = ranges.map((r) => {
    let [start, end] = r.split("-").map((x) => BigInt(x.trim()));
    return { start, end };
  });

  let count = 0;
  for (let ingredient of ingredients) {
    let ID = BigInt(ingredient);
    for (let { start, end } of freshRanges) {
      if (ID >= start && ID <= end) {
        count++;
        break;
      }
    }
  }
  return count;
}
