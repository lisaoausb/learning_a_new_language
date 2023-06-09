const getNumberSign = (number) => {
  if (number === 0) {
    return "zero";
  } else if (number <= 0) {
    return "negative";
  } else {
    return "positive";
  }
};

const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length === validLength) {
    return true;
  } else {
    return false;
  }
};

module.exports = getNumberSign;
module.exports = isValidLength;
