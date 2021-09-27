const alphabetArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const indexOfA = alphabetArray.indexOf("a");
const indexOfE = alphabetArray.indexOf("e");
const indexOfI = alphabetArray.indexOf("i");
const indexOfO = alphabetArray.indexOf("o");
const indexOfU = alphabetArray.indexOf("u");

const nearestVowelOf = (letter) => {
  if (typeof letter !== "string" || letter.length > 1) return "Não é uma letra";

  switch (letter) {
    case "a":
      return "a";
    case "e":
      return "e";
    case "i":
      return "i";
    case "o":
      return "o";
    case "u":
      return "u";
  }

  const indexOfLetter = alphabetArray.indexOf(letter);

  const letterToA = Math.abs(indexOfLetter - indexOfA);
  const letterToE = Math.abs(indexOfLetter - indexOfE);
  const letterToI = Math.abs(indexOfLetter - indexOfI);
  const letterToO = Math.abs(indexOfLetter - indexOfO);
  const letterToU = Math.abs(indexOfLetter - indexOfU);

  const orderedDistance = [
    letterToA,
    letterToE,
    letterToI,
    letterToO,
    letterToU,
  ].sort((a, b) => a - b);

  switch (orderedDistance[0]) {
    case letterToA:
      return "a";
    case letterToE:
      return "e";
    case letterToI:
      return "i";
    case letterToO:
      return "o";
    case letterToU:
      return "u";
  }
};

console.log(nearestVowelOf("r"));
