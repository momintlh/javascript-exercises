const reverseString = function (word) {
  let newString = "";

  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;

  // or return word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
