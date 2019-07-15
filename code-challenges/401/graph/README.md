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
* I followed the demo in class and then completed unfinished tasks based upon my learning there. As I performed the required testing, I realized that weight needed to be considered in a couple of the methods and implemented that. 

* There is plentiful online documentation for the search string 'graph implementation javascript.' It is my understanding that if I truly understand graph then the rest of the DSA is wide-open to my understanding. I thoroughly enjoyed graph and its logic pattern. I think had I learned graph first, then the other DSA challenges would have been more readily learned.

* I believe the time and space complexity for graph is O(V+E).

## Solution

[Graph Diagram](./assets/graph_diagram.JPG)
[Breadth First Traversal](./assets/breadth-first-graph.JPG)