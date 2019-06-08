const { flat } = require('../src');

test('flat function', () => {
    expect(
        flat([[1]])
    ).toEqual([1]);

    expect(
        flat([[1, 2]])
    ).toEqual([1, 2]);

    expect(
        flat([[1, 2], [3, 4]])
    ).toEqual([1, 2, 3, 4]);

    expect(
        flat([[1], [2, 3]])
    ).toEqual([1, 2, 3]);

    expect(
        flat([[1, 2], 2, 3])
    ).toEqual([1, 2, 2, 3]);
});
