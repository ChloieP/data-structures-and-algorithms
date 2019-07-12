'use strict';

class Node {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight || 0;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addValue(value) {
     this.addNode(new Node(value));
  }

  addNode(node){
    this._adjacencyList.set(node, []);
  }

  addDirectedEdge(startNode, endNode, weight = 0) {
    if(!this._adjacencyList.has(startNode) || !this._adjacencyList.has(endNode)){
      throw new Error('ERROR! Invalid nodes.');
    }
    
    const adjacencies = this._adjacencyList.get(startNode);
    adjacencies.push(new Edge(endNode, weight));
  }

  addBiDirectionalEdge(node_a, node_b, weight = 0){
    this.addDirectedEdge(node_a, node_b, weight);
    this.addDirectedEdge(node_a, node_b, weight);
  }

  getNeighbors(node){
    if(!this._adjacencyList.has(node)){
      throw new Error('ERROR! Invalid node.', node);
    }

    return [...this._adjacencyList.get(node)];
  }

  pathTo(startNode, goalNode){
    const stack = [];
    const visitedNodes = new Set();
    const parentPath = new Map();

    stack.push(startNode);
    visitedNodes.add(startNode);

    while(stack.length){
      const currentNode = stack.pop();

      console.log(currentNode, goalNode);
      if(currentNode === goalNode){
        return parentPath;
      }

      const neighbors = this.getNeighbors(currentNode);

      for(let edge of neighbors) {
        const neighborNode = edge.node;

        if(visitedNodes.has(neighborNode)){
          continue;  //controls in a for loop, as in halt this iteration
        
        } else {
          visitedNodes.add(neighborNode);
        }

        stack.push(neighborNode);
        parentPath.set(neighborNode, currentNode);
        }
      }
    }
  

  prettyPrintAdjacencyList(){
    //iterate over all key in map,
    //for each key, print to screen ex. console logs
    //print node in all edges
  }
}

const graph = new Graph();

const eight = new Node(8);
const six = new Node(6);
const seven = new Node(7);
const five = new Node(5);
const three = new Node(3);
const oh = new Node(0);
const niiiine = new Node(9);

graph.addNode(eight);
graph.addNode(six);
graph.addNode(seven);
graph.addNode(five);
graph.addNode(three);
graph.addNode(oh);
graph.addNode(niiiine);

graph.addDirectedEdge(eight, six);
graph.addDirectedEdge(eight, five);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(seven, five);
graph.addDirectedEdge(five, three);
graph.addDirectedEdge(three, oh);
graph.addDirectedEdge(oh, niiiine);
graph.addDirectedEdge(niiiine, eight);

console.log(graph.getNeighbors(eight));

module.exports = Graph;