'use strict';

let depthFirst = (graph, root, list) => {
  let list = [];

  if(!graph || !root){return null;}
  if(!graph.getNodes().includes(root)){return null;}
  if(root.visited === false){
    list.push(root.value);
    root.visited === true;
  }

  graph.getNeighbors(root).forEach(neighbor => {
    if(neighbor.node.visited === false){
      depthFirst(graph, neighbor.node, list);
    }
  });

  return list;
};

module.exports = depthFirst;