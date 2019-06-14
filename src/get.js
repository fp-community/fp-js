const get = attr => obj => {
  if (!obj || !attr) return

  if (Object.prototype.toString.call(obj) !== '[object Object]') return

  if (Object.prototype.toString.call(attr) !== '[object String]') return

  const nested = attr.match(/\./)
  if (nested && nested.index !== 0) {
    const first = attr.substring(0, nested.index)
    const rest = attr.substring(nested.index + 1)

    return get(rest)(obj[first])
  }

  return obj[attr]
}

module.exports = get
