var P = [[1, 2], [6, 3], [3, 4], [4, 5], [3, 6]]

// 按照x轴排序
P.sort(function (item1, item2) {
  return item1[0] - item2[0]
})

var maxObj = {}; // x轴为key y轴为value

P.forEach(function (item) {
  if (typeof maxObj[item[0]] !== 'undefined') {
    if (maxObj[item[0]] < item[1]) {
      maxObj[item[0]] = item[1]
    }
  } else {
    maxObj[item[0]] = item[1]
  }
})
// 数据整理 object=》array
var maxArr = [];
for (var key in maxObj) {
  maxArr.push([key, maxObj[key]])
}
console.log(maxArr)