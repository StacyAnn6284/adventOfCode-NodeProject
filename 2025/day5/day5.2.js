// import fs from "fs/promises";
// let puzzleInput = await fs.readFile("./puzzleInput.txt", "utf-8");

let puzzleInput = `3-5
10-14
16-20
12-18


1
5
8
11
17
32
`;

puzzleInput = puzzleInput.replace(/\r\n/g, "\n"); // normalize
let parts = puzzleInput.split(/\n\s*\n/).map((p) => p.trim());

let ranges = parts[0].split("\n").map((p) => p.trim());
let freshRanges = ranges.map((r) => {
  let [start, end] = r.split("-").map((x) => BigInt(x.trim()));
  return { start, end };
});

function checkingforMultiples(freshRanges) {
  for (let bigInt of freshRanges) {
    //if bigInt falls completely within another remove from array
    //if there's some overlap, replace start and end and remove one of the bigInts
    //if there's no overlap, leave as is
  }
}

checkingforMultiples(freshRanges);
