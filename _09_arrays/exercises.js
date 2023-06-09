let names = ["Kate", "Lisa", "Yousef", "Afzaa"];

console.log(names.length);

console.log(names[1]);

let new_names = names.concat("Hamad");
console.log(new_names);

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
oneToTen.forEach((number) => {
  sum += number;
});
console.log(sum);

const addToBatch = (array, number) => {
  if (array.length >= 5) {
    console.log(array);
  } else {
    console.log(array.concat(number));
  }
};

addToBatch([1], 3);
// [ 1, 3 ]

addToBatch([1, 2, 3], 4);
// [ 1, 2, 3, 4 ]

addToBatch([], 8);
// [ 8 ]

addToBatch([1, 2, 3, 4, 5, 6], 7);
// [ 1, 2, 3, 4, 5, 6 ]

addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
