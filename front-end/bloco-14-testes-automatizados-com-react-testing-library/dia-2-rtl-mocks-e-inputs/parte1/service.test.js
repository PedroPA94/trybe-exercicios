const service = require('./service')

describe('A função randomInteger', () => {

  // Exercício 1

  it('É uma função', () => {
    expect(typeof service.randomInteger).toBe('function');
  });

  it('Retorna o valor esperado e é chamada o número de vezes correto', () => {
    service.randomInteger = jest.fn().mockReturnValue(10);

    expect(service.randomInteger()).toBe(10);
    expect(service.randomInteger).toHaveBeenCalled();
    expect(service.randomInteger).toHaveBeenCalledTimes(1);
  });

  // Exercício 2

  it('Testando a função com implementação mockada apenas uma vez', () => {
    service.randomInteger = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.randomInteger(20, 2)).toBe(10);
    expect(service.randomInteger).toHaveBeenCalled();
    expect(service.randomInteger).toHaveBeenCalledWith(20, 2);
  });

  // Exercício 3

  it('Testando outro mock, sem ser apenas uma vez', () => {
    service.randomInteger = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomInteger(1, 2, 3)).toBe(6);
    expect(service.randomInteger).toHaveBeenCalled();
    expect(service.randomInteger).toHaveBeenCalledWith(1, 2, 3);
  });

  it('O mock reseta corretamente', () => {
    service.randomInteger.mockReset();
    service.randomInteger = jest.fn().mockImplementation((a) => 2 * a);

    expect(service.randomInteger(5)).toBe(10);
    expect(service.randomInteger).toHaveBeenCalled();
    expect(service.randomInteger).toHaveBeenCalledWith(5);
  });
});

// Exercício 4

describe('A função stringToUpper', () => {
  it('Testando implementação mockada', () => {
    service.stringToUpper = jest.spyOn(service, 'stringToUpper').mockImplementation((str) => str.toLowerCase());

    expect(service.stringToUpper('OLA MUNDO')).toBe('ola mundo');
    expect(service.stringToUpper).toHaveBeenCalled();
    expect(service.stringToUpper).toHaveBeenCalledTimes(1);
    expect(service.stringToUpper).toHaveBeenCalledWith('OLA MUNDO')
  });

  it('Tem seu comportamento restaurado corretamente', () => {
    service.stringToUpper.mockRestore();

    expect(service.stringToUpper('ola mundo')).toBe('OLA MUNDO');
  })
});

describe('A função firstLetter', () => {
  it('Testando implementação mockada', () => {
    service.firstLetter = jest.fn().mockImplementation((str) => str[str.length - 1]);

    expect(service.firstLetter('Trybe')).toBe('e')
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('Trybe')
  });
});

describe('A função concatStrings', () => {
  it('Testando implementação mockada', () => {
    service.concatStrings = jest.fn().mockImplementation((str1, str2, str3) => `${str1} ${str2} ${str3}`);

    expect(service.concatStrings('Testando', 'funções', 'mockadas')).toBe('Testando funções mockadas')
    expect(service.concatStrings).toHaveBeenCalled();
    expect(service.concatStrings).toHaveBeenCalledTimes(1);
    expect(service.concatStrings).toHaveBeenCalledWith('Testando', 'funções', 'mockadas')
  });
});

// Exercício 5

describe('A função fetchDogImage', () => {
  it('Testando comportamento com promise de sucesso', async () => {
    service.fetchDogImage = jest.fn().mockResolvedValueOnce('success')

    await expect(service.fetchDogImage()).resolves.toBe('success');
    expect(service.fetchDogImage).toHaveBeenCalled();
    expect(service.fetchDogImage).toHaveBeenCalledTimes(1);
  });

  it('Testando comportamento com promise de falha', async () => {
      service.fetchDogImage = jest.fn().mockResolvedValueOnce('failed')
  
      await expect(service.fetchDogImage()).resolves.toBe('failed');
      expect(service.fetchDogImage).toHaveBeenCalled();
      expect(service.fetchDogImage).toHaveBeenCalledTimes(1);
    });
});
