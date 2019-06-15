'use strict';

const Node = require('./node/tree');

class BinaryTree{
  constructor(node) {
    this.root = node;
  }

  preOrder() {
    let results = [];

    let _walk = node => {

      results.push( node.value );

      if( node.left ) _walk( node.left);

      if( node.right ) _walk( node.right );

    }

    _walk(this.root);

    return results;
  }

  inOrder() {
    let results = [];

    let _walk = node => {
      if( node.left ) _walk( node.left);

      results.push( node.value );

      if( node.right ) _walk( node.right );

    }

    _walk(this.root);

    return results;
  }

  postOrder() {
    let results = [];

    let _walk = node => {
      if( node.left ) _walk( node.left);

      if( node.right ) _walk( node.right );

      results.push( node.value );

    }

    _walk(this.root);

    return results;
  }
}

class BinarySearchTree {
  constuctor(node) {
    this.root = node;
  }

  preOrder() {
    let results = [];

    let _walk = node => {

      results.push( node.value );

      if( node.left ) _walk( node.left);

      if( node.right ) _walk( node.right );

    }

    _walk(this.root);

    return results;
  }


  inOrder() {
    let results = [];

    let _walk = node => {
      if( node.left ) _walk( node.left);

      results.push( node.value );

      if( node.right ) _walk( node.right );

    }

    _walk(this.root);

    return results;
  }

  postOrder() {
    let results = [];

    let _walk = node => {
      if( node.left ) _walk( node.left);

      if( node.right ) _walk( node.right );

      results.push( node.value );

    }

    _walk(this.root);

    return results;
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
          throw new Error( 'Value already exists');
      }

    }

  }
}

  contains(value) {

  }
}

module.exports = {BinarySearchTree, BinaryTree};