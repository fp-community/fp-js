const get = attr => obj => {
  if (!obj) return

  if (!typeof attr === 'string') return

  if (attr.match(/\./)) {
    const [first, ...rest] = attr.split('.')

    return get(rest.join(''))(obj[first])
  }

  return obj[attr]
}

module.exports = get
