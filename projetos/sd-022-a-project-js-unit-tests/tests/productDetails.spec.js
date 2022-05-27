const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const testArray = productDetails('Alcool gel', 'Máscara');
    const sameParameters = productDetails('Alcool gel', 'Alcool gel');
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(testArray)).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(testArray.length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(testArray.every((item) => typeof item === 'object')).toBe(true); // Com base na documentação para métodos de arrays da W3 Schools
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(testArray[0]).not.toEqual(testArray[1]);
    expect(sameParameters[0]).toEqual(sameParameters[1]); // Testa comportamento com parâmetros idênticos
    // Teste se os dois productIds terminam com 123.
    expect(testArray.every((item) => item.details.productId.endsWith('123'))).toBe(true);
  });
});
