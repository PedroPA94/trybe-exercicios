function oldBooksOrdered(arr) {
 return arr.filter(book => 2022 - book.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear);
}

module.exports = oldBooksOrdered;
