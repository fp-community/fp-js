const { reduce } = require('../src');

test('reduce function', () => {
    expect(reduce((a) => a * 3, 0)([1])).toEqual(0);
    expect(reduce((a) => a * 3, 1)([1])).toEqual(3);
    expect(reduce((a) => a * 3, 1)([1, 2])).toEqual(9);
    expect(reduce((a) => a * 3, 1)([1, 2, 3])).toEqual(27);

    expect(reduce((a, b) => a + b, 0)([1, 2, 3])).toEqual(6);
    expect(reduce((a, b) => a * b, 0)([1, 2, 3])).toEqual(0);
    expect(reduce((a, b) => a * b, 1)([1, 2, 3])).toEqual(6);
})