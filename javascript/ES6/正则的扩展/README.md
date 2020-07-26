## flags

`new RegExp(/abc/gi, 'i').flags`，第二个参数为修饰符，把前面的修饰符覆盖

## u修饰符

`Unicode`模式，能够正确处理大于`\uFFFF`的Unicode字符

```js
/^\uD83D/u.test('\uD83D\uDC2A');
```

## RegExp.prototype.unicode

检测是否设置了u修饰符

```js
const r1 = /hello/u;
r1.unicode // true
```

## y修饰符

`g`修饰符只要剩余位置中存在匹配即可，`y`修饰符确保匹配必须从剩余的第一个位置开始，如果没有匹配，返回`null`

## RegExp.prototype.sticky

检测是否设置了y修饰符

## RegExp.prototype.flags

返回正则表达式的修饰符

## s修饰符

使`.`能够匹配任意单个字符，这被称为`dotAll`模式，点代表一切字符

## 后行断言

`/(?<=y)x/`，x只有在y后面才匹配

## 具名组匹配

```js
const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31
```

## 解构赋值和替换

```js
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
'2015-01-02'.replace(re, '$<day>/$<month>/$<year>')
// '02/01/2015'
```

## String.prototype.matchAll

目前是一个提案