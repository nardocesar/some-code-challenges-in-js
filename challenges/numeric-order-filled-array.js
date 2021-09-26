const buildOrder = (number) => {
  if (number === 0) return [];

  const mainArray = new Array(number).fill(new Array(number).fill(0));

  const arrayToShow = mainArray.map((arr, mainIndex) =>
    arr.map((item, index) => {
      return mainIndex * number + (index + 1);
    })
  );

  return arrayToShow;
};

console.log(buildOrder(6));
