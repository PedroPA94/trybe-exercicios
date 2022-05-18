function getNamedBook(arr) {
  return arr.find((element) => element.name.length === 26);
}

module.exports = getNamedBook;
