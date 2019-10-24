<h2 align="center">javaScript中常用函数</h2>

### Array

***toString():*** 数组转字符串

```
const Citys = ['北京', '上海', '广州', '深圳'];

const CityStr = Citys.toString();

console.log(CityStr);       // 北京,上海,广州,深圳
```

***Array.form():*** 获取数组元素中的某个字段的集合

```
const Citys = [
  { id: 1, name: '北京' },
  { id: 2, name: '上海' },
  { id: 3, name: '广州' },
  { id: 4, name: '深圳' },
];

const CityNames = Array.from(Citys, ({ name }) => name);

console.log(CityNames);    // [ '北京', '上海', '广州', '深圳' ]
```

### String

***split():*** 字符串转数组

```
const CityStr = '北京,上海,广州,深圳';

const Citys = CityStr.split(',');

console.log(Citys);         //  [ '北京', '上海', '广州', '深圳' ]
```

