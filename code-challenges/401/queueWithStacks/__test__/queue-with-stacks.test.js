'use strict';

const PseudoQueue = require('../queue-with-stacks');

describe ('PseudoQueue', () => {
  let queue;
  beforeEach(() => {
    queue = new PseudoQueue();
  });

  describe('queue with stacks', () => {
    it('can enqueue a new value', () => {
      queue.enqueue(1);
      expect(queue.stackOne.top).toBe(1);
    });

    it('returns null if no value is passed in to enqueue', () => {
      queue.enqueue();
      expect(queue.stackOne.peek()).toBe();
    });

    it('can dequeue a value using FIFO', () => {
      queue.dequeue();
      expect(queue.stackOne.top).toBeNull();
    });

    it('returns null if dequeued when empty', () => {
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
  
      expect(queue.stackOne.top).toBeNull();
      });
  });
});
