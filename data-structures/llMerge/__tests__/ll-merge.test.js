
'use strict';

const LinkedList = require('../files/ll-merge');

const testingList1 = new LinkedList();
const testingList2 = new LinkedList();
const emptyList = new LinkedList();

for (let i = 0; i < 8; i++) {
  testingList1.insertAtHead(`value ${i}`);
}
for (let i = 0; i < 8; i++) {
  testingList2.insertAtHead(`value ${i}`);
}

describe('ll-merge testing', () => {
  describe('This will test the merging capability of ll-merge', () => {
    it('should merge two lists zipper-like', () => {
      testingList1.mergeLists(testingList1, testingList2);
      expect(testingList1.head.next.value && testingList1.head.value).toEqual('value 7');
    });
    it('should return an error if the list is empty', () => {
      try {
        emptyList.mergeLists(emptyList, emptyList);
      } catch (err) {
        expect(err.message).toEqual('Uh-oh! List is not here!');
      }
    });
  });
});