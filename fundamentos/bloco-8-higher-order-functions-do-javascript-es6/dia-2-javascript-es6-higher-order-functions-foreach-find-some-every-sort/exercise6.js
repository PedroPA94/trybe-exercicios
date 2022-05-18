function someBookWasReleaseOnThe80s(arr) {
  return arr.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989);
}

module.exports = someBookWasReleaseOnThe80s;
