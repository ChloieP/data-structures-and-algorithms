'use strict';

const stack = require('../../401/stacksAndQueues/stacks-and-queues');

let compare = '';

let multiBracketValidation = (input) => {
  let validationStack = new stack.Stack();

  for ( i = 0; i <input.length; i++ ) {
    if (input[i] = ('[' || '{' || '(')) {
      validationStack.push(input[i]);
    };

    if (input[i] = (']' || '}' || ')')) {
      if (compare(']') = true) {
        validationStack.pop();

      } else { return false };

      if (compare('}') = true) {
        validationStack.pop();

      } else { return false };

      if (compare(')') = true) {
        validationStack.pop();

      } else { return false };
    
    return true;
    }

    if (validationStack.top = '') {
        return true;

      } else { return false};
    }
  }


module.exports = multiBracketValidation;