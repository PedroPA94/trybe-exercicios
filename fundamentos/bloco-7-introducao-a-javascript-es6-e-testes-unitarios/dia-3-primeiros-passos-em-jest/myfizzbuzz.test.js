const myFizzBuzz = require('./myfizzbuzz.js');

describe('The funcion myFizzBuzz:', () => {
  it('Returns "fizzbuzz" if a number is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Returns "fizz" if a nmumber is divisible by 3 and not 5', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Returns "buzz" if a nmumber is divisible by 5 and not 3', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Returns the input number if it is not divisible by 3 or 5', () => {
    expect(myFizzBuzz(16)).toBe(16);
  });
  it('Returns "false" if the input is not a number', () => {
    expect(myFizzBuzz('10')).toBe(false);
  });
});