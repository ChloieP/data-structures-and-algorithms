'use strict';

const Node = require('./node/tree');

class BinarySearchTree {
  constuctor(node) {
    this.root = node;
  }

  //pre and post, just reorder inOrder and ding fries are done
  inOrder() {
    let results = [];

    let _walk = node => {
      //L Ro R

      //L
      if( node.left ) _walk( node.left);

      //Ro
      results.push( node.value );

      //R
      if( node.right ) _walk( node.right );

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

module.exports = BinarySearchTree;