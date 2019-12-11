<h2 align="center">数字默认两位小数</h2>

## 代码

- 1     => 1.00
- 1.1   => 1.10
- 1.11  => 1.11

```
function Decimal(x) {
  let f = parseFloat(x);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(f)) {
    return false;
  }
  f = Math.round(x * 100) / 100;
  let s = f.toString();
  let rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}
```


