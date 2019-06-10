'use static';

import { nullLiteral, isModuleDeclaration } from "@babel/types";

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
    if(!value) return false;

    let value = new Node(value);
    value.next = this.top;
    this.top = value;
  }

  pop() {
    let val = this.top.val;
    this.top = this.top.next;
    return val;
  }

  peek() {
    return this.top.value;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    let n = new Node(value);

    if(!this.front) {
      this.front = n;

    } else {
      let b = this.front;
      while (b.next) {
        b = b.next;
      }
      b.next = n;
    }
  }

  dequeue() {
    if(this.front.value !== null){
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
