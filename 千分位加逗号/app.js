var num = '1234256.22233';
var nStr0 = num.split('.')[0];
var nStr1 = num.split('.')[1]
var len = nStr0.length;
var nStr2 = nStr0.split("").map(function (item, index) {
  var rIndex = len - index
  if (rIndex % 3 == 0 && rIndex !== 0) {
    return ',' + item
  } else {
    return item
  }
}).join("");
console.log(nStr2 + '.' + nStr1)
