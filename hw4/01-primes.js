const getPrimes = () => {
  // Add your code here
  for (var number = 1; number <= 100; number = number + 1) {
    var divider = 0;
    for (var divisor = 1; divisor <= number; divisor = divisor + 1) {
      if (number % divisor === 0) {
        divider = divider + divisor;
      }
    }
    if (divider === number + 1) {
      console.log(number);
    }
  }
};

getPrimes();
