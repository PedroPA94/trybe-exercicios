const { encode, decode } = require('./encode_decode.js');

describe('The function encode:', () => {
  it('Exists', () => {
    expect(typeof encode).toBe('function');
  });
  it('Encodes "aeiou" into "12345"', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Does not encode any other letter', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
  });
  it('Returns a string with the same length as the input', () => {
    expect(encode('abacaxi').length).toBe(7);
  });
});

describe('The function decode:', () => {
  it('Exists', () => {
    expect(typeof decode).toBe('function');
  });
  it('Decodes "12345" into "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Does not decode any other number', () => {
    expect(decode('67890')).toBe('67890');
  });
  it('Returns a string with the same length as the input', () => {
    expect(encode('1b1c1x3').length).toBe(7);
  });
});