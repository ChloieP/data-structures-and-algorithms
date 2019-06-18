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
    return this.top.value;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value, null);
    if(this.back === null) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = this.back.next;
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
    return this.front.value;
  }
}

module.exports = {Node, Stack, Queue};
