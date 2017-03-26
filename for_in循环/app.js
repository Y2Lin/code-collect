var scores = [10, 11, 12];
var total = 0;

for (var score in scores) {
  total += score;
}

var mean = total / scores.length;
console.log(mean);

// 解释： for in 循环循环的值永远是key, key是一个字符串。 所以total的值是：'0012'。
// 它是一个字符串，字符串'0012'/3,0012会被转换成12，然后除以3，结果是4。