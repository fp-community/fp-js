const { pipe } = require('../src');

test('pipe function', () => {
    expect(pipe(
       (a) => a + 3,
       (a) => a * 3, 
    )(1)).toEqual(12)

    expect(pipe(
        (a) => a * 3,
        (a) => a + 3,
    )(1)).toEqual(6);
});
