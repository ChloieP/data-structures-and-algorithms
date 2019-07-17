'use strict';

const graph = require('../graph/graph');

function getEdge(graph, cities){
  let counter = 0;
  let current;
  let graphCities = graph.getNodes();

  for(let i = 0; i < graphCities.length; i++) {
    if(graphCities[i].value === cities[0]) {
      current = graphCities[i];
    }
  }

  for(let i = 1; i < array.length; i++) {
    let neighbor = graph.getNeighbors(current);
    let isPresent = false;

    for(let j = 0; j < neighbor.length; j++) {
      if(neighbor[j].node.value === array[i]) {
        counter += neighbor[j].weight;
        isPresent = true;
        current = neighbor[j].node;
        break;
      }
    }

    if(!isPresent) {
      return false + ': $0';
    }
  }

  return `true: $${counter}`;
}

module.exports = getEdge;
