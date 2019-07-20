'use strict';

const tree_intersection = (tree1, tree2) => {
  if(!tree1.root || !tree2.root) {
    throw new Error('rootless tumbleweed');
  }
  let treeOak = tree1.preOrder();
  let treePine = tree2.preOrder();
  let commonValues = [];

  for(let i = 0; i < treeOak.length - 1; i++) {
    for(let j = 0; j < treePine.length - 1; j++) {
      if(treeOak[i] === treePine[j]){
        commonValues.push(treeOak[i]);
      }
    }
  }
  return commonValues;
};

module.exports = tree_intersection;