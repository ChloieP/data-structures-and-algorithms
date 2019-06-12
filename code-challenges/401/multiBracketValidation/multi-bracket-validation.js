'use strict';

const stack = require('../../401/stacksAndQueues/stacks-and-queues');

let multiBracketValidation = (input) => {
  let validationStack = new stack.Stack;

  for ( let i = 0; i <= input.length; i++ ) {
    if (input.charAt(i) === '[' || input.charAt(i) === '{' || input.charAt(i) === '(') {
      validationStack.push(input.charAt(i));
    }

    else if (input.charAt(i) === ']' || input.charAt(i) === '}' || input.charAt(i) === ')') {
      if (validationStack.top === '[') {
        if (input.charAt(i) !== ']') { return false; }

      } else if (validationStack.top === '{') {
          if (input.charAt(i) !== '}') { return false; }

      } else if (validationStack.top === '(') {
        if (input.charAt(i) !== ')') { return false; }

      } else { validationStack.top = validationStack.top.next;}
    }
  }  
  if(validationStack.top != null){
    return false;
  }
  else return true;
};

multiBracketValidation(stack);


module.exports = multiBracketValidation;