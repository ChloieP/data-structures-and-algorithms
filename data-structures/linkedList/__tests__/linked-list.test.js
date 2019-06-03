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
});
