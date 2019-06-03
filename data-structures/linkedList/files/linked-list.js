'use strict';

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList { 
  constructor () {
    this.head = null;
  }

  insertAtHead(value){
    let newNode = new Node(value);

    if(!this.head){
      this.head = newNode;
      return this.head; 
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    } 

    current.next = newNode; 
    return this.head; 
  }

  includes(value){
    let current = this.head;
    while (current) {
      if(current.value === value) {
        return true;

      } else { 
        current = current.next;
      } 
    }
    return false;
  }

  insertBefore(val, newVal){
    let newNode = newNode(newVal);
    let current = this.head;

    while (current) {
      if (current.next.value === val){
        newNode.insert = current.next;
        current.next = newNode;
        return newVal;
      }
    }
    return 'Node could not be found';
  }

  insertAfter(val, newVal){
    let newNode = newNode(val);
    let current = this.head;

    while (current) {
      if (current.value === val){
        newNode.insert = current.next;
        current.next = newNode;
        return value;
      }
    }
    return 'Node could not be found';
  }

  append(val) {
    let node = newNode(val);
    let current = this.head;

    while(current){
      if (!current.next){
        current.next = node;
        return val;
      } else {
        current = current.next;
      }
    }
  }

    print() {
      let printList = [];
      let current = this.head;

      while(current) {
        printList.push(current.value);
        current = current.next;
      }

      return printList;
  }
};

module.exports = LinkedList;