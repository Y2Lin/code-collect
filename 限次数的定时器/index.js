class countTimeout {
  constructor(cb = () => { }, count, time = 100) {
    this.cb = cb;
    this.count = count;
    this.time = time;
  }
  count = 10;
  time = 100;
  _callCount = 0;
  cb() { }
  run() {
    setTimeout(() => {
      if (this._callCount < this.count) {
        this.cb()
        this._callCount++
        this.run()
      } else {
        this._callCount = 0
      }
    }, this.time)
  }
}
// 测试代码
const cons = () => {
  console.log('1111');
}
let fun = new countTimeout(cons, 6, 1000);
fun.run();

