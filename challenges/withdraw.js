function withdraw(amount) {
  let amountAvailable = amount;
  const availableNotes = [100, 50, 20];
  const withdrawNotes = [];

  availableNotes.forEach((note) => {
    let counter = 0;
    while (amountAvailable > 0) {
      if (amountAvailable - note >= 0) {
        counter++;
        amountAvailable = amountAvailable - note;
      } else {
        break;
      }
    }
    withdrawNotes.push(counter);
  });

  return withdrawNotes;
}

console.log(withdraw(40));
