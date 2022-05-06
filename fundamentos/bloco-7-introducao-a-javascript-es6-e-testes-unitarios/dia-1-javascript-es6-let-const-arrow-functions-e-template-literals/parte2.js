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

const findFactorialWithRecursion = (positiveInteger) => positiveInteger === 1 ? positiveInteger : positiveInteger * findFactorialWithRecursion(positiveInteger -1);

console.log(findFactorialWithRecursion(4));