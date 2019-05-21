
const arrayShift = require('../array-shift.js');

describe('array-shift', () => {
  it('considers an even length array and a value, inserting the value in the middle of the array', () => {
    expect(arrayShift([1, 2, 4 ,5], 3)).toEqual([1, 2, 3, 4, 5]);
  });

  it('only takes an array and a numeric value', () => {
    expect(arrayShift('Hello', 'World!!!')).toBeNull();
  });

  it('only takes a numeric value', () => {
    expect(arrayShift([1, 2, 4, 5], 'World')).toBeNull();
  });

  it('considers an odd length array and a value, inserting the value in the middle of the array', () => {
    expect(arrayShift([1, 2, 4], 3)).toEqual([1, 2, 3, 4]);
  });
});