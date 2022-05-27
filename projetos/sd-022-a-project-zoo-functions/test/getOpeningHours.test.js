const getOpeningHours = require('../src/getOpeningHours');

const open = 'The zoo is open';
const closed = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('Retorna um objeto com os horários de todos os dias se for chamada sem parâmetros', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Gera o erro "The day must be valid. Example: Monday" quando chamada com um parâmetro de dia inválido', () => {
    const errorMsg = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Wonday', '00:00-PM')).toThrow(errorMsg);
    expect(() => getOpeningHours('quarta-feira', '00:00-PM')).toThrow(errorMsg);
    expect(() => getOpeningHours('Monday', '00:00-PM')).not.toThrow(errorMsg);
  });
  it('Gera uma mensagem de erro quando não são passados números nas horas e/ou minutos', () => {
    expect(() => getOpeningHours('Tuesday', '00:olá-PM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Thursday', 'bla:bla-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Friday', '09:30-PM')).not.toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Monday', '09:30-PM')).not.toThrow('The hour should represent a number');
  });
  it('Gera o erro "The abbreviation must be \'AM\' or \'PM\'" quando são passadas abreviações erradas no parâmetro da hora', () => {
    const errorMsg = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Monday', '09:30-BM')).toThrow(errorMsg);
    expect(() => getOpeningHours('Monday', '09:30-qualquerCoisa')).toThrow(errorMsg);
  });
  it('Quando a hora é menor que zero ou acima de 12, ou os minutos menores que zero ou acima de 59, gera os erros correspondentes', () => {
    expect(() => getOpeningHours('Monday', '19:30-PM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Monday', '09:63-PM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Retorna a mensagem de zoológico fechado quando o dia é Monday', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closed);
    expect(getOpeningHours('Monday', '02:00-PM')).toBe(closed);
    expect(getOpeningHours('Tuesday', '09:00-AM')).not.toBe(closed);
    expect(getOpeningHours('Friday', '07:00-PM')).not.toBe(closed);
  });
  it('Retorna a mensagem correta de acordo com o horário de funcionamento quando não é Monday', () => {
    expect(getOpeningHours('Friday', '11:00-AM')).toBe(open);
    expect(getOpeningHours('Tuesday', '04:00-PM')).toBe(open);
    expect(getOpeningHours('Thursday', '10:00-AM')).toBe(open);
    expect(getOpeningHours('Saturday', '09:59-PM')).toBe(open);
    expect(getOpeningHours('Saturday', '10:00-PM')).toBe(closed);
    expect(getOpeningHours('Sunday', '00:00-AM')).toBe(closed);
    expect(getOpeningHours('Wednesday', '07:59-AM')).toBe(closed);
  });
  it('Não é case-sensitive', () => {
    expect(getOpeningHours('friday', '11:00-AM')).toBe(open);
    expect(getOpeningHours('Tuesday', '04:00-pm')).toBe(open);
    expect(getOpeningHours('tHURSDAY', '10:00-aM')).toBe(open);
    expect(getOpeningHours('SATURDAY', '10:00-Pm')).toBe(closed);
    expect(getOpeningHours('sundaY', '00:00-AM')).toBe(closed);
    expect(getOpeningHours('WeDnEsDaY', '07:59-am')).toBe(closed);
    expect(getOpeningHours('mOnday', '02:00-PM')).toBe(closed);
  });
});
