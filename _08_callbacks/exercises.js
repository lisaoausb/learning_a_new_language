const printHello = () => {
  return "Hey there!";
};

// setTimeout(() => {
//   console.log(printHello());
// }, 3000);

const executeAfterDelay = (seconds, action) => {
  setTimeout(() => {
    console.log(action());
  }, seconds * 1000);
};

executeAfterDelay(5, printHello);
executeAfterDelay(3, printHello);
executeAfterDelay(8, printHello);

const executeAfterDelay_better = (seconds, action) => {
  setTimeout(action(), seconds * 1000);
};

executeAfterDelay(5, printHello);
executeAfterDelay(3, printHello);
executeAfterDelay(8, printHello);
