const promise1 = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1)
      resolve(1);
    }, 5000)
  })
}
const promise2 = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2)
      resolve(2);
    }, 1000)
  });
}
const promise3 = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(3)
      resolve(3);
    }, 3000)
  });
};
const taskArr = [promise1, promise2, promise3];
let promiseAll = parallelLimit(taskArr,2);
promiseAll.then(res => console.log(res)); // [1,2,3];

function parallelLimit(array, poolLimit) {
  let i = 0;
  const ret = [];
  const executing = [];
  const enqueue = function() {
    // 边界处理，array为空数组
    if (i === array.length) {
      return Promise.resolve();
    }
    // 每调一次enqueue，初始化一个promise
    const item = array[i++];
    const p = Promise.resolve().then(function(){
      return item()
    });
    // 放入promises数组
    ret.push(p);
    // promise执行完毕，从executing数组中删除
    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    // 插入executing数字，表示正在执行的promise
    executing.push(e);
    // 使用Promise.rece，每当executing数组中promise数量低于poolLimit，就实例化新的promise并执行
    let r = Promise.resolve();
    if (executing.length >= poolLimit) {
      r = Promise.race(executing);
    }
    // 递归，直到遍历完array
    return r.then(() => enqueue());
  };
  return enqueue().then(() => Promise.all(ret));

}