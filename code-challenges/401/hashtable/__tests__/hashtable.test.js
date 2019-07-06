'use strict';

const { HashTable } = require('../hashTable');

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

  let hashTable = new HashTable;
  describe('tests as stated in assignment', () => {
    
    it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
      hashTable.add('Chloie', '42');
      expect(hashTable.contains('Chloie')).toBeTruthy();
    });

    it('Retrieving based on a key returns the value stored', () => {
      expect(hashTable.get('Chloie')).toEqual('42');
    });

    it('Successfully returns null for a key that does not exist in the hashtable', () => {
      expect(hashTable.get('Medusa')).toBeNull();
    });

    it('Successfully handles a collision within the hashtable', () => {
      expect(()=> { 
        hashTable.add('Chloie', '42')}).toThrowError('Key already in use');
    });

    it('Successfully retrieves a value from a bucket within the hashtable that has a collision', () => {
      expect(hashTable.get('Chloie')).toEqual('42');
    });  
  });

  describe('Successfully hash(key) to an in-range value', () => {
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
      let key = 'foo';
      let hashTable = new HashTable(5);

      //Act
      let result = hashTable.hash(key);

      //Assert
      expect(result).toBe(expectedHash);
    });
  });
});