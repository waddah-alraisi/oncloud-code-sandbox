const { test } = require('node:test');
const assert = require('node:assert/strict');
const { sum } = require('../sum.js');

test('adds two numbers', () => {
  assert.equal(sum(2, 3), 5);
});

// Fails on purpose: the OnCloud Code Tester's fail case.
test('fails on purpose: 2 + 2 is not 5', () => {
  assert.equal(sum(2, 2), 5);
});
