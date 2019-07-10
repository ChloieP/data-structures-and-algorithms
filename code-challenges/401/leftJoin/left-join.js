'use strict';

const leftJoin = (synHashMap, antHashMap) => {
  let output = [];
  for (let [word, synonym] of synHashMap) {
    let antonym = antHashMap.has(word) ? antHashMap.get(word) : null;
    output.push([word, synonym, antonym]);
  }
  return output;
};

const leftJoinObj = (stringSyn, stringAnt) => {
  let output = [];
  for (let word in stringSyn) {
    let synonym = stringSyn[word],
      antonym = stringAnt.hasOwnProperty(word) ? stringAnt[word] : null;
    output.push([word, synonym, antonym]);
  }
  return output;
};

module.exports = {leftJoin, leftJoinObj};