function authorBornIn1947(arr) {
  return arr.find((element) => element.author.birthYear === 1947).author.name;
}

module.exports = authorBornIn1947;
