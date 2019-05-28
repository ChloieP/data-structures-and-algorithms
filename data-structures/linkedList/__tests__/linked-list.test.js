'use strict';

const LinkedList = require('../files/linked-list.js');
const faker = require('faker');

let list = new LinkedList();
let length = faker.random.number();
let values = [];

for (let i = 0; i < length; i++) {
  values.push(faker.random.word());
}

for (let i = 0; i < values.length; i++) {
  list.current(values[i]);
}

values.reverse();

describe('Linked Lists', () => {
  it('successfully instantiates an empty linked list', () => {
    expect(new LinkedList()).toBeTruthy();
    expect(new LinkedList().head).toBeNull();
  });

  it('properly inserts into the linked list', () => {
    let newValue = faker.random.word();
    list.current(newValue);
    values.unshift(newValue);
    expect(list.head.value).toBe(values[0]); 
  });

  it('properly points to to the first node in the linked list using the head property', () => {
    expect(list.head).toBeTruthy();
    expect(list.head.next).not.toBeNull();
  });

  it('properly inserts multiple nodes into the linked list', () => {
    let current = list.head;
    for (let i = 0; i < values.length; i++) {
      expect(current.value).toBe(values[i]); 
      current = current.next;
    }
  });

  it('returns true when finding a value within the linked list that exists', () => {
    let randomValue = values[faker.random.number(values.length - 1)];
    expect(list.includes(randomValue)).toBe(true);
  });

  it('returns false when searching for a value in the linked list that does not exist', () => {
    let randomValue = faker.random.number();
    expect(list.includes(randomValue)).toBe(false);
  });

  it('properly returns a collection of all the values that exist in the linked list', () => {
    expect(list.print()).toEqual(values);
  });
});
