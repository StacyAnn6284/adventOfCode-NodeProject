import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "puzzleinput.txt");
const beams = await fs.readFile(filePath, "utf-8");

export function solve(
  grid = beams.split("\n").map((str) => str.replace(/\r$/, ""))
) {
  let beamCount = 0;
  let beamedGrid = grid.map((row) => row.split(""));
  for (let row = 0; row < beamedGrid.length; row++) {
    for (let column = 0; column < beamedGrid[row].length; column++) {
      let cell = beamedGrid[row][column];
      //if cell is "." and above is "S" - change to "|"
      if (cell === "." && beamedGrid[row - 1]?.[column] === "S") {
        beamedGrid[row][column] = "|";
      }
      //if cell is "." and above is "|" - change to "|"
      if (cell === "." && beamedGrid[row - 1]?.[column] === "|") {
        beamedGrid[row][column] = "|";
      }
      //if cell is "^" and cell above is "|" - add to beamCount and make before and after "|"
      if (cell === "^" && beamedGrid[row - 1]?.[column] === "|") {
        beamCount++;
        beamedGrid[row][column - 1] = "|";
        beamedGrid[row][column + 1] = "|";
      }
      //if cell "." & cell above is "." or "^" - do nothing
    }
  }
  return beamCount;
}
