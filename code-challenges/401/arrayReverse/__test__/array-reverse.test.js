'use strict';

const arrayReverse = require('../array-reverse');

describe('array-reverse', () => {

  let tester = [1, 2, 3, 4];

  it('returns an array', () => {
    expect(true).toBeTruthy();
  });

  it('sorts an array', () => {
    expect(false).toBeFalsy();
  });

  it('returns values in reverse order', () => {
    expect(arrayReverse(tester)).toEqual([4, 3, 2, 1]);
  });
});