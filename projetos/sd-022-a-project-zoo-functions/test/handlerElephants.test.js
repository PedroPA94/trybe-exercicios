const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna "undefined" se chamada sem parâmetros', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Retorna a mensagem "Parâmetro inválido, é necessário uma string" caso o parâmetro não seja uma string', () => {
    const msg = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(130)).toBe(msg);
    expect(handlerElephants(['count'])).toBe(msg);
    expect(handlerElephants({ key: 'value' })).toBe(msg);
    expect(handlerElephants(null)).toBe(msg);
    expect(handlerElephants(true)).toBe(msg);
    expect(handlerElephants(false)).toBe(msg);
  });
  it('Se o parâmetro for uma propriedade do objeto "elephants", retorna o seu valor', () => {
    const residents = [
      {
        name: 'Ilana',
        sex: 'female',
        age: 11,
      },
      {
        name: 'Orval',
        sex: 'male',
        age: 15,
      },
      {
        name: 'Bea',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Jefferson',
        sex: 'male',
        age: 4,
      },
    ];
    expect(handlerElephants('residents')).toEqual(residents);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Quando o parâmetro for string, mas não uma propriedade de "elephants", executa o comando definido ou retorna null, caso não exista', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    expect(handlerElephants('COUNT')).toBeNull();
    expect(handlerElephants('ages')).toBeNull();
    expect(handlerElephants('averageAge()')).toBeNull();
  });
});
