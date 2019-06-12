'use strict';

const balanced = require('../multi-bracket-validation');

describe('multi-bracket-validation', () => {
  let proof = '[{()]}'

  it('should return true for a balaned bracket', () => {
    expect(balanced(proof)).toBeTruthy();
  });
})