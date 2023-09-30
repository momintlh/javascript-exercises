const sumAll = function (start, end) {
  let sum = 0;

  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }

  if (typeof start != "number" || typeof end != "number" || start < 0) {
    return "ERROR";
  } else {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
