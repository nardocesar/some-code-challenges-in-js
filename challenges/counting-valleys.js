const countingValleys = (n, s) => {
  if (n !== s.length) return "Invalid record";

  let valleysCounter = 0,
    FarFromSeaLevel = 0,
    isInSeaLevel = true;
  const splittedSteps = s.split(""),
    hikeArr = [];

  for (let i = 0; i < n; i++) {
    splittedSteps[i].toLowerCase() === "u"
      ? FarFromSeaLevel++
      : FarFromSeaLevel--;
    hikeArr.push(FarFromSeaLevel);
  }

  for (let i = 0; i < n; i++) {
    if (hikeArr[i] === 0) {
      isInSeaLevel = true;
    }
    if (
      isInSeaLevel &&
      hikeArr[i] < 0 &&
      hikeArr[i + 1] &&
      hikeArr[i + 1] < 0
    ) {
      valleysCounter++;
      isInSeaLevel = false;
    }
  }

  return valleysCounter;
};

console.log(countingValleys(8, "UDDDUDUU"));
