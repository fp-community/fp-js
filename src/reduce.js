const reduce = (fn, initialVal) => col => {
  const _fn = (left, col) => {
    const isArray = () => typeof col === 'object' && col.length > 0
    const elem = isArray() ? col.shift() : col
    return isArray() ? _fn(_fn(left, col), elem) : fn(left, elem)
  }
  return _fn(initialVal, col)
}

module.exports = reduce
