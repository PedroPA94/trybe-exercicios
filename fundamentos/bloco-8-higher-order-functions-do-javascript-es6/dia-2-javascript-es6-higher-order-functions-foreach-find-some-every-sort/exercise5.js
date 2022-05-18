function everyoneWasBornOnSecXX(arr) {
  return arr.every((element) => element.author.birthYear >= 1901 && element.author.birthYear <= 2000);
}

module.exports = everyoneWasBornOnSecXX;