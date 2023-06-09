// Exercise 1

const checkLength = (number) => {
  if (number.length <= 10) {
    return true;
  } else {
    return false;
  }
};

const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
};

const numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
];

console.log(filterLongNumbers(numbers));
//   [ '1763687364', '4763687363', '7867867862' ]

console.log(filterLongNumbers(["4763687363", "7867867862"])); // no number to filter out
//   [ '4763687363', '7867867862' ]

console.log(filterLongNumbers([]));
//   [ ]

// Exercise 2

const names = ["Anna", "Laura", "Josh", "Min", "Karla"];

const generateMessages = (names_object) => {
  return names_object.map(
    (name) => `Hi ${name}! 50% off our best candies for you today!`
  );
};

console.log(generateMessages(names));

// Challenge

// An array of objects!
const namesAndDiscounts = [
  { name: "Anna", discount: 50 },
  { name: "Laura", discount: 40 },
  { name: "Josh", discount: 30 },
  { name: "Min", discount: 50 },
  { name: "Karla", discount: 60 },
];

const generateMessagesWithDiscounts = (names_discounts) => {
  return names_discounts.map(
    ({ name, discount }) =>
      `Hi ${name}! ${discount}% off our best candies for you today!`
  );
};

console.log(generateMessagesWithDiscounts(namesAndDiscounts));
