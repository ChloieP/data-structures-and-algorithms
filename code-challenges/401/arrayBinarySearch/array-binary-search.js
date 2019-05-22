'use strict';

const binarySearch = (arr, val) => {
  let leftSide = 0;
  let rightSide = arr.length - 1;

  while (leftSide <= rightSide){
    let mid = Math.floor(leftSide + (rightSide - leftSide) / 2);

    if (arr[mid] < val){
      leftSide = mid + 1;
    }else if (arr[mid] > val){
      rightSide = mid -1;
    }else {return mid};
    }
  return -1;
}
module.exports = binarySearch;