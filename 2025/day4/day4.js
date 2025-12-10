import fs from "fs/promises";
const paperRolls = await fs.readFile("./input.txt", "utf-8");

function badElves4(grid) {
  let rollCount = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      let neighbors = 0;
      let cell = grid[row][column];
      if (cell === "@") {
        //check top left
        if (grid[row - 1]?.[column - 1] === "@") {
          neighbors++;
        }
        //check top
        if (grid[row - 1]?.[column] === "@") {
          neighbors++;
        }
        //check top right
        if (grid[row - 1]?.[column + 1] === "@") {
          neighbors++;
        }
        //check left
        if (grid[row]?.[column - 1] === "@") {
          neighbors++;
        }
        //check right
        if (grid[row]?.[column + 1] === "@") {
          neighbors++;
        }
        //check bottom left
        if (grid[row + 1]?.[column - 1] === "@") {
          neighbors++;
        }
        //check bottom
        if (grid[row + 1]?.[column] === "@") {
          neighbors++;
        }
        //check bottom right
        if (grid[row + 1]?.[column + 1] === "@") {
          neighbors++;
        }
        if (neighbors < 4) {
          rollCount++;
        }
      }
    }
  }
  console.log(rollCount);
  return rollCount;
}

badElves4(paperRolls.split("\n"));
