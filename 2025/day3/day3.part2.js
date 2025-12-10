import fs from "fs/promises";
const fileContents = await fs.readFile("./numbers.txt", "utf-8");
const battBanks = fileContents.trim().split("\n");

function findHighestDigit(arr, startingIndex, endingIndex) {
  let highest = 0;
  let highestIndex = -1;

  for (let digit = startingIndex; digit < arr.length - endingIndex; digit++) {
    if (arr[digit] > highest) {
      highest = arr[digit];
      highestIndex = digit;
    }
  }
  return {
    value: highest,
    index: highestIndex,
  };
}

function findHighest(battBanks) {
  let joltage = 0;

  for (let i = 0; i < battBanks.length; i++) {
    let numtoArr = battBanks[i]
      .split("")
      .map((ch) => parseInt(ch, 10))
      .filter((n) => !isNaN(n));

    let batteryNumasArr = [];
    let loop = 0;
    let endingIndex = 11;
    let startingIndex = 0;
    do {
      let result = findHighestDigit(numtoArr, startingIndex, endingIndex);
      batteryNumasArr.push(result.value);
      startingIndex = result.index + 1;
      endingIndex--;
      loop++;
    } while (loop < 12);
    let batteryNum = parseInt(batteryNumasArr.join(""), 10);
    joltage += batteryNum;
  }
  console.log("final joltage: ", joltage);
}

findHighest(battBanks);
