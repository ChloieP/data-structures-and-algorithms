'use strict';

const grid = require('../graph');

let graph = new grid.Graph();

describe('The Joy Of Graph', () => {  
  it('can successfully add a node to the graph', () => {
    expect(graph.addNode(1)).toEqual(1);
  });

  it('can successfully add an edge to the graph', () => {
    graph.addNode(1);
    graph.addNode(2);

    expect(graph.addEdge(1,2, 3)).toEqual([{'node': 2, 'weight': 3}]);
  });

  it('can properly retrieve a collection of all nodes from the graph', () => {
    graph.addNode(1);
    graph.addNode(3);
    graph.addNode(5);

    expect(graph.getNodes()).toContain(1, 3, 5);
  });

  it('can properly retreive all appropriate neighbors from the graph', () => {
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(1,2);
    graph.addEdge(3,2, '8675309');

    expect(graph.getNeighbors(3)).toEqual([{'node': 2, 'weight': '8675309'}])
  });

  it('can successfully return neighbors with the weight between nodes included', () => {
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(1,2);
    graph.addEdge(3,2);

    expect(graph.getNeighbors(3)).toEqual([{'node': 2, 'weight': 0}])
  });

  it('can return the proper size, representing the number of nodes in the graph', () => {
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);

    expect(graph.getSize()).toEqual(15);
  });

  it('can return a graph with one node and one edge', () => {
    graph.addNode(16);
    graph.addEdge(16, 16);

    expect(graph.getNodes()).toContain(16);
  });

  it('can properly returns null for an empty graph', () => {
    let graph = new grid.Graph();

    expect(graph.getNodes()).toBeNull();
  });

});