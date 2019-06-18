# Trees
Binary Tree and Binary Search Tree Implementation

## Challenge
* Create a Node class that has properties for the value stored in the node, the left child node, and the right child node. 

* Create a BinaryTree class 
  - Define a method for each of the depth first traversals called ```preOrder```, ```inOrder```, and ```postOrder``` which returns an array of the values, ordered appropriately.

  - June 18: Add ```breadthFirst``` traversal which prints each node visited.

* At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

* Create a BinarySearchTree class 
  - Define a method named ```add``` that accepts a value, and adds a new node with that value in the correct location in the binary search tree. 
  
  - Define a method named ```contains``` that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
First, I created the node class that has a value, a left and a right property.

Next, I created my BST class and gave it a property of root, which was null. I created the method named add and the method named contain.

I continued to work the problem and find the solution. Then I wrote tests.

UPDATE: 6/18

I created a breadth-first traversal method in the Binary Tree Class that prints each node visited. I decided to see if the root has a value and if it does, print it. Then I wanted to enqueue the root's children, look at left child, enqueue its children, print it and then dequeue it.  I repeated this sequence for the left child on the second layer and continued the whole pattern.

##Whiteboard (June 18 requirement)
![Whiteboard](assets/breadth_first.JPG)