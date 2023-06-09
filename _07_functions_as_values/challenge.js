const notifyByEmail = (email) => {
  return "Email sent to: " + email;
};

const notifyByText = (number) => {
  return "Text sent to: " + number;
};

const notify = (string, type) => {
  return type(string);
};

console.log(notify("hello@makers.tech.test", notifyByEmail));
console.log(notify("+10000000000", notifyByText));
