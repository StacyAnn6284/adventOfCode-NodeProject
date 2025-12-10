// let idsToCheck = ["11-22", "95-115", "998-1012", "1188511880-1188511890", "222220-222224",
// "1698522-1698528", "446443-446449", "38593856-38593862", "565653-565659",
// "824824821-824824827" , "2121212118-2121212124"]

let myInput = [
  "197-407",
  "262128-339499",
  "557930-573266",
  "25-57",
  "92856246-93001520",
  "2-12",
  "1919108745-1919268183",
  "48414903-48538379",
  "38342224-38444598",
  "483824-534754",
  "1056-1771",
  "4603696-4688732",
  "75712519-75792205",
  "20124-44038",
  "714164-782292",
  "4429019-4570680",
  "9648251-9913729",
  "6812551522-6812585188",
  "58-134",
  "881574-897488",
  "648613-673853",
  "5261723647-5261785283",
  "60035-128980",
  "9944818-10047126",
  "857821365-857927915",
  "206885-246173",
  "1922-9652",
  "424942-446151",
  "408-1000",
];

export function solve(idsToCheck = myInput) {
  let fullArrayofIds = [];
  let finalNumber = 0;
  for (let i = 0; i < idsToCheck.length; i++) {
    let numbers = idsToCheck[i].split("-");
    let firstId = Number(numbers[0]);
    let lastId = Number(numbers[1]);
    let j = firstId;
    while (j <= lastId) {
      fullArrayofIds.push(j);
      j++;
    }
  }

  for (let i = 0; i < fullArrayofIds.length; i++) {
    let numberToTest = fullArrayofIds[i];
    let numberAsArr = String(numberToTest).split("").map(Number);
    let digitLength = numberAsArr.length / 2;

    let firstHalf = numberAsArr.slice(0, digitLength);
    let secondHalf = numberAsArr.slice(digitLength);

    if (firstHalf.join("") === secondHalf.join("")) {
      finalNumber += numberToTest;
    }
  }
  return finalNumber;
}
