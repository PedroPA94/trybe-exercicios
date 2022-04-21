// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = ['(', '', '', ')', ' ', '', '', '', '', '', '-', '', '', '', ''];
  let numberCounter = {};
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let number of array) {
    if (number in numberCounter) {
      numberCounter[number] += 1;
    } else {
      numberCounter[number] = 1;
    }
    if (number > 9 || number < 0 || numberCounter[number] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    phoneNumber[phoneNumber.indexOf('')] = number;
  }
  return phoneNumber.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sides = [lineA, lineB, lineC];
  let sidesDiff = [lineB - lineC, lineA - lineC, lineA - lineB];
  let sum = lineA + lineB + lineC;
  for (let side of sides) {
    if (side > sum - side || side < Math.abs(sidesDiff[sides.indexOf(side)])) {
      return false;
    }
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let counter = 0;
  for (let char of string) {
    if (parseInt(char, 10)) {
      counter += parseInt(char, 10);
    }
  }
  if (counter === 1) {
    return '1 copo de água';
  }
  return counter + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
