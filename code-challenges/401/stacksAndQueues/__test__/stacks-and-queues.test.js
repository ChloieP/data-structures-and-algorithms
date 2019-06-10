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
      expect(stack).toBeInstanceOf(Stack);
    });
  
  describe('push(value)', () => { 
  // 1. Can successfully push onto a stack

    it('can successfully push onto a stack', () => {
      let value = {name: 'Betty Boop'};
      stack.push(value);

      expect(stack.top).toEqual(value);
    });

  // 2. Can successfully push multiple values onto a stack
    it('can successfully push multiple values onto a stack', () => {
      let value = {name: 'Betty Boop'};
      let value2 = {name: 'Moxy Roxy'};
      let value3 = {name: 'Fiesty Faith'};
      stack.push(value, value2, value3);

      expect(stack.top).toEqual(value, value2, value3);
    });
  
  // 3. Can successfully pop off the stack
    it('can successfully pop off the stack', () => {
      stack.pop();

      expect(stack.top).toEqual(null);
    });

  // 4. Can successfully empty a stack after multiple pops
    it('can successfully empty a stack after multiple pops', () => {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();

      expect(stack.top).toEqual(null);
    });
  
  // 5. Can successfully peek the next item on the stack
    it('can successfully peek the next item on the stack', () => {
      stack.push(4);

      expect(stack.top).toEqual(4);
    });
  });
});

describe ('Queue Class', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

// 12. Can successfully instantiate an empty queue
  it('can successfully instantiate an empty queue', () => {
    expect(queue.front).toBeNull();
  });

// 7. Can successfully enqueue into a queue
  it('can successfully enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
  });

// 8. Can successfully enqueue multiple values into a queue
  it('can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toBe(1);
    expect(queue.front.next.value).toBe(2);
    expect(queue.front.next.next.value).toBe(3);
  });

// 9. Can successfully dequeue out of a queue the expected value
  it('can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();

    expect(queue.front.value).toBe(2);
  });

// 10. Can successfully peek into a queue, seeing the expected value
  it('can successfully peek into a queue, seeing the expected value', () => {
    expect(queue.peek()).toBe(queue.front);
  });

// 11. Can successfully empty a queue after multiple dequeues
  it('can successfully empty a queue after multiple dequeues', () => {
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toBeNull();
  });
})
});
