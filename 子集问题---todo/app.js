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

function pickOne(level, prevArr) {
  for (var i = 0; i < num.length; i++) {
    if (level === 0) {
      // return arr;
    } else {

    }
    console.log(arr.length);
    return pickOne(level - 1, prevArr)
  }
}

console.log(pickOne(3, num))