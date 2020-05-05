
const timeout = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve();
  }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
  console.log('1');
  return 1;
});

const ajax2 = () => timeout(1000).then(() => {
  console.log('2');
  return 2;
});

const ajax3 = () => timeout(2000).then(() => {
  console.log('3');
  return 3;
});

const ajax4 = () => new Promise(function(resolve,reject){
  setTimeout(()=>{
    reject(-1)
  },1000)
});

let taskArr = [ajax1,ajax2,ajax3]
window.limit = promiseLimit(taskArr,2);



function promiseLimit(arr, limit) {
  var i = 0;// 利用闭包报错 arr 的遍历
  var retArr = []; // 保存全部的 promise
  var pendingArr = []; // pending 状态的 promise
  var addQuene = function() {
    if (i === arr.length) { // 遍历结束,直接 return 出去
      return Promise.resolve();
    }

    var item = arr[i];
    i++;
    // 执行数组中的一项
    var p1 = Promise.resolve().then(function(){
      return item();
    });
    retArr.push(p1)
    console.log(retArr)
    // p2 和 p1 其实是一个调用链的
    // 这里相当于给 P1额外增加一个执行完,从在执行队列里删除的逻辑
    var p2 = p1.then(function(){
      return pendingArr.splice(pendingArr.indexOf(p2),1)
    })
    // 把 P2 塞进执行中队列
    pendingArr.push(p2)

    // 判断,如果超出最大限制,那则利用 Promise.resolve 的返回 promise 来控制队列新增
    let r = pendingArr.length >= limit ? Promise.race(pendingArr): Promise.resolve();
    return r.then(function() {
      return addQuene()
    })
  }
  return addQuene().then(() => Promise.all(retArr));
}