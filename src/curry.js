const curry = fn => {
  return (...args) => {
    if (args.length >= fn.length) {
      return fn(...args)
    }

    return curry(fn.bind(null, ...args))
  }
}

module.exports = curry
