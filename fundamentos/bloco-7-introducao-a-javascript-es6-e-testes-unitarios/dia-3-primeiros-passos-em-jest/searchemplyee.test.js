const searchEmployee = require('./searchemployee.js');

describe('The function searchEmployee:', () => {
  it('Is defined and is a function', ()=> {
    expect(searchEmployee).toBeDefined();
    expect(typeof searchEmployee).toBe('function');
  });
  it('Returns the employee info', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
    expect(searchEmployee('9852-2-2', 'lastName')).toBe('Cook');
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
  });
  it('Returns "ID não identificada" if the id is not on the board', () => {
    expect(searchEmployee('12345', 'firstName')).toBe('ID não identificada');
    expect(searchEmployee('8958-4', 'lastName')).toBe('ID não identificada');
    expect(searchEmployee('4457-4', 'specialities')).toBe('ID não identificada');
    expect(searchEmployee('9852-2-3', 'firstName')).toBe('ID não identificada');
  });
  it('Throws an error if the info does not exist', () => {
    expect(() => searchEmployee('8579-6', 'fullName')).toThrow();
    expect(() => searchEmployee('9852-2-2', 'age')).toThrow();
    expect(() => searchEmployee('1256-4', 'lastNames')).toThrow();
  });
  it('Throws the error message "Informação indisponível" if the info does not exist', () => {
    expect(() => searchEmployee('4456-4', 'fullName')).toThrow('Informação indisponível');
    expect(() => searchEmployee('8579-6', 'age')).toThrow('Informação indisponível');
    expect(() => searchEmployee('1256-4', 'lastNames')).toThrow('Informação indisponível');
  })
});
