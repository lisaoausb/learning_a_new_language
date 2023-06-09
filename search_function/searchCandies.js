const candies = [
  { name: "Aero", price: 1.99 },
  { name: "Skitties", price: 2.99 },
  { name: "Mars", price: 1.49 },
  { name: "Maltesers", price: 3.49 },
  { name: "Skittles", price: 1.49 },
  { name: "Starburst", price: 5.99 },
  { name: "Ricola", price: 1.99 },
  { name: "Polkagris", price: 5.99 },
  { name: "Pastila", price: 4.99 },
  { name: "Mentos", price: 8.99 },
  { name: "Raffaello", price: 7.99 },
  { name: "Gummi bears", price: 10.99 },
  { name: "Fraise Tagada", price: 5.99 },
];

const searchCandies = (name, price) => {
  // Several steps

  // const candy_prices = candies.filter((candy) => candy["price"] < price);
  // console.log(candy_prices);
  // const candy_names = candy_prices.filter((candy) =>
  //   candy["name"].startsWith(name)
  // );
  // console.log(candy_names);

  // Chained:

  const matches = candies
    .filter((candy) => candy["price"] < price)
    .filter((candy) =>
      candy["name"].toLowerCase().startsWith(name.toLowerCase())
    );
  console.log(matches);

  const return_array = matches.map(({ name, price }) => name);
  console.log(return_array);
  return return_array;
};

module.exports = searchCandies;
