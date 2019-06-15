'use strict';
const tree = require('../tree');

describe('binary search trees', () => {
  let binaryTree = new tree.BinaryTree();

  it('Can successfully instantiate an empty tree', () => {
    expect(binaryTree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    binaryTree.add(15);
    expect(binaryTree.root.value).toBe(15);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    binaryTree.add(10);
    binaryTree.add(20);
    expect(binaryTree.contains(10)).toBeTruthy();
    expect(binaryTree.contains(20)).toBeTruthy();
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    expect(binaryTree.preOrder(15)).toBe([10, 15, 20]);
  });

  it('Can successfully return a collection from a inorder traversal', () => {
    expect(binaryTree.inOrder(1)).toBe([10, 15, 20]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    expect(binaryTree.postOrder(25)).toBe([10, 15, 20]);
  });
});

