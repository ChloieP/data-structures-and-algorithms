const repeatedWord = require('../repeated-word');
const HashTable = require('../repeated-word');

describe('repeated-word', () => {
  it('should return null if string has no repeating words', () => { 
    const string = 'When life gives lemons, make lemonade!';

    expect(repeatedWord(string)).toBeNull();
  });

  it('should return null has repeating words but no spaces', () => { 
    const string = 'Whenlifegivesyoulemons,yougettomakelemonade!';

    expect(repeatedWord(string)).toBeNull();
  });

  it('should return error if string contains non-string elements', () => { 
    expect(repeatedWord(7895)).toBe('Error! Input must be a string.');
  });

  it('should return first repeated word in sentenct', () => { 
    const string = 'When life gives you lemons, you get to make lemonade!';

    expect(repeatedWord(string)).toBe('you');
  });
});