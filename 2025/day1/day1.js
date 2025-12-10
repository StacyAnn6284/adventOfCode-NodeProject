import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filePath = path.join(__dirname, "numbers.txt");
const fileContents = await fs.readFile(filePath, "utf-8");
const lines = fileContents.trim().split("\n");

export function solve(numbers) {
  const input = numbers ?? lines;
  let startingPoint = 50;
  let zeroCount = 0;
  for (let i = 0; i < input.length; i++) {
    let RorL = input[i].charAt(0);
    let numberPortion = Number(input[i].slice(1));

    if (RorL === "R") {
      startingPoint += numberPortion;
    } else if (RorL === "L") {
      startingPoint -= numberPortion;
    }

    if (startingPoint === 0 || startingPoint % 100 === 0) {
      zeroCount += 1;
    }
  }
  let result = zeroCount;
  return result;
}
