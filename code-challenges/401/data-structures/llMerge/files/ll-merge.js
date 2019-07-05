'use strict';

const Node = require('./node.js');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);
    
    node.next = this.head;
    this.head = node;
    return this;
  }

  mergeLists(lList1, lList2) {
    if (!lList1.head) {
      throw new Error('Uh-oh! List is not here!')
    }

    let List1head = lList1.head;
    let List2head = lList2.head;
    let head1 = '';
    let head2 = '';
    while (List1head.next || List2head.next) {
      head1 = List1head.next;
      List1head = List2head;
      List1head = head1;
      head2 = List2head.next;
      List2head.next = head1;
      List2head = head2;
    }
    return lList1;
  }
};
