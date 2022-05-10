const myRemove = require('./myremove.js')

describe('The function myRemove:', () => {
  it('Returns the array [1, 2, 4] if the element is 3 and the array is [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Does not return the array [1, 2, 3, 4] if the element is 3 and the array is [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Returns the array [1, 2, 3, 4] if the element is 5 and the array is [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});