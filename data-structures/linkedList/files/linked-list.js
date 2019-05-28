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

    if(!this.head){  //if empty list
      this.head = newNode; //make new node
      return this.head; // make new list
    }

    let current = this.head; //start with first node
    while (current.next) { // while not on last node
      current = current.next; //go down the linked list
    } // stops when on last node

    current.next = newNode; // add new node to end of list
    return this.head; // return new list
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