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

***sort():*** 数组排序

```
// 单维数组
const Arrys = [1, 5, 6, 3, 7, 8];

const newArrys = Arrys.sort((a, b) => a - b);

console.log(newArrys);           // [ 1, 3, 5, 6, 7, 8 ]   

// 多维数组
const Students = [
  { name: 'Lily', age: 18 },
  { name: 'Mary', age: 25 },
  { name: 'Tom', age: 15 },
  { name: 'Bob', age: 19 },
]

const newStudents = Students.sort((a, b) => a.age - b.age);

console.log(newStudents);
// [ { name: 'Tom', age: 15 }, { name: 'Lily', age: 18 }, { name: 'Bob', age: 19 }, { name: 'Mary', age: 25 } ]
```

### String

***split():*** 字符串转数组

```
const CityStr = '北京,上海,广州,深圳';

const Citys = CityStr.split(',');

console.log(Citys);         //  [ '北京', '上海', '广州', '深圳' ]
```

***charAt():*** 截取字符串第一个字符

```
const str = 'Welcome';

const a = str.charAt();

console.log(a)  // W
```