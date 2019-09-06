<h2 align="center">javaScript 零散知识点</h2>

## Promise 构造函数是同步执行还是异步执行，then 方法是同步执行还是异步执行？

```
const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
  console.log(2);
})

promise.then(() => {
  console.log(3);
})

console.log(4)

// result => 1、2、4、3 
```

注：Promise 构造函数是同步执行，then 方法是异步执行。