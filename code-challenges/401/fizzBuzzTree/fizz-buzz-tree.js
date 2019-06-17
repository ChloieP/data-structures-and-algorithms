'use strict';

let FizzBuzzTree = (tree) => {
  if(tree) {
    if(tree.value % 15 === 0) {
      tree.value === 'FizzBuzz';

    } else if 
      (tree.value % 5 === 0 ) {
        tree.value === 'Buzz';
   
    } else if
      (tree.value % 3 === 0 ) {
        tree.value === 'Fizz';

    }if(tree.left !== null) {
      FizzBuzzTree(tree.left);

    } else if
      (tree.right !== null) {
      FizzBuzzTree(tree.right);
    }
  }
  return tree;
};

module.exports = {FizzBuzzTree};