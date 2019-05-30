'use strict';

const LinkedList = require('../files/linked-list.js');

describe('Tests for the linked list', () => {
  let list = null;
  
  beforeEach(function() {
    list = new LinkedList();
  });
  
  it('can instantiate an empty list', () => {
    expect(list.head).toBeNull();
  });  
    
  it('can properly insert into the linked list', () => {
    list.add('bippity');
    expect(list.head).not.toBeNull();
    expect(list.value).not.toBeNull();
    expect(list.head.data).toEqual('bippity');
    expect(list.value.data).toEqual('bippity');
  });

  it('can properly points to the first node in the linked list using the head property', () => {
    expect(list.head).toBeTruthy();
    expect(list.head.next).not.toBeNull();
  });
});
