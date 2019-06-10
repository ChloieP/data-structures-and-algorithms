'use strict'

const Stack = require('../queueWithStacks/stacks-and-queues').Stack;

class PseudoQueue {
  constructor() {
    this.stackOne = new Stack(); 
    this.stackTwo = new Stack();
  }

  enqueue(value) {
    if (value) {
      this.stackOne.push(value);
      return this.stackOne.top;

    } else {
      return null;
    }
  }

  dequeue() {
    if (this.stackOne.peek()) {
      while (this.stackOne.top.next) {
        let temp = this.stackOne.pop();
        this.stackTwo.push(temp);
      }
      const dequeued = this.stackOne.pop();
      while (this.stackTwo.peek()) {
        let temp = this.stackTwo.pop();
        this.stackOne.push(temp);
      }
      return dequeued;

    } else {
      return null;
    }
  }
}

module.exports = PseudoQueue;