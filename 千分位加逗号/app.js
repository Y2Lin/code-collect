var num = '1234256.22233';
var nStr0 = num.split('.')[0];
var nStr1 = num.split('.')[1]
var len = nStr0.length;
var nStr2 = nStr0.split("").reverse().map(function (item, index) {
  if ((index + 1) % 3 == 0 && index !== len - 1) {
    return ',' + item
  } else {
    return item
  }
}).reverse().join("");
console.log(nStr2 + '.' + nStr1)
