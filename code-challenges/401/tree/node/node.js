'use require';

class Node {
  constuctor(value, left, right) {
    this.value = value;
    this.right = right || null;
    this.left = left || null;
  }
}

module.exports = Node;
