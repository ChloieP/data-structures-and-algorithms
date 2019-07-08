'use strict';

const HashTable = require('../hashtable/hashtable');

const repeatedWord = (string) => {
  if (typeof string !== 'string') return 'Error! Input must be a string.';
  
  let words = string.toLowerCase().replace( /([^\s\w])/g, '').split(' ');
  let hash = new HashTable.HashTable(1024);

  for (let i = 0; i < words.length; i++) {
    if(hash.contains(words[i])) {
      return words[i];

    } else {
      hash.add(words[i], i);
    }
  }
   return null;
};

module.exports = repeatedWord;


