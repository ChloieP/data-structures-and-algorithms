'use strict';

const balanced = require('../multi-bracket-validation');

describe('multi-bracket-validation', () => {
  let proof = '[[{}()]{}]';
  it('should return false for an imbalanced bracket. )]', () => {

    expect(balanced(proof)).toBe(false);
  });

  it('should fail for a nested string', () => {
    let failure = '[[[[]){})';

    expect(balanced(failure)).toBe(false);
  });

  it('should return false for a single bracket. {', () => {

    expect(balanced(proof)).toBe(false);
  });
})