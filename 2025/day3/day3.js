import fs from "fs/promises";
const fileContents = await fs.readFile("./numbers.txt", "utf-8");
const battBanks = fileContents.trim().split("\n");

function findHighestDigit(arr) {
  let highest = 0;
  let sHighest = 0;
  let index = -1;
  let sIndex = -1;
  let finalNum = [];
  for (let fDigit = 0; fDigit < arr.length - 1; fDigit++) {
    if (arr[fDigit] > highest) {
      index = fDigit;
      highest = arr[fDigit];
    }
  }

  for (let sDigit = index; sDigit < arr.length; sDigit++) {
    if (arr[sDigit] > sHighest && sDigit !== index) {
      sIndex = sDigit;
      sHighest = arr[sDigit];
    }
  }
  finalNum = [highest, sHighest];

  return Number(finalNum.join(""));
}

function findHighest(battBanks) {
  let joltage = 0;
  for (let i = 0; i < battBanks.length; i++) {
    let numtoArr = battBanks[i]
      .split("")
      .map((ch) => parseInt(ch, 10))
      .filter((n) => !isNaN(n));
    let batteryNum = findHighestDigit(numtoArr);
    joltage += batteryNum;
  }
  console.log(joltage);
}

findHighest(battBanks);
