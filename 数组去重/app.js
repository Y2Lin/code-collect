Array.prototype.uniq = function () {
  var arr = [];
  var flag = true;
  this.forEach(function (item) {
    // 排除 NaN (重要！！！)
    if (item != item) {
      flag && arr.indexOf(item) === -1 ? arr.push(item) : '';
      flag = false;
    } else {
      arr.indexOf(item) === -1 ? arr.push(item) : ''
    }
  });
  return arr;
}
// Array.prototype.uniq = function() {
//   return Array.from(new Set(this));
// }

([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]).uniq()
