const pyramid = (number) => {
  let stringToShow = "";

  for (let rowIndex = 1; rowIndex <= number; rowIndex++) {
    const numberOfCharacters = number * 2 - 1;
    for (let strIndex = 1; strIndex <= numberOfCharacters; strIndex++) {
      const start = number - rowIndex;
      const end = numberOfCharacters - start;

      strIndex > start && strIndex <= end
        ? (stringToShow += "*")
        : (stringToShow += " ");
    }

    if (rowIndex < number) stringToShow += "\n";
  }

  return stringToShow;
};

console.log(pyramid(4));
