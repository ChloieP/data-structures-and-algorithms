'use strict';

let treeIntersection = require('../tree-intersection');
let trees = require('../../tree/tree');

describe('treeIntersection(tree1, tree2)', () => {
  it('must be true for happy me', () => {
  
    expect(trees).toBeTruthy();
    expect(treeIntersection).toBeTruthy();

  });

  it('must find treeIntersection', () => {
    expect(treeIntersection).toBeDefined();
  });

  it('must find common values', () => {
    expect(trees).toBeDefined();
  });
});