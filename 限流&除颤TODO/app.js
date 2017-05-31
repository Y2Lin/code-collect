//函数节流
/*
* @params {Function} fun 调用函数
* @params {delay} number 延迟时间
*/
const throttle = (fun, delay, ...rest) => {
  let last = null;
  return () => {
    const now = + new Date();
    if (now - last > delay) {
      fun(rest);
      last = now;
    }
  }
}
//实例
const throttleExample = throttle(() => console.log('throttle'), 1000);
//调用
throttleExample();
throttleExample();
throttleExample();
//函数防抖
const debounce = (fun, delay, ...rest) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun(rest);
    }, delay);
  }
}
//实例
const debounceExample = debounce(() => console.log(1), 1000);
//调用
debounceExample();
debounceExample();
debounceExample();