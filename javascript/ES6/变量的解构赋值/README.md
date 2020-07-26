## 数组解析

```js
const [a, b, c = 3, d] = [1, 3];
console.log(a, c, d); // 1, 3, undefined
```

## 对象解析

```js
let { foo, bar = 124, zoo } = { foo: '123' };
console.log(foo, bar, zoo); // 123, 124, undefined
const { log } = console;
log('123'); // 123
```

## 字符串解析

```js
const [a, b, c, d, e, f, g] = 'hello';
const { length: len } = 'hello';
console.log(a, b, c, d, e, f, g); // h e l l o undefined undefined 
console.log(len); // 5
```

## 数值和布尔值的解析

```js
let { toString: s } = 123;
console.log(s);

let { toString: b } = true;
console.log(b);
```

## 函数参数的解析

```js
function fn({a, b}) {
  return a + b;
}
console.log(fn({ a: 1, b: 3})); // 4
```