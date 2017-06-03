Object.clone = function (obj) {//深克隆
  if (typeof (obj) == "object") {//如果obj是对象
    var o =//有必要区分数组和普通对象
      Object.prototype.toString.call(obj) == "[object Array]" ? [] : {};
    for (var key in obj) {//遍历obj的自有属性
      //如果key是obj的自有属性
      if (obj.hasOwnProperty(key)) {
        o[key] = arguments.callee(obj[key]);//arguments.callee调的是当前的Object.clone函数
      }
    }
    return o;
  } else {//如果obj是原始类型的值，就直接返回副本
    return obj;
  }
}