import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "input.txt");
const paperRolls = await fs.readFile(filePath, "utf-8");

let grid = paperRolls.split("\n").map((line) => line.split(""));
let rollCount = 0;
let repeat = true;
let cell = "";

function badElves4(grid) {
  repeat = false;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      let neighbors = 0;
      cell = grid[row][column];
      if (cell === "@") {
        //check top left
        if (
          grid[row - 1]?.[column - 1] === "@" ||
          grid[row - 1]?.[column - 1] === "x"
        ) {
          neighbors++;
        }
        //check top
        if (
          grid[row - 1]?.[column] === "@" ||
          grid[row - 1]?.[column] === "x"
        ) {
          neighbors++;
        }
        //check top right
        if (
          grid[row - 1]?.[column + 1] === "@" ||
          grid[row - 1]?.[column + 1] === "x"
        ) {
          neighbors++;
        }
        //check left
        if (
          grid[row]?.[column - 1] === "@" ||
          grid[row]?.[column - 1] === "x"
        ) {
          neighbors++;
        }
        //check right
        if (
          grid[row]?.[column + 1] === "@" ||
          grid[row]?.[column + 1] === "x"
        ) {
          neighbors++;
        }
        //check bottom left
        if (
          grid[row + 1]?.[column - 1] === "@" ||
          grid[row + 1]?.[column - 1] === "x"
        ) {
          neighbors++;
        }
        //check bottom
        if (
          grid[row + 1]?.[column] === "@" ||
          grid[row + 1]?.[column] === "x"
        ) {
          neighbors++;
        }
        //check bottom right
        if (
          grid[row + 1]?.[column + 1] === "@" ||
          grid[row + 1]?.[column + 1] === "x"
        ) {
          neighbors++;
        }
        if (neighbors < 4) {
          //temp change removable rolls to x
          grid[row][column] = "x";
          rollCount++;
          repeat = true;
        }
      }
    }
  }
  let cleanedGrid = grid.map((row) => row.map((ch) => (ch === "x" ? "." : ch)));
  return {
    repeat,
    cleanedGrid,
    rollCount,
  };
}

export function solve() {
  while (repeat) {
    let recursive = badElves4(grid);
    grid = recursive.cleanedGrid;
    repeat = recursive.repeat;
    rollCount = recursive.rollCount;
  }
  return rollCount;
}
