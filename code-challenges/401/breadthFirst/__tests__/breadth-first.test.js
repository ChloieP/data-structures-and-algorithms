'use strict';

const breadthFirst = require('../breadth-first');
const Graph = require('../../graph/graph');

let graph = new Graph();

const eight = 8;
const six = 6;
const seven = 7;
const five = 5;
const three = 3;
const oh = 0;
const nine = 9;

graph.addValue(eight);
graph.addValue(six);
graph.addValue(seven);
graph.addValue(five);
graph.addValue(three);
graph.addValue(oh);
graph.addValue(nine);

graph.addEdge(eight, six);
graph.addEdge(six, seven);
graph.addEdge(seven, five);
graph.addEdge(five, three);
graph.addEdge(three, oh);
graph.addEdge(oh, nine);
graph.addEdge(nine, eight);


describe('Breadth First Traversal', () => {
  it('can, in order, return the collection visited', () => {
    expect(breadthFirst(8, graph)).toContain(8, 6, 7, 5, 3, 0, 9);
  });
});
