'use strict';

const linkedList = require('../files/linked-list.js');

describe('Tests for the linked list', () => {
  let list;
  beforeEach(() => {
    list = new linkedList();
  });

  it('successfully instantiates an empty linked list', () => {
    expect(list).toBeDefined();
  });

  describe('Insert', () => { 

    it('should take a value and return that value', () => {
      expect(list.insert(3)).toEqual(3);
    });

    it('can properly insert multiple nodes', () => {
      list.insert(26);
      list.insert(13);
      let current = list.head;
      expect(current.val).toEqual(13);
      expect(current.next.val).toEqual(26);
    });
  });

  describe('Include', () => { 

    it('should take a value and return true if value is found', () => {
      list.insert(26);
      list.insert(13);
      expect(list.includes(13)).toEqual(true);
      expect(list.includes(99)).toEqual(false);
    });
  });

  describe('Print', () => { 

    it('should console log all values in linked list', () => {
      let mockConsoleLog = jest.spyOn(console, 'log');

      mockConsoleLog.mockImplementation(() => true);

      list.print();
      expect(mockConsoleLog).not.toBeCalled();
    });
  });

  describe('Append', () => { 

    it('appends node to the end of the linked list', () => {
      list.insert(1);
      list.insert(2);
      list.append(3);

      let current = list.head;

      expect(current.next.next.val).toEqual(3);
    });

    it('successfully appends node to the end of the linkedList and returns the value', () => {
      expect(list.append(-3)).toEqual(-3);
    });

    it('successfully appends multiple nodes to the end of the list', () => {
      list.append(1);
      list.append(2);
      list.append(3);

      let current = list.head;

      expect(current.val).toEqual(1);
      expect(current.next.val).toEqual(2);
      expect(current.next.next.val).toEqual(3);
    });   
  });

  describe('insertBefore', () => {
    it('successfully inserts a node before a node located in the middle of a linked list', () => {
      list.insert(1);
      list.insert(2);
      list.insert(4);
      list.insertBefore(1, 3);

      let current = list.head;

      expect(current.next.next.val).toEqual(3);
    });

    it('successfully inserts a node before the first node of a linked list', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.insertBefore(1, 0);

      let current = list.head;

      expect(current.val).toEqual(0);
    });
  });

  describe('insertAfter', () => {
    it('successfully inserts a node after a node located in the middle of a linked list', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.insertAfter(2, 3);

      let current = list.head;
      
      expect(current.next.next.val).toEqual(3);
    });

    it('successfully inserts a node after the last node of a linked list', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.insertAfter(3, 4);

      let current = list.head;

      expect(current.next.next.next.val).toEqual(4);
    });
  });

  describe('kth', () => {
    it('answers: Where k is greater than the length of the linked list', () => {
      let node3 = {value: 3, next: null};
      let node2 = {value: 2, next: node3};
      let node1 = {value: 1, next: node2};

      list.head = node1;
      list.length = 3;
      expect(list.kthFromEnd(5)).toEqual('ERROR, k is greater than length of linked list');
    });

    it('answers: Where k and the length of the list are the same', () => {
      let node3 = {value: 3, next: null};
      let node2 = {value: 2, next: node3};
      let node1 = {value: 1, next: node2};

      list.head = node1;
      list.length = 3;
      expect(list.kthFromEnd(3)).toEqual(list.head);
    });

    it('answers: Where k is not a positive integer', () => {
      let node3 = {value: 3, next: null};
      let node2 = {value: 2, next: node3};
      let node1 = {value: 1, next: node2};

      list.head = node1;
      list.length = 3;
      expect(list.kthFromEnd(-1)).toEqual('Uh-oh! Negativity is banned');

    });

    it('answers: Where the linked list is of a size 1', () => {
      let node1 = {value: 1, next: null};

      list.head = node1;
      list.length = 1;
      expect(list.kthFromEnd(1)).toEqual(list.head);
    });   

    it('answers: “Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
      let node3 = {value: 3, next: null};
      let node2 = {value: 2, next: node3};
      let node1 = {value: 1, next: node2};

      list.head = node1;
      list.length = 3;
      expect(list.kthFromEnd(2)).toEqual(node2);
    });
  });
});
