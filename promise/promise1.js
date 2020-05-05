
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

let taskArr = [ajax1,ajax2,ajax3,ajax4]

// 下面是正式代码
function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function promiseByOrder(promiseArr) {
  if (!(promiseArr instanceof Array)) {
    return false;
  }
  return new Promise(function(resolve,reject){
    var len = promiseArr.length;
    var count = 0;
    var sequence = Promise.resolve();
    promiseArr.forEach(function(item) {
      sequence = sequence.then(function() {
        return item().then(function(){
          count = count + 1
          if(count===len){
            resolve()
          }
        },function(){
          reject(-1)
        });
      })
    })
  });
}

window.pShow = promiseByOrder(taskArr) // 由于是引用类型,只能去控制台看了