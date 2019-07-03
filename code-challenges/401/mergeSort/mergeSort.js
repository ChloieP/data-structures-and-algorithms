'use strict';

const mergeSort = (arr) => {
  let n = arr.length;

  if (arr.length > 1) {
    const mid = Math.floor(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, n);

    mergeSort(left),
    mergeSort(right),
    merge(left, right, arr);
  }
  
  return arr;
};

const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length){
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;

    } else {
      arr[k] = right[j];
      j++;
    }

    k++;
  }

  if (i === left.length) {
// add remaining items in right array to arr
    for (let i = 0; i < right.length; i++) {
      arr[k] = right[i];
      k++;
    }
  } else {
// add remaining items in left array to arr
    for (let i = 0; i < left.length; i++) {
      arr[k] = left[i];
      k++;
    }
  }

  return arr;
};
