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