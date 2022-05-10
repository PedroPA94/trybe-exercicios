const sum = require('./sum.js')

describe('The function sum:', () => {
  it('Adds 4 and 5 to equal 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('Adds 0 and 0 to equal 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  it('Throws error when input is string', () => {
    expect(() => sum(4,'5')).toThrow();
  });
  it('Throws the error message "parameters must be numbers"', () => {
    expect(() => sum(4,'5')).toThrow('parameters must be numbers');
  });
});