'use strict';

class Node {
  constructor(value) {
    this.value = value || null;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(node) {
    this.root = node || null;
  }

  preOrder() {
    let results = [];

    let _walk = node => {

      results.push(node.value);

      if(node.left) _walk(node.left);

      if(node.right) _walk(node.right);

    };

    _walk(this.root);

    return results;
  }

  inOrder() {
    let results = [];

    let _walk = node => {
      if( node.left ) _walk( node.left);

      results.push( node.value );

      if( node.right ) _walk( node.right );

    };

    _walk(this.root);

    return results;
  }

  postOrder() {
    let results = [];

    let _walk = node => {
      if( node.left ) _walk( node.left);

      if( node.right ) _walk( node.right );

      results.push( node.value );

    };

    _walk(this.root);

    return results;
  }

  breadthFirst(tree) {
    let results = [];

    if(tree === null){
      return false;
    };

    let queue = () => { 
      while(queue !== null){
        let node = queue.dequeue;
        console.log(node.value);
        if(node.left !== null){
          queue.enqueue(node.value);
        };
        if(node.right !== null){
          queue.enqueue(node.value);
        };
      };
    };
  return results;
  }

  findMaximumValue(tree) {
    let findMax = tree.root.value;
    let left = tree.root.left;
    let right = tree.root.right;

    if(left > findMax) {
      findMax = left;
    };

    if(right > findMax) {
      findMax = right;
    };

    return findMax;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    this.root = null;
  }

  add(value) {

    let node = new Node(value);

    if(!this.root) {
      this.root = node;
      return node;
    }

    let currentNode = this.root;

    while ( currentNode ) {
      if ( node.value < currentNode.value ) {
        if ( !currentNode.left ){
          currentNode.left = node;
          break;
        } else {
          currentNode = currentNode.left;
        }

      } else if ( node.value > currentNode.value ) {
        if ( !currentNode.right ){
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }

      } else {
        return 'Value already exists';
      }
    }
  }

  contains(value) {
    let currentNode = this.root;

    while ( currentNode ) {
      if ( currentNode.value === value ) { return true; }

      if ( value < currentNode.left) {
        currentNode = currentNode.left;

      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}

// console.log('Testing instantiating node');
// let node00 = new Node(10);
// console.log(node00);
// console.log('');

// console.log('Testing instantiating trees');
// let bst = new BinarySearchTree;
// console.log(bst);
// console.log('');

// console.log('Testing adding one values');
// bst.add(12);
// console.log(bst);
// console.log('');

// console.log('Testing adding multiple values');
// bst.add(11);
// bst.add(5);
// bst.add(8);
// bst.add(20);
// console.log(bst);
// console.log('');

// console.log('Testing preorder traversal');
// console.log(bst.preOrder());
// console.log('');


module.exports = {BinarySearchTree, BinaryTree, Node};
