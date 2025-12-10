import fs from "fs/promises";
let puzzleInput = await fs.readFile("./puzzleInput.txt", "utf-8");

puzzleInput = puzzleInput.replace(/\r\n/g, "\n"); // normalize

function findFreshIngredients(puzzleInput) {
  let parts = puzzleInput.split(/\n\s*\n/).map((p) => p.trim());

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
  console.log(count);
}

findFreshIngredients(puzzleInput);
