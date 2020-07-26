## let

> 声明变量，只在let命令的代码块内有效。

## const

> 声明一个只读的常量。一旦声明，常量的值就不能改变。

## 相同点

1. 在命令的代码块内有效

```js
{
  const a = 2;
  let b = 1;
}

console.log(a); // 报错
console.log(b); // 报错
```

2. 不存在变量提升

```js
console.log(a); // 报错
console.log(b); // 报错

const a = 2;
let b = 1;
```

3. 暂时性死区

如果区块内存在`let`和`const`命令，这个区块对这些命令声明的变量从一开始就形成了封闭的作用域。凡是在这些声明之前使用这些变量就会报错。

```js
const a = 2;
if (true) {
  console.log(a); // 报错
  let a;
}
```

4. 不允许重复声明

```js
const a = 2;
const a = 6; // 报错
```

5. 声明的变量不再是顶级对象的属性

```js
const a = 2;
console.log(global.a); // undefined
```