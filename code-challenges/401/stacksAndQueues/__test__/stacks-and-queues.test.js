'use static';

const Stack = require('../stacks-and-queues').Stack;
const Queue = require('../stacks-and-queues').Queue;

describe ('Stack Class', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  describe('constructor', () => { 
  // 6. Can successfully instantiate an empty stack

    it('can successfully instantiate an empty stack', () => {
      expect(stack).toBeDefined();
      expext(stack).toBeInstanceOf(Stack);
    });
  
  describe('push(value)', () => { 
  // 1. Can successfully push onto a stack

    it('can successfully push onto a stack', () => {
      let value = {name: 'Betty Boop'};
      stack.push(value);

      expect(stack.top).toEqual(value);


    })

})
})

// 2. Can successfully push multiple values onto a stack
// 3. Can successfully pop off the stack
// 4. Can successfully empty a stack after multiple pops
// 5. Can successfully peek the next item on the stack
// 7. Can successfully enqueue into a queue
// 8. Can successfully enqueue multiple values into a queue
// 9. Can successfully dequeue out of a queue the expected value
// 10. Can successfully peek into a queue, seeing the expected value
// 11. Can successfully empty a queue after multiple dequeues
// 12. Can successfully instantiate an empty queue
})