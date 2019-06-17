'use strict';

let fizzy = require('../fizz-buzz-tree');
let tree = require('../../tree/tree');


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
  });

describe('Fizz Buzz Tree', () => {
  let binarySearchTree;
  beforeEach(() => {
    binarySearchTree = new tree.BinarySearchTree();
  
    binarySearchTree.add('Fizz');
    binarySearchTree.add('Buzz');
    binarySearchTree.add('FizzBuzz');
  });

    it('Works as expected', () => {
      expect(binarySearchTree.root).toStrictEqual('Fizz');
      expect(binarySearchTree.root).toStrictEqual('Buzz');
      expect(binarySearchTree.root).toStrictEqual('FizzBuzz');
    });
    
    it('Should return null if there is an empty tree', () => {
      let nullTree = new tree.BinarySearchTree;
      fizzy.fizzBuzzTree(nullTree);
      expect(nullTree.root).toBeNull();
    });
  });
});
