// 实现一个算法，寻找字符串中出现次数最少的、并且首次出现位置最前的字符。
// 如cbaacfdeaebb，符合要求的是f，因为他只出现了一次（次数最少）。并且比其他只出现一次的字符（如d）首次出现的位置最靠前。
var str = "cbaacfdeaebb";
var arr = str.split("");
var obj = {}; // 个数
var indexArr = []; // 顺序数组
arr.forEach(function (item) {
  if (obj[item]) {
    obj[item]++;
  } else {
    obj[item] = 1;
  }
  if (indexArr.indexOf(item) == -1) {
    indexArr.push(item);
  }
});
console.log(obj);
console.log(indexArr);
var min = {
  name: "",
  num: str.length
}
indexArr.reverse().forEach(function (name) { // 倒置 保证后面替代前面的
  var num = obj[name];
  if (min.num > num || min.num == num) {
    min.name = name;
    min.num = num;
  }
});
console.log(min);