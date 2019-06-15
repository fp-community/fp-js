const { get } = require('../src')

describe('get', function () {
  it('should return element of a given object', () => {
    const obj = { abc: 123 }
    expect(get('abc')(obj)).toEqual(123)
  })

  it('should return element inside a deep object', () => {
    const deepObj = { abc: { def: 123 } }
    expect(get('abc.def')(deepObj)).toEqual(123)
  })

  it('should return undefined for nonexistent keys', () => {
    const obj = { abc: 123 }
    expect(get('def')(obj)).toBeUndefined()
  })

  it('should return undefined for falsy objects', () => {
    expect(get('key')(null)).toBeUndefined()
    expect(get('key')(undefined)).toBeUndefined()
  })

  it('should return undefined if it is not object', () => {
    expect(get('key')([])).toBeUndefined()
    expect(get('key')(() => {})).toBeUndefined()
    expect(get('key')('{ key: 1 }')).toBeUndefined()
  })

  it('should return undefined for falsy keys', () => {
    const obj = { abc: 123 }
    expect(get(null)(obj)).toBeUndefined()
    expect(get(undefined)(obj)).toBeUndefined()
  })

  it('should return undefined if key is not string', () => {
    const obj = { abc: 123 }
    expect(get([])(obj)).toBeUndefined()
    expect(get(() => {})(obj)).toBeUndefined()
    expect(get(100)(obj)).toBeUndefined()
  })
})
