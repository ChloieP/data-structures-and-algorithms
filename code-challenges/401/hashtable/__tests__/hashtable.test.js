'use strict';

const { HashTable, LinkedList } = require('../hashTable');

describe('Hash Table', () => {
  it('should construct a Hash Table', () => {
    //Arrange
    let hashTable;
    let expectedSize = 42;
    //Act
    hashTable = new HashTable(expectedSize);

    //Assert
    expect(hashTable).toBeInstanceOf(HashTable);
    expect(hashTable.size).toBeDefined();
    expect(hashTable.size).toBe(expectedSize);
    expect(hashTable.buckets).toBeDefined();
    expect(hashTable.buckets.length).toBe(expectedSize);
  });

  describe('hash(key)', () => {
    it('should hash cat to 3 with 5 buckets', () => {
      //Arrange
      let expectedHash = 3;
      let key = 'cat';
      let hashTable = new HashTable(5);

      //Act
      let result = hashTable.hash(key);

      //Assert
      expect(result).toBe(expectedHash);
    });

    it('should hash foo to 1 with 5 buckets', () => {
      //Arrange
      let expectedHash = 1;
      let key = 'foot';
      let hashTable = new HashTable(5);

      //Act
      let result = hashTable.hash(key);

      //Assert
      expect(result).toBe(expectedHash);
    });
  });

//Other hash constructor tests: 1. Default bucket size, 2. Check for default value of number - anything not number returns error, 3. String for keys, not string throws error.
});