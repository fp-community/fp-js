const { arrayOf } = require('../src')

test('arrayOf', () => {
  expect(arrayOf(1, 2, 3)).toEqual([1, 2, 3])
})
