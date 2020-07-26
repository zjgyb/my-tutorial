## unicode表示方法

> `\uxxxx`表示一个字符，例如`\u0061`

## 字符串遍历

> `for...of`

## 模板字符串

> 表示方法是一个反引号

编译模板

```js
let name = "Tony";
let age = 25;
let str = "my name is ${name}, I'm ${age} years old.";
function replace(str) {
  return str.replace(/\$\{([^}]+)\}/g, (matches, key) => {
    return eval(key);
  });
}

console.log(replace(str)); // my name is Tony, I'm 25 years old.
```

## String.fromCodePoint

```js
String.fromCodePoint(0x0061); // a
```

## String.raw

> 返回一个斜杠转义，把字符串所有的变量替换且对斜杠进行转义的结果

```js
String.raw`Hi \n${2 + 3}`;
// 实际返回 Hi \\n5, 显示的结果是 Hi \n5
```

## codePointAt

> 正确处理4个字节存储的字符，返回一个字符的码点

## normalize()

> 将字符的不同表示方法统一为同样形式

## includes()、startsWith()、endsWith()

- includes：返回布尔值，表示是否找到了字符串参数，第二个参数代表从n位置直到结束
- startsWith：返回布尔值，表示参数字符串是否在原字符串的头部，第二个参数代表从n位置直到结束
- endsWith: 返回布尔值，表示参数字符串是否在原字符串的尾部，第二个参数代表前几个字符

## repeat()

> 返回一个新的字符串，表示原字符串重复`n`次

## padStart()、padEnd()

- padStart: 从头部开始补全
- padEnd：从尾部开始补全

省略使用空格补全长度

```js
'x'.padStart(2, 'cd'); // cx
```

## trimStart()、trimEnd()

- trimStart(trimLeft): 删除字符串头部的空格
- trimEnd(trimRight): 删除字符串尾部的空格

