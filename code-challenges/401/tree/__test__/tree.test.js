'use strict';
const tree = require('../tree');

describe ('Binary Search Tree Class', () => {
  let binarySearchTree;
  beforeEach(() => {
    binarySearchTree = new tree.BinarySearchTree();
  });

  describe('binary search trees', () => {

    it('Can successfully instantiate a tree with a single root node', () => {
      binarySearchTree.add(15);
      expect(binarySearchTree.root.value).toBe(15);
    });

    it('Can successfully add a left child and right child to a single root node', () => {
      binarySearchTree.add(15);
      binarySearchTree.add(10);
      binarySearchTree.add(20);
      expect(binarySearchTree.root.left.value).toBe(10);
      expect(binarySearchTree.root.right.value).toBe(20);
    });
  });
});

describe ('Binary Tree Class', () => {
  let binarySearchTree;
  beforeEach(() => {
    binarySearchTree = new tree.BinarySearchTree();

    binarySearchTree.add(5);
    binarySearchTree.add(10);
    binarySearchTree.add(15);
    // binarySearchTree.add(20);
    // binarySearchTree.add(25);
    // binarySearchTree.add(30);
    // binarySearchTree.add(35);
  });

  describe('binary trees', () => {

    it('Can successfully return a collection from a preorder traversal', () => {
      expect(binarySearchTree.preOrder()).toStrictEqual([5, 10, 15 ]);
    });

    it('Can successfully return a collection from a inorder traversal', () => {
      expect(binarySearchTree.inOrder()).toStrictEqual([5, 10, 15]);
    });

    it('Can successfully return a collection from a postorder traversal', () => {
      expect(binarySearchTree.postOrder()).toStrictEqual([15, 10, 5]);
    });

    it('breadth first console logs the first node in the tree', () => {  
      expect(binarySearchTree.breadthFirst()).toEqual([]);
    });

    it('breadth first has not a tree to walk', () => {
      expect(binarySearchTree.breadthFirst(null)).toBeFalsy();
    });

    it('findMaximumValue has a root value', () => {
      // expect(binarySearchTree.findMaximumValue(truthy)).toBeTruthy();
    });

    it('findMaximumValue has a left value', () => {
      // expect(binarySearchTree.root.left.value).toBe(10);
      // expect(binarySearchTree.root.right.value).toBe(15);
    });

  });
});

