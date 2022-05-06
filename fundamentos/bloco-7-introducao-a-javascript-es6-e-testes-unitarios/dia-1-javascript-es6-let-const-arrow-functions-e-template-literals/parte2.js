// Exercício 1

const findFactorial = (positiveInteger) => {
  let factorial = 1;
  for (let i = positiveInteger; i >= 1; i -= 1) {
    factorial *= i;
  }
  return factorial;
}

console.log(findFactorial(4));


// Exercício 1 - Bônus

const findFactorialWithRecursion = (positiveInteger) => positiveInteger === 1 ? positiveInteger : positiveInteger * findFactorialWithRecursion(positiveInteger - 1);

console.log(findFactorialWithRecursion(4));


// Exercício 2

const longestWord = (sentence) => {
  const sentenceArray = sentence.split(' ');
  let longest = sentenceArray[0]
  for (let word of sentenceArray) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'
