'use strict';
const tree = require('../tree');

describe ('Binary Tree Class', () => {
  let binaryTree;
  beforeEach(() => {
    binaryTree = new tree.BinaryTree();
  });

  describe('binary trees', () => {

    it('Can successfully instantiate an empty tree', () => {
      expect(binaryTree.root).toBe(null);
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
});

describe ('Binary Search Tree Class', () => {
  let binarySearchTree;
  beforeEach(() => {
    binarySearchTree = new tree.BinarySearchTree();
  });

  describe('binary search trees', () => {

    it('Can successfully instantiate a tree with a single root node', () => {
      binarySearchTree.add(15);
      expect(binarySearchTree.root).toBe(15);
    });

    it('Can successfully add a left child and right child to a single root node', () => {
      binarySearchTree.add(10);
      binarySearchTree.add(20);
      expect(binarySearchTree.node).toBe(10).toBeTruthy();
      expect(binarySearchTree.node).toBe(20).toBeTruthy();
    });
  });
});
