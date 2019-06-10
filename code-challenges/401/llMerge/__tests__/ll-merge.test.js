'use strict';

const linkedList = require('../linkedList/files/linked-list.js');

describe('Tests for the linked list', () => {
  let list;
  beforeEach(() => {
    list = new linkedList();
  });

  it('successfully instantiates an empty linked list', () => {
    expect(list).toBeDefined();
  });
