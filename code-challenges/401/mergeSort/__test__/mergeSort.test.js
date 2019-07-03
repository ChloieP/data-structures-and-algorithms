'use strict';

const mergeSort = require('../mergeSort');

describe('mergeSort', () => {

  let testArray;

  beforeEach(() => {
    testArray = [2, 5, 1, 3, 7, 9];
  });

  it('should actually sort the array', () => {
    expect(mergeSort).toBeDefined();
    // Act
    let result = mergeSort(testArray);
    // Assert
    expect(result).toEqual([1, 2, 3, 5, 7, 9]);
  });

  it('it should only take in an array', () => {
    let badArray = {};
    expect(() => {
      mergeSort(badArray);
    }).toThrow();
  });

  it('should still sort an array of only length 2', () => {
    let twoElementArray = [5, 2];
    // Act
    let result = mergeSort(twoElementArray);
    // Assert
    expect(result).toEqual([2, 5]);
  });
});
