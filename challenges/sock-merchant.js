const sockMerchant = (n, ar) => {
  let numberOfPairs = 0;
  const sockColors = [];

  const ArisValid = n === ar.length ? true : false,
    NisValid = n >= 1 && n <= 100 ? true : false;

  if (ArisValid && NisValid) {
    for (let i = 0; i < ar.length; i++) {
      if (sockColors.length === 0) {
        sockColors.push(ar[i]);
      } else {
        const sockIsInArray = sockColors.findIndex((sock) => sock === ar[i]);
        if (sockIsInArray === -1) {
          sockColors.push(ar[i]);
        }
      }
    }

    sockColors.forEach((color) => {
      let numberOfSocks = ar.filter((sock) => sock === color);
      numberOfPairs += parseInt(numberOfSocks.length / 2);
    });

    return numberOfPairs;
  } else {
    return 0;
  }
};

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
