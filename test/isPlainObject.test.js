const { isPlainObject } = require('../src');

describe('object', () => {
  it('should return true for object', () => {
    expect(isPlainObject({ abc: 123 })).toBe(true);
  })

  it('should return false for primitive types', () => {
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject('abc')).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(false)).toBe(false);
  })

  it('should return false for functions', () => {
    expect(isPlainObject(() => {})).toBe(false);
  })

  it('should return false for arrays', () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject([1, 2, 3])).toBe(false);
  })

  it('should return false for Date', () => {
    expect(isPlainObject(new Date())).toBe(false);
  })

  it('should return false for Regex', () => {
    expect(isPlainObject(/regex/)).toBe(false);
  })

  it('should return false for new Boolean()', () => {
    expect(isPlainObject(new Boolean(true))).toBe(false);
    expect(isPlainObject(new Boolean(false))).toBe(false);
  })

  it('should return false for new Number()', () => {
    expect(isPlainObject(new Number(1))).toBe(false);
    expect(isPlainObject(new Number)).toBe(false);
  })

  it('should return false for new String()', () => {
    expect(isPlainObject(new String('abc'))).toBe(false);
  })

  it('should return false for Object.create(null)', () => {
    expect(isPlainObject(Object.create(null))).toBe(false);
  })

  it('should return false for object whose constructor is not Object', () => {
    function Shape () {
      this.x = 0;
      this.y = 0;
    }

    expect(isPlainObject(Object.create(new Shape(1,2)))).toBe(false);
    expect(isPlainObject(Object.create({ abc: 123 }))).toBe(true);
    expect(isPlainObject(new Object({ abc: 123 }))).toBe(true);
  })
})