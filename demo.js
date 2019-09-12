const obj = {
  name: 'mary',
  age: 14,
  detail: ''
}
delete obj.detail
console.log(obj)

const ITEMS = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' }
];

const INFO = { id: 1, name: 'c' };

function doArray(array, info) {
  let Obj = {};
  array.forEach(item => {
    Obj[item.id] = item
  })
  Obj[info.id] = info;
  return Object.values(Obj)
}

const Array = doArray(ITEMS, INFO);

console.log(Array);


const obj1 = { a: 1, b: 2, c: 4 };
const obj2 = { a: 2, b: 4, c: 4, d: 6 };
const obj3 = Object.assign(obj1, obj2);
console.log(obj3)
console.log({ ...obj1, ...obj2 })

localStorage.setItem('userId', 1);
localStorage.getItem('userId');
localStorage.removeItem('userId');