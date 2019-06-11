const flat = args => {
  const _flat = args => {
    const [first, tail] = [args.shift(), args]
    if (first === undefined) return []
    return typeof first === 'object' && first.length > 0
      ? first.concat(_flat(tail))
      : [first].concat(_flat(tail))
  }

  return _flat(args)
}

module.exports = flat
