var num = [1, 2, 3]
var arr = [];
function pickOne(level) {
  for (var i = 0; i < num.length; i++) {
    if (level === 0) {
      console.log(arguments[1])
    } else {
      if (arguments[1]) {
        var newArr = arguments[1];
      } else {
        var newArr = [];
      }
      newArr.push(i + 1)
      pickOne(level - 1, newArr)
    }
  }
}
pickOne(2)
