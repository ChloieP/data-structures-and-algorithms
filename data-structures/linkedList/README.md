# Lab-05 Linked List Implementations
Implement a Singly Linked List Data Structure
## Challenge
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
* Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
* This object should be aware of a default empty value assigned to head when the linked list is instantiated.
* Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
* Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
* Define a method called print which takes in no arguments and returns a collection all of the current Node values in the Linked List.
* At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.
*  Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

* CONTINUATION via Code Challenge 6:

* .append(value) which adds a new node with the given value to the end of the list
* .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
* .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## Approach & Efficiency
I started with reading the challenge carefully, and then went to the whiteboard to think through the problem fully. I used a wiki article on binary search that became the source of ideation for my pseudocode and algorithm. This challenge took 3 hours.

## Solution

* Append: (./assets/append.jpg) (with Jeff Lawrence)
* insertBefore: (./assets/insertBefore.jpg) (with Mike Chapman)
* insertAfter: (./assets/insertAfter.jpg)
* Link to code: https://github.com/ChloieP/data-structures-and-algorithms/blob/master/data-structures/linkedList/files/linked-list.js



I started with reading the challenge carefully, and then wrote down my plan in my sketchbook. This challenge took 4 hours and the tests are giving me fits.

UPDATE: Append, insertAfter, insertBefore mob programmed with Jeff, Mike, and myself. This portion took 3.5 hours.
