let graph = new graph.Graph();
let PDX = graph.addNode('PDX');
let JAX = graph.addNode('JAX');
let Bahamas = graph.addNode('Bahamas');
let CHI = graph.addNode('CHI');
let Jamaica = graph.addNode('Jamaica');

graph.addBiDirectionalEdge(PDX, JAX, 400);
graph.addBiDirectionalEdge(JAX, Bahamas, 100);
graph.addBiDirectionalEdge(CHI, Jamaica, 350);
graph.addBiDirectionalEdge(Bahamas, CHI, 300);
graph.addBiDirectionalEdge(Bahamas, Jamaica, 150);
graph.addBiDirectionalEdge(Bahamas, JAX, 100);

let happyCities = ['PDX', 'JAX', 'Bahamas', 'CHI'];
let sadCities = ['Bahamas', 'PDX', 'CHI'];

console.log(getEdge(graph, happyCities));
console.log(getEdge(graph, sadCities));