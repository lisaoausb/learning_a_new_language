const person = {
  name: "Maxine",
  age: 32,
  address: {
    city: "London",
    postcode: "E1 123",
  },
  hobbies: ["writing", "tennis", "cooking"],
};

// Print the value of the city attribute ('London').
// person['address']['city']

// Print the value of the second hobbies value ('tennis').
// person['hobbies'][1]

const cohort = {
  name: "May2022",
  id: 1234,
  students: ["Lisa", "Kate", "Yousef", "Afzaa"],
};

const print_cohort = (cohort_object) => {
  console.log(
    `${cohort_object["id"]} – ${cohort_object["name"]} – ${cohort_object["students"].length} students in this cohort`
  );
};

let solution = console.log(print_cohort(cohort));
