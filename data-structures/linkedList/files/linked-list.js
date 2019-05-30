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