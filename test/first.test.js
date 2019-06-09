const { first } = require('../src');

test('first function', () => {
    const arr = [1, 2, 3];
    expect(first(arr)).toEqual(1);

    const obj = { "1": 123 };
    expect(first(obj)).toEqual(null);

    const emptyArr = [];
    expect(first(emptyArr)).toEqual(null);

    const emptyObj = {};
    expect(first(emptyObj)).toEqual(null);
});