'use strict';

const Graph = require('../../graph/graph');
const depthFirst = require('../depth-first');

describe('Depth first traversal diving', () => {

  let graph;
  let happyCities = ['8', '6', '7', '5', '3', '0', '9'];


  beforeEach(() => {

    graph = new Graph.Graph();

    const eight = graph.addValue('8');
    const six = graph.addValue('6');
    const seven = graph.addValue('7');
    const five = graph.addValue('5');
    const three = graph.addValue('3');
    const oh = graph.addValue('0');
    const nine = graph.addValue('9');

    graph.addEdge(eight, six);
    graph.addEdge(six, seven);
    graph.addEdge(seven, five);
    graph.addEdge(five, three);
    graph.addEdge(three, oh);
    graph.addEdge(oh, nine);
    graph.addEdge(nine, eight);
  });

  it('can return the correct array', () => {
    const eight = graph.addValue('8');

    expect(depthFirst(graph, eight)).toEqual([{'value': '8'}, {'value': '6'}, {'value': '7'}, {'value': '5'}, {'value': '3'}, {'value': '0'}, {'value': '9'}]);
  });

  it('will return null if there is no graph ', () => {

    expect(depthFirst()).toBeNull();
  });

  it('will return an invalid message if graph has no root', () => {

    expect(depthFirst(graph)).toBeNull();
  });
});