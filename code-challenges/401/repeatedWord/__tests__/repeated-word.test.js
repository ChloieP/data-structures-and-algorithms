const { LinkedList, hash, repeatedWord } = require('../repeated-word');

describe('`hash` function', () => {
  it('should return a hash of a string', () => { 
    const string = 'dog';

    const d = string.charCodeAt(0);
    const o = string.charCodeAt(1);
    const g = string.charCodeAt(2);

    let sum = d + o + g;
    const product = sum * 599;
    const index = Math.floor(product % 1024);

    expect(hash(string)).toBe(index);
  });
})