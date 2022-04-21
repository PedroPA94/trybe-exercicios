// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let aux = [array[array.length - 1], array[0]];
  return aux.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let greatestNumber = array[0];
  let count = 0;
  for (let number of array) {
    if (number > greatestNumber) {
      greatestNumber = number;
      count = 1;
    } else if (number === greatestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  let results = [];
  for (let number of array) {
    if (number % 3 === 0 && number % 5 === 0) {
      results.push('fizzBuzz');
    } else if (number % 3 === 0) {
      results.push('fizz');
    } else if (number % 5 === 0) {
      results.push('buzz');
    } else {
      results.push('bug!');
    }
  }
  return results;
}

// Desafio 9
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

// Desafio 10
function techList(tech, name) {
  let results = [];
  tech = tech.sort();
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let word of tech) {
    results.push({ tech: word, name });
  }
  return results;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
