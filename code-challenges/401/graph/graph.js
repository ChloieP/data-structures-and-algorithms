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
    this.size = 0;
  }

  addValue(value) {
     this.addNode(new Node(value));
  }

  addNode(node){
    this._adjacencyList.set(node, []);
    this.size++;
    return node;
  }

  addEdge(startNode, endNode, weight = 0) {
    if(!this._adjacencyList.has(startNode) || !this._adjacencyList.has(endNode))
      throw new Error('ERROR! Invalid nodes.');
    
    const adjacencies = this._adjacencyList.get(startNode, weight);
    adjacencies.push(new Edge(endNode, weight));

    return adjacencies;
  }

  addBiDirectionalEdge(node_a, node_b, weight = 0){
    this.addEdge(node_a, node_b, weight);
    this.addEdge(node_a, node_b, weight);
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

  getNodes() {
    if(this.size !== 0) {
      return [...this._adjacencyList.keys()];
    } else {
      return null;
    } 
  }
  
  getSize() {
    return this.size;
  }

  breadthFirst(startNode) {
    const queue = [];
    const visitedSet = new Set();

    queue.unshift(startNode);
    visitedSet.add(startNode);

    if(this.size === 0){
      return null;
    }

    while(queue.length){
      const current = queue.pop();
      visitedSet.add(current);

      const neighbors = this.getNeighbors(current);

      for(let neighbor of neighbors){
        const neighborhood = neighbor.node;

        if(visitedSet.has(neighborhood))
          continue;
        
        else 
          visitedSet.add(neighborhood);

        queue.unshift(neighborhood);
      }
    }

    return visitedSet;
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

graph.addEdge(eight, six);
graph.addEdge(eight, five);
graph.addEdge(six, seven);
graph.addEdge(seven, five);
graph.addEdge(five, three);
graph.addEdge(three, oh);
graph.addEdge(oh, niiiine);
graph.addEdge(niiiine, eight);

console.log(graph.getNeighbors(eight));

module.exports = { Node, Edge, Graph };