const { get } = require('../src')

test('test get function', () => {
  const obj = { abc: 123 }
  expect(get('abc')(obj)).toEqual(123)
  expect(get('dec')(obj)).toEqual(null)

  const deepObj = { abc: { def: 123 } }
  expect(get('abc.def')(deepObj)).toEqual(123)
})
