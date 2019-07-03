'use strict';

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge (
    mergeSort(left), mergeSort(right)
  )
};

const merge = (left, right) => {
  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length){
    if (left[leftIndex] < right[rightIndex]){
      results.push(left[leftIndex]);
      leftIndex++;

    } else {
      results.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return results
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};

const list = [2, 5, 1, 3, 7, 9];
console.log(mergeSort(list));

module.exports = mergeSort;