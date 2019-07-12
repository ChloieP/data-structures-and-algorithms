# Graph
Implement your own Graph.

## Challenge
The graph should be represented as an adjacency list, and should include the following methods:

 ```AddNode()```
  * Adds a new node to the graph
  * Takes in the value of that node
  * Returns the added node

 ```AddEdge()```
  * Adds a new edge between two nodes in the graph
  * Include the ability to have a “weight”
  * Takes in the two nodes to be connected by the edge
  * Both nodes should already be in the Graph
  
 ```GetNodes()```
  * Returns all of the nodes in the graph as a collection (set, list, or similar)

 ```GetNeighbors()```
  * Returns a collection of nodes connected to the given node
  * Takes in a given node
  * Include the weight of the connection in the returned collection

 ```Size()```
  * Returns the total number of nodes in the graph

## Approach & Efficiency
* The worst case scenario for repeatedWord starts as O(log n) but presents an O(1) solution.

* I pulled in the hash table lab from last week. I then used ```repeatedWord``` to splits the lengthy string into an array of words by splitting the string at each space. Then the word is forced into lower case and parsed for letters. The indexes are inspected for a match. If it is a match, then the word is returned since a collision is produced, other wise the word is added to the array. If no matches are found in the string, null is returned (edge case coverage).

## Solution

[Repeated Word UML](./assets/repeated_word.JPG)