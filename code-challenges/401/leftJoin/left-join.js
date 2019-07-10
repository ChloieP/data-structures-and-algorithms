'use strict';

const leftJoin = (synHashMap, antHashMap) => {
  let output = [];
  for (let [word, synonym] of synHashMap) {
    let antonym = antHashMap.has(word) ? antHashMap.get(word) : null;
    output.push([word, synonym, antonym]);
  }
  return output;
};

const leftJoinWord = (wordSyn, wordAnt) => {
  let output = [];
  for (let word in wordSyn) {
    let synonym = wordSyn[word],
      antonym = wordAnt.hasOwnProperty(word) ? wordAnt[word] : null;
    output.push([word, synonym, antonym]);
  }
  return output;
};

module.exports = {leftJoin, leftJoinKeys};