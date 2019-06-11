const { filter } = require('../src')

test('filter function', () => {
  const col = [
    { name: 'abc', sign: true },
    { name: 'def', sign: false },
    { name: 'ghi', sign: true }
  ]

  const expectedResult = [
    { name: 'abc', sign: true },
    { name: 'ghi', sign: true }
  ]

  expect(filter(obj => obj.sign == true)(col)).toEqual(expectedResult)

  const emptyArr = []
  expect(filter()(emptyArr)).toEqual([])
})
