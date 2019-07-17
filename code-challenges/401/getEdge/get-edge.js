'use strict';

function getEdge(graph, cities){
  // console.log(graph);
  // console.log(cities);
  let counter = 0;
  let current;
  let graphCities = graph.getNodes();
  console.log(graphCities);

  for(let i = 0; i < graphCities.length; i++){
    if(graphCities[i].value === cities[0]){
      current = graphCities[i];
    }
  }
  console.log(current);

  for(let i = 1; i < cities.length; i++){

    let neighbor = graph.getNeighbors(current);
    
    let isPresent = false;
    for(let j = 0; j < neighbor.length; j++){
      if(neighbor[j].node.value === cities[i]){
        counter += neighbor[j].weight;
        isPresent = true;
        current = neighbor[j].node;
        break;
      }
    }
    if(!isPresent){
      return false + ' $0';
    }
  }
  return `true: $${counter}`;
}

module.exports = getEdge;
