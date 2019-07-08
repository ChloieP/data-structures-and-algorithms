'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value){
    if(!value) throw new Error('Invalid value');

    const node = new Node(value);

    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }

    current.next = node;
  }

  getWithKey(key) {
    if(!this.head) return;

    let current = this.head;

    while(current){
      if(current.value[0] === key) return current.value[1];
      current = current.next;
    }

    return;
  }

  values() {
    let values = [];
    let current = this.head;

    while(current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
};

const hash = word => {
  let sum = 0;
  for(let i = 0; i < word.length; i++){
    sum += word.charCodeAt(i);
  }

  const product = sum * 599;
  const index = Math.floor(product % 1024);

  return index;
};

const repeatedWord = string => {
  const wordArray = string.split('');
  const hashTable = Array(1024).fill(new LinkedList);

  let result = null;
  for (let i = 0; i < wordArray.length; i++){
    const regex = /[a-z]+/gi;
    const word = wordArray[i].toLowerCase().match(regex)[0];
    const index = hash[word];

    if(hashTable[index].includes[word]) {
      result = word;

    } else {
      hashTable[index].insert(word);
    }
  }
  return result;
};

module.exports = { LinkedList, hash, repeatedWord };
