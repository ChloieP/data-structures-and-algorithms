'use strict';

const quickSort = require('../quickSort');

describe('quickSort', () => {

  it('should actually sort the array', () => {
    let arr = [6, 2, 5, 3, 8, 7, 1, 4];
    // Act
    quickSort(arr, 0, arr.length - 1);
    // Assert
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('it should handle an odd numbered array', () => {
    let arr = [6, 2, 5, 3, 8, 7, 1, 4, 99];
    // Act
    quickSort(arr, 0, arr.length - 1);
    // Assert
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 99]);
  });

  it('should sort a 2 element array', () => {
    let arr = [6, 2];
    // Act
    quickSort(arr, 0, arr.length -1);   
     // Assert
    expect(arr).toEqual([2, 6]);
  });
});