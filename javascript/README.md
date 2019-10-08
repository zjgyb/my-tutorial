# 内容简介

+ 懒加载
+ 预加载
+ 函数柯里化
+ 骨架屏

## 错误提示

- `ReferenceError`——代表当一个不存在的变量被引用时发生的错误
- `SyntaxError`——语法错误发生的错误
- `TypeError`——不存在的方法，变量的类型不符合要求
- `RangeError`——数值超出相应范围时触发

```js
console.log(a); // ReferenceError: a is not defined
console.log('b'++); // SyntaxError: Invalid left-hand side expression in postfix operation
console.lo(); // TypeError: console.lo is not a function
console.log(new Array(-1)); // RangeError: Invalid array length
```
