import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "puzzleInput.txt");
let input = await fs.readFile(filePath, "utf-8");

let removeEndings = input.replace(/\r\n/g, "\n");
let problems = removeEndings
  .trim()
  .split("\n")
  .map((line) => line.trim().split(/\s+/));

export function solve(math = problems) {
  let grandTotal = 0n;
  for (let col = 0; col < problems[0].length; col++) {
    const column = [];
    let total = 0n;
    for (let row = 0; row < problems.length; row++) {
      column.push(problems[row][col]);
    }
    let operand = column[column.length - 1];
    total = 0n;
    for (let i = 0; i < column.length - 1; i++) {
      if (operand === "*") {
        total = total === 0n ? BigInt(column[i]) : total * BigInt(column[i]);
      }
      if (operand === "+") {
        total += BigInt(column[i]);
      }
    }
    grandTotal += total;
  }
  return Number(grandTotal);
}
