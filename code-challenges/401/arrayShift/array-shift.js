'use strict';

let insertShiftArray = (arr, val) => {
  let newArr = [];

  if (typeof arr !== 'object' || typeof val !== 'number') {return null};

  if (arr.length % 2 === 0){
    for (let i = 0; i < arr.length + 1; i++){
      if (i === arr.length / 2){
        newArr[i] = val;
      } else if (i < arr.length / 2){
        newArr[i] = arr[i];
      } else {
        newArr[i] = arr[i - 1];
      }
    }
  } else {  
    for (let i = 0; i < arr.length + 1; i++){
      if (i === (arr.length + 1) / 2){
        newArr[i] = val;
      } else if(i < (arr.length + 1) / 2){
         newArr[i] = arr[i];
      } else {
        newArr[i] = arr[i -1];
      }
    }
  }
  return newArr;
} 
module.exports = insertShiftArray;