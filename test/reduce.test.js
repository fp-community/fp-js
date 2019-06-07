const { reduce } = require('../src');

test('reduce function', () => {
    expect(reduce((a) => a * 3, 1)([1])).toEqual(3);
    expect(reduce((a) => a * 3, 1)([1, 2])).toEqual(9);
    expect(reduce((a) => a * 3, 1)([1, 2, 3])).toEqual(27);
})