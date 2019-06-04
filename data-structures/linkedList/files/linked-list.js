'use strict';

class Node {
  constructor () {
    this.value = null;
    this.next = null;
  }
}

class LinkedList { 
  constructor () {
    this.head = null;
    this.length = 0;
  }

  insert(val) {
    let node = new Node();

    node.val = val;
    node.next = this.head;
    this.head = node;
    this.length += 1;

    return this.head.val;
  }

  includes(val){
    let current = this.head;

    while (current) {
      if(current.val === val) {
        return true;

      } else { 
        current = current.next;
      } 
    }
    return false;
  }

  insertBefore(value, newValue){
    let newNode = new Node();
    newNode.val = newValue;
    let current = this.head;

    if (current.val === value){
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
      return newValue;

    } else { 

      while (current) {
        if (current.next.val === value){
          newNode.next = current.next;
          current.next = newNode;
          this.length += 1;
          return newValue;
        
        } else {
          current = current.next;
        }
      }
    }
    return 'Node could not be found';
  }

  insertAfter(value, newValue){
    let newNode = new Node();
    newNode.val = newValue;
    let current = this.head;

    while (current) {
      if (current.val === value){
        newNode.next = current.next;
        current.next = newNode;
        this.length += 1;
        return newValue;

      } else {
        current = current.next;
      }
    }
    return 'Node could not be found';
  }

  append(val) {
    let node = new Node();
    node.val =val;

    if (!this.head) {
      this.head = node;
      this.length += 1;
      return val;
    }

    let current = this.head;

    while(current){
      if (!current.next){
        current.next = node;
        this.length += 1;
        return val;
      } else {
        current = current.next;
      }
    }

    return val;
  }

  kthFromEnd(k){
    let index = (this.length - k) - 1;
    let current = this.head;

    if(k > this.length) {
      return 'ERROR, k is greater than length of linked list';
    }

    if(k === this.length) {
      return this.head;
    }

    if(k < 0) {
      return 'Uh-oh! Negativity is banned';
    }

    for (let i = 0; i <= index; i++){
      if (i === index) {
        return current.next;
      
      } else {
        current = current.next;
      }
    }
  }

  print() {
    let current = this.head;

    while(current) {
      console.log(current.val);
      current = current.next;
    }
  }
};

module.exports = LinkedList;