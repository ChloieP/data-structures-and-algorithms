'use strict';

const BinaryTree = require('../../tree/tree');
const treeIntersection = require('../tree-intersection');

describe('Tree intersection tests', () => {

  let tree;
  let tree2;
  let tree3;
  beforeEach(() => {

    //Tree
    let root = new BinaryTree.Node(6);
    let five = new BinaryTree.Node(5);
    let seven = new BinaryTree.Node(7);
    let two = new BinaryTree.Node(2);
    let eight = new BinaryTree.Node(8);
    let three = new BinaryTree.Node(3);
    let nine = new BinaryTree.Node(9);

    root.left = five;
    root.right = seven;
    five.left = two;
    five.right = eight;
    seven.left = three;
    seven.right = nine;

    tree = new BinaryTree.BinaryTree(root);

    //tree2
    let root2 = new BinaryTree.Node(63);
    let five2 = new BinaryTree.Node(51);
    let seven2 = new BinaryTree.Node(7);
    let two2 = new BinaryTree.Node(23);
    let eight2 = new BinaryTree.Node(82);
    let three2 = new BinaryTree.Node(3);
    let nine2 = new BinaryTree.Node(94);

    root2.left = five2;
    root2.right = seven2;
    five2.left = two2;
    five2.right = eight2;
    seven2.left = three2;
    seven2.right = nine2;

    tree2 = new BinaryTree.BinaryTree(root2);

    //tree3
    //tree2
    let root3 = new BinaryTree.Node(63);
    let five3 = new BinaryTree.Node(51);
    let seven3 = new BinaryTree.Node(76);
    let two3 = new BinaryTree.Node(234);
    let eight3 = new BinaryTree.Node(82);
    let three3 = new BinaryTree.Node(39);
    let nine3 = new BinaryTree.Node(94);

    root3.left = five3;
    root3.right = seven3;
    five3.left = two3;
    five3.right = eight3;
    seven3.left = three3;
    seven3.right = nine3;

    tree3 = new BinaryTree.BinaryTree(root3);
  });


  it('Can successfully find duplicates in two trees', () => {

    expect(treeIntersection(tree, tree2)).toStrictEqual([7, 3]);
  });

  it('Can successfully operate if there are no duplicates in two trees', () => {

    expect(treeIntersection(tree, tree3)).toStrictEqual([]);
  });

  it('should have trees with roots', () => {

    let rootLess = 'void';

    expect(() => treeIntersection(rootLess, rootLess)).toThrow('rootless tumbleweed');
  });

});