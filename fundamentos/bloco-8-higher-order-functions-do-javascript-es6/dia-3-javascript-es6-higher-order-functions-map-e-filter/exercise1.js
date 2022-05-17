function formatedBookNames(arr) {
  return arr.map(book => `${book.name} - ${book.genre} - ${book.author.name}`);
}

module.exports = formatedBookNames;
