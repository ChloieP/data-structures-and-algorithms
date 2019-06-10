'use static';

// Create Node Class

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = value;
  }

  pop() {
    if (this.top) {
      let val = this.top.value;
      this.top = this.top.next;
      return val;

    } else {
      return null
    }
  }

  peek() {
    return this.stackOne;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    if (!value) return false;
    let node = new Node(value);
    let current = this.front;

    if(!this.front) {
      this.front = node;
    } else {
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  dequeue() {
    if(this.front !== null){
      let n = this.front.value;
      this.front = this.front.next;
      return n;

    } else {
      return null;
    }
  }

  peek() {
    return this.front;
  }
}

module.exports = {Node, Stack, Queue};