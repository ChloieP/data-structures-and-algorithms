'use strict';

const { HashTable } = require('../hashtable/hashtable');

const tree_intersection = (tree1, tree2) => {
  const newHash = new HashTable();
  const preOrder = root => {
    if(!root) {
      return null;
    }
    if(root) {
      return newHash.add(root.data);
    }
    if(root.left) {
      preOrder(root.left);
    }
    if(root.right) {
      preOrder(root.right);
    }
  }

  preOrder(tree1.root);
  preOrder(tree2.root);
  return newHash.print();
};

module.exports = { tree_intersection };