const fizzbuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
};

module.exports = fizzbuzz;

const fizzbuzzUntil = (number) => {
  for (let i = 1; i <= number; i++) {
    console.log(fizzbuzz(i));
  }
};

fizzbuzzUntil(10);
