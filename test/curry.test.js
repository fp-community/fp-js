const { curry } = require('../src')

function add2(x,y) {
	return x + y
}

function add3(x, y, z) {
	return x + y + z
}

describe('curry', () => {
	it('returns a function', () => {
		expect(typeof curry(add2)).toBe('function')
	})

	it('returns a partial function', () => {
		expect(typeof curry(add2)(1)).toBe('function')
		expect(typeof curry(add3)(1)(2)).toBe('function')
	})

	it('returns the result of the curried function', () => {
		expect(curry(add2)(1)(2)).toBe(add2(1,2))
		expect(curry(add2)(1,3)).toBe(add2(1,3))
		expect(curry(add3)(1,2,3)).toBe(add3(1,2,3))
		expect(curry(add3)(1)(2)(3)).toBe(add3(1,2,3))
		expect(curry(add3)(1, 2)(3)).toBe(add3(1,2,3))
		expect(curry(add3)(1)(2,3)).toBe(add3(1,2,3))
	})
})
