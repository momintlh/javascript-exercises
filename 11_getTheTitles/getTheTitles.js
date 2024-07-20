const getTheTitles = function (books) {
  /* const a = [];

  for (let i = 0; i < books.length; i++) {
    a.push(books[i].title);
  }
  return a;

  */

  // using array.map():
  return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
