'use strict';

const quickSort = (arr, left, right) => {
  if(left < right) {
    let position = partition(arr, left, right);

    quickSort(arr, left, position -1);
    quickSort(arr, position + 1, right);
  }
};

const partition = (arr, left, right) => {
  let pivot = arr[right];
  let low = left - 1;

  for(let i = left; i <= right -1; i++) {
    if(arr[i] <= pivot){
      low++
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
};

const swap = (arr, i, low) => {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
};

const arr = [6, 2, 5, 3, 8, 7, 1, 4];

quickSort(arr, 0, arr.length - 1);

console.log(arr);

module.exports = quickSort;