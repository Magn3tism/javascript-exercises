const add = function (a = 0, b = 0) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

const multiply = function (arr) {
  let mult = 1;
  for (let i = 0; i < arr.length; i++) {
    mult *= arr[i];
  }

  return mult;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
