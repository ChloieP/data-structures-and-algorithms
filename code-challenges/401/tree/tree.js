'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let results = [];

    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node (2);
    tree.root.right = new Node (3);
    tree.root.left.left = new Node (4);
    tree.root.left.right = new Node (5);

    let _walk = node => {

      results.push(node.value);

      if(node.left) _walk(node.left);

      if(node.right) _walk(node.right);

    };

    _walk(this.root);

    console.log(results, 'marco polo');

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
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    this.root = null;
  }

  add(node) {
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

module.exports = {BinarySearchTree, BinaryTree, Node};
