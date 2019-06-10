'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;
const PseudoQueue = require('../queue-with-stacks');

describe ('PseudoQueue', () => {
  let queue;
  beforeEach(() => {
    queue = new PseudoQueue();
  });

  describe('queue with stacks', () => {
    it('can enqueue a new value', () => {
      value = 7;
      queue.enqueue(value);

      expect(queue.stackOne.peek()).toBe(value);
    });
  });
});
