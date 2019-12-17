function Todo() {

  var name = undefined;
  console.log(name);
  // console.log(age);
  name = 'Miary';
  // let age = 20;
  console.log(name);
}

Todo();

for (var i = 0; i < 3; i++) {
  console.log(i)
  // setTimeout(() => console.log(i), 1)
}

for (let i = 0; i < 3; i++) {
  console.log(i)
  // setTimeout(() => console.log(i), 1)
}

let a = 666;
let b = new Number(666);
let c = 666;
console.log(a, b, c);
console.log(a == b);
console.log(a === b);
console.log(b === c);
console.log(a === c);


const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123;
console.log(a);
console.log(a[b]);
a[c] = 456;
console.log(a);
console.log(a[b]);

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

let dd = 0;
console.log(dd++);
console.log(dd);
console.log(++dd);
console.log(dd);


let obj1 = {
  name: 'obj1',
  print: function () {
    return () => console.log(this.name);
  }
}
let obj2 = { name: 'obj2' };
obj1.print()();
obj1.print().call(obj2);
obj1.print.call(obj2)();

const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4]);
console.log(set);
console.log(obj.hasOwnProperty('1'));
console.log(obj.hasOwnProperty(1));
console.log(set.has('1'));
console.log(set.has(1));



function Foo() {
  getName = function () { console.log(1); };
  console.log(this)
  return this;
}

Foo.getName = function () { console.log(2); };
Foo.prototype.getName = function () { console.log(3); };
var getName = function () { console.log(4); };
function getName() { console.log(5); };

Foo.getName();             // 2
getName();                 // 4
Foo().getName();           // 1
getName();                 // 1
new Foo.getName();         // 2
new Foo().getName();       // 3
new new Foo().getName();   // 3