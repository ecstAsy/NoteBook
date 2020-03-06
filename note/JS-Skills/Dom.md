<h3 align='center'>JS开发技巧 --《Dom》篇</h3>

#### 「 Dom Skill 」

###### 显示全部DOM边框

> *调试页面元素边界时使用*

```js
[].forEach.call($$("*"), dom => {
    dom.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
});
```

###### 自适应页面

> *页面基于一张设计图但需做多款机型自适应，元素尺寸使用rem进行设置*

```js
function AutoResponse(width = 750) {
  const target = document.documentElement;
  target.clientWidth >= 600
    ? (target.style.fontSize = "80px")
    : (target.style.fontSize = target.clientWidth / width * 100 + "px");
}
```

###### 过滤XSS

```js
function FilterXss(content) {
  let elem = document.createElement("div");
  elem.innerText = content;
  const result = elem.innerHTML;
  elem = null;
  return result;
}
```

###### 存取LocalStorage

> *反序列化取，序列化存*

```js
const love = JSON.parse(localStorage.getItem("love"));

localStorage.setItem("love", JSON.stringify("I Love You"));
```