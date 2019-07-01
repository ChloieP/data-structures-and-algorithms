'use strict';

const insertionSort = require('../insertionSort');

describe('insertion-sort', () => {
  let arr; 
  beforeEach(() => {
    arr = [15, 41, 32, 10, 11];
  });

  it('takes in a randomly sorted array and sorts it', () => {
    expect(insertionSort).toBeDefined();

    expect(() => {
      insertionSort(arr).toEqual([10, 11, 15, 32, 41]);});
  });

  it('should only sort integers', () => {
    let nope = 'HappySunshineSandAndSea';

    expect(() => {
      insertionSort(nope).toThrow('Error. Only Takes Array of Integers');});
  });

  it('returns an empty array if an empty array is given', () => {
    let empty = [];

    expect(() => {
      insertionSort(empty).toBe([]);});
  });

});