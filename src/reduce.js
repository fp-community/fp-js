const reduce = (fn, initialVal) => (col) => {
    const _fn = (left, col) => {
        const elem = typeof col === 'object' && col.length > 0 ? col.shift() : col;

        if (typeof col === 'object' && col.length > 0) {
           return _fn(_fn(left, col), elem);
        } else {
            return fn(left, elem);
        }
    }
    return _fn(initialVal, col);
}

module.exports = reduce;