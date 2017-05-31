// 请用算法实现
// 给定的无序不重复数组A中，取出N个数，使其相加和为M
// 并给出算法的时间/空间 复杂度

var a = [2, 3, 1, 4, 5, 6, 7, 8, 9, 10]
var M = 10;


var a1 = a.sort(function (a, b) {
  return a - b
});
console.log(a1)
var MaxN = 0;
var tempResult = 0;
a1.forEach(function (e, i) {
  if (tempResult + e >= M && MaxN == 0) {
    MaxN = i + 1
  } else {
    tempResult = tempResult + e
  }
})
console.log(MaxN)
for (var index = 1; index < 5; index++) {
  var N = index;

}