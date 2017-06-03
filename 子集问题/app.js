function calNum(n, m) {
  var a = 1;
  for (var i = n; i <= m; i++) {
    a *= i;
  }
  return a;
}

// var n = 3;
var num = [1, 2, 3, 4,]


// 嵌套循环改为递归
// level 为循环嵌套层数

function pickOne(arr, level) {
  if (level === 0) {
    return arr;
  } else {
    for (var i = 0; i < num.length; i++) {
      
    }
    console.log(arr.length);
    return pickOne(arr, level - 1)
  }
}

console.log(pickOne(new Array(calNum(3, num.length)), 3))