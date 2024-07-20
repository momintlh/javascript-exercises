const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  return array.reduce((total, item) => total + item, 0);
};

const multiply = function (array) {
  return array.reduce((total, item) => total * item);
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (x) {
  if (x === 0) return 1;

  let answer = 1;

  for (let i = 2; i <= x; i++) {
    answer *= i;
  }

  return answer;
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
