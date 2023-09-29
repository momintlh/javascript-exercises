const repeatString = function (repeatingString, noOfTimes) {
  let newString = "";

  if (noOfTimes < 0) return "ERROR";

  for (let index = 0; index < noOfTimes; index++) {
    newString += repeatingString;
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
