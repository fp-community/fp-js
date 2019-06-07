const { map } = require('../src');

test('test map function', () => {
    expect(map((a) => a * 3)([1, 2, 3])).toEqual([3, 6, 9])
    expect(map()([1, 2, 3])).toEqual([1, 2, 3])
    expect(map((a) => a * 3)(1)).toEqual([3])
});
