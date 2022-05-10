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


// Exercício 4

const mainSkills = ['JavaScript', 'HTML', 'CSS', 'Git', 'Unix']

const replaceStringInSentence = (string) => {
  const sentence = 'Tryber x aqui!'
  return sentence.replace('x', string);
}

const listMainSkills = (string) => {
  const skills = mainSkills.sort();
  return `  ${string}
  Minhas cinco principais habilidades são:
   \u26AC ${skills[0]}
   \u26AC ${skills[1]}
   \u26AC ${skills[2]}
   \u26AC ${skills[3]}
   \u26AC ${skills[4]}
  #goTrybe`
}
console.log(listMainSkills(replaceStringInSentence('Pedro')));