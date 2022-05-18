function authorWith3DotsOnName(arr) {
  return arr.filter(book => 
    book.author.name[1] === '.' &&
    book.author.name[4] === '.' && 
    book.author.name[7] === '.')
  .map(book => book.name)
  .join('');
}

module.exports = authorWith3DotsOnName;
