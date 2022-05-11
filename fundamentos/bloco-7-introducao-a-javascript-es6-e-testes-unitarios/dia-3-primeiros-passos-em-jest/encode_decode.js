function encode(string) {
  let vowelsCode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let encodedString = string.split('');
  for (let index in string) {
    if (string[index] in vowelsCode) {
      encodedString[index] = vowelsCode[string[index]];
    }
  }
  return encodedString.join('');
}

function decode(string) {
  let vowelsCode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodedString = string.split('');
  for (let index in string) {
    if (string[index] in vowelsCode) {
      decodedString[index] = vowelsCode[string[index]];
    }
  }
  return decodedString.join('');
}

module.exports = { encode, decode };
