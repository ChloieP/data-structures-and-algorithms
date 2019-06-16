// Write a function that takes an array as an argument. Without utilizing any of the methods in my language, return an array with elements in reverse order.

let reverseArray = (arr) => { 
  let initial = 0;
  let lastElement = arr.length - 1;

  while (initial <= lastElement){
    let x = arr[initial];
    arr[initial] = arr[lastElement];
    arr [lastElement] = x;
    initial ++;
    lastElement --;
  }

  return arr;
};

module.exports = reverseArray;

