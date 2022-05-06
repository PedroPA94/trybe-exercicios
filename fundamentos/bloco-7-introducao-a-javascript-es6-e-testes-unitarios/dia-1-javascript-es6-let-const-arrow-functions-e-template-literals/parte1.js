// Exercício 1

/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
} */

const testingScope = escopo => {
  if (escopo) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  } 
};

testingScope(false);


// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Bubble sort
const sort = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[i]) {
        const aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
}

sort(oddsAndEvens);

console.log(`Os números ${oddsAndEvens.join(', ')} se encontram ordenados de forma crescente!`);
