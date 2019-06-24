const isPlainObject = obj => {
  if (!obj) return false
  if (obj.constructor !== Object) return false

  return true
}

module.exports = isPlainObject
