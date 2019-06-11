const { last } = require('../src')

test('last function', () => {
  const arr = [1, 2, 3]
  expect(last(arr)).toEqual(3)

  const emptyArr = []
  expect(last(emptyArr)).toEqual(null)

  const emptyObj = {}
  expect(last(emptyObj)).toEqual(null)
})
