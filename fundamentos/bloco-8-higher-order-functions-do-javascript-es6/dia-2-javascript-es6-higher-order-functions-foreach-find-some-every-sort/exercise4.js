function booksOrderedByReleaseYearDesc(arr) {
  return arr.sort((a, b) => b.releaseYear - a.releaseYear);
}

module.exports = booksOrderedByReleaseYearDesc;