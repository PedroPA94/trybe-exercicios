function hydrate(string) {
  let counter = 0;
  for (let char of string) {
    if (parseInt(char, 10)) {
      counter += parseInt(char, 10);
    }
  }
  if (counter === 1) { return '1 copo de água'; }
  return counter + ' copos de água';
}

module.exports = hydrate;
