const map = fn => col => {
  if (fn === undefined || null) return col
  arr = Object.prototype.toString.call(col) === '[object Array]' ? col : [col]
  result = []
  arr.forEach(item => result.push(fn(item)))
  return result
}

module.exports = map
