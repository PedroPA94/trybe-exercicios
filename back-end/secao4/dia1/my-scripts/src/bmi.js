const readline = require('readline-sync');

const weight = readline.questionFloat('Qual o seu peso? ');
const height = readline.questionFloat('Qual a sua altura? ');

const findBmi = (weight, height) => {
  return weight / height ** 2;
}

const imc = findBmi(weight, height);

const categoria = (imc) => {
  if (imc < 18.5) return 'Abaixo do peso (magreza)';
  if (18.5 < imc < 24.9) return 'Peso normal';
  if (25 < imc < 29.9) return 'Acima do peso (sobrepeso)';
  if (30 < imc < 34.9) return 'Obesidade grau I';
  if (35 < imc < 39.9) return 'Obesidade grau II';
  return 'Obesidade graus III e IV';
}

console.log(`Seu IMC é ${imc}, categoria ${categoria(imc)}`);
