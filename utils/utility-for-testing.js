const uppercaseString = (text) => {
  return new Promise((resolve, reject) => {
    if (!text) {
      reject("Empty string");
      return;
    }
    resolve(text.toUpperCase());
  });
};

const sum = (a, b) => a + b

const multiply = (a, b) => a * b

const subtract = (a, b) => a - b

const divide = (a, b) => a / b

const palindrome = (string) => {
  if (typeof string === "undefined") return;
  return string.split("").reverse().join("");
};

const average = (array) => {
  let sum = 0;
  array.forEach((num) => {
    sum += num;
  });
  return sum / array.length;
};

module.exports = {
  palindrome,
  average,
  sum,
  multiply,
  subtract,
  divide,
  uppercaseString,
};
