var r1 = Array.prototype.concat.apply([], [1, [2, 3]])
console.log(r1);

function flatten(arr) {
  return arr.reduce((a, b) => [].concat(Array.isArray(a) && a ? flatten(a) : a, Array.isArray(b) && b ? flatten(b) : b), [])
}
console.log(flatten([1, [2, 3]]))