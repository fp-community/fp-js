const { sum } = require('../src');

test('map test', () => {
  expect(sum(1, 2)).toBe(3);
});