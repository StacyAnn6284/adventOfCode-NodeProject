import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "numbers.txt");
const fileContents = await fs.readFile(filePath, "utf-8");
const battBanks = fileContents.trim().split("\n");

function findHighestDigit(battBanks) {
  let highest = 0;
  let sHighest = 0;
  let index = -1;
  let sIndex = -1;
  let finalNum = [];
  for (let fDigit = 0; fDigit < battBanks.length - 1; fDigit++) {
    if (battBanks[fDigit] > highest) {
      index = fDigit;
      highest = battBanks[fDigit];
    }
  }

  for (let sDigit = index; sDigit < battBanks.length; sDigit++) {
    if (battBanks[sDigit] > sHighest && sDigit !== index) {
      sIndex = sDigit;
      sHighest = battBanks[sDigit];
    }
  }
  finalNum = [highest, sHighest];

  return Number(finalNum.join(""));
}

export function solve(arr = battBanks) {
  let joltage = 0;
  for (let i = 0; i < arr.length; i++) {
    let numtoArr = arr[i]
      .split("")
      .map((ch) => parseInt(ch, 10))
      .filter((n) => !isNaN(n));
    let batteryNum = findHighestDigit(numtoArr);
    joltage += batteryNum;
  }
  return joltage;
}
