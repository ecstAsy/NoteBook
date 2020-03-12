<h2 align="center">javaScript 零散知识点</h2>

## Js 的数据类型

***简单数据类型：*** Number、String、Boolean、undefind、null
***复杂数据类型：*** 数组、函数、对象



## Promise 构造函数是同步执行还是异步执行，then 方法是同步执行还是异步执行？

```js
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


## localStorage 和 sessionStorage 

localStorage 和 sessionStorage 属性允许在浏览器中存储 key/value 对的数据。

***localStorage：*** 用于长久保存整个网站的数据，保存的数据没有过期时间，属于永久性存储，直到手动去删除。属性是只读的。

***sessionStorage：*** 只将数据保存在当前会话中，改数据对象临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。

```js
// localStorage 用法
// 存储
localStorage.setItem('userId', 1);
// 取值
const userId = localStorage.getItem('userId');
console.log(userId);                // 1
// 移除
localStorage.removeItem('userId');

// sessionStorage 用法
// 存储
sessionStorage.setItem('userId', 1);
// 取值
const userId = sessionStorage.getItem('userId');
console.log(userId);                // 1
// 移除
sessionStorage.removeItem('userId');
// 清空所有
sessionStorage.clear();
```