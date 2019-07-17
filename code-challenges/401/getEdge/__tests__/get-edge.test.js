'use strict';

const Graph = require('../../graph/graph');
const getEdge = require('../get-edge');

describe('Acceptable Flight Patterns', () => {

  let graph;
  let happyCities = ['PDX', 'JAX', 'Bahamas', 'CHI'];
  let sadCities = ['Bahamas', 'PDX', 'CHI'];
  let flightCancelled = ['PDX', 'PDX'];

  beforeEach(() => {

    graph = new Graph.Graph();

    let PDX = graph.addValue('PDX');
    let JAX = graph.addValue('JAX');
    let Bahamas = graph.addValue('Bahamas');
    let CHI = graph.addValue('CHI');
    let Jamaica = graph.addValue('Jamaica');

    graph.addBiDirectionalEdge(PDX, JAX, 400);
    graph.addBiDirectionalEdge(JAX, Bahamas, 100);
    graph.addBiDirectionalEdge(CHI, Jamaica, 350);
    graph.addBiDirectionalEdge(Bahamas, CHI, 300);
    graph.addBiDirectionalEdge(Bahamas, Jamaica, 150);
    graph.addBiDirectionalEdge(Bahamas, JAX, 100);

  });

  it('can find the Bahamas and be happy!', () => {
    expect(getEdge(graph, happyCities)).toEqual('true: $800');
  });

  it('cannot find Jamaica and is sad', () => {
    expect(getEdge(graph, sadCities)).toEqual('false $0');
  });

  it('returns false if your flight is cancelled', () => {
    expect(getEdge(graph, flightCancelled)).toEqual('false $0')
  });
});

