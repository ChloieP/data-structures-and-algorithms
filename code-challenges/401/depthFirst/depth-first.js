'use strict';

function depthFirst(graph, root) {
  if(!graph || !root){return null;}
  if(!graph.getNodes().includes(root)){return null;}

  const stack = [];
  const visitedNodes = new Set();
  const graphInitiated = graph.getNodes();
  const startNode = graphInitiated[0];

  let result = [];

  stack.push(startNode);
  visitedNodes.add(startNode);

    while(stack.length){
    const currentNode = stack.pop();

    result.push(currentNode);

    const neighbors = graph.getNeighbors(currentNode);

    for(let edge of neighbors) {
      const neighborNode = edge.node;

      if(visitedNodes.has(neighborNode)){
        continue; 
      
      } else {
        visitedNodes.add(neighborNode);
      }
      stack.push(neighborNode);
    }
  }
  return result;
};

module.exports = depthFirst;