function _LazyMan(name) {
  this.tasks = []; // 任务队列
  var self = this;
  var fn = (function (n) {
    var name = n;
    return function () {
      console.log("Hi! This is " + name + "!");
      self.next();
    }
  })(name);
  this.tasks.push(fn);
  setTimeout(function () {
    self.next();
  }, 0); // 在下一个事件循环启动任务
}
/* 事件调度函数 */
_LazyMan.prototype.next = function () {
  var fn = this.tasks.shift();
  fn && fn();
}
_LazyMan.prototype.eat = function (name) {
  var self = this;
  var fn = (function (name) {
    return function () {
      console.log("Eat " + name + "~");
      self.next()
    }
  })(name);
  this.tasks.push(fn);
  return this; // 实现链式调用
}
_LazyMan.prototype.sleep = function (time) {
  var self = this;
  var fn = (function (time) {
    return function () {
      setTimeout(function () {
        console.log("Wake up after " + time + "s!");
        self.next();
      }, time * 1000);
    }
  })(time);
  this.tasks.push(fn);
  return this;
}
_LazyMan.prototype.sleepFirst = function (time) {
  var self = this;
  var fn = (function (time) {
    return function () {
      setTimeout(function () {
        console.log("Wake up after " + time + "s!");
        self.next();
      }, time * 1000);
    }
  })(time);
  this.tasks.unshift(fn);
  return this;
}
/* 封装 */
function LazyMan(name) {
  return new _LazyMan(name);
}

// commonJS 暴露
module.exports = LazyMan;