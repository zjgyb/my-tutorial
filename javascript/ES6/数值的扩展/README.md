## 二级制和八进制表示法

- 二进制：前面加`0b`或`0B`
- 八进制：前面加`0o`或`0O`
转换成十进制使用Number方法

```js
0b1101 === 0B1101
0o752 === 0O752
Number(0b1101); // 13
```

## Number.isFinite(), Number.isNaN()

- Number.isFinite(): 这个值是为是有限的(确定的一个数值)
- Number.isNaN(): 判断一个值是否为NaN

## Number.parseInt(), Number.parseFloat()

都是将全局方法迁移到Number对象上，用法无区别

## Number.isInteger()

判断一个数值是否为整数，但是不能判断精度很小的值或者很小的值，**精度要求很高的时候不建议使用**

## Number.EPSILON

常量值，表示1与大于1的最小浮点数之间的差，`Number.EPSILON === Math.pow(2, -52)`;

## Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.isSafeInteger()

判断数字是否超过最大值和最小值，另一个判断是否是一个安全整数，从实用性来说暂时用处不大

## Math对象的扩展

- Math.trunc(): 除去一个数的小数部分
- Math.hypot(): 返回所有参数的平方和的平方根

- Math.sign(): 判断一个数是整数、负数还是零，有五个值`+1`、`-1`、`0`、`-0`、`NaN`
- Math.cbrt(): 计算一个数的立方根
- Math.clz32(): 先转换为32位无符号整数形式，然后返回有多少个前导0
- Math.imul(): 等同于`(a * b) | 0`
- Math.fround(): 返回一个数的32位单精度浮点数形式

### 对数方法

- Math.expm1(): 返回e^x - 1
- Math.log10(): 返回以10为底的x的对数

- Math.log1p(): 返回`1 + x`的自然对数，即ln(1 + x)
- Math.log2(): 返回以2为底的x的对数

### 双曲线方法

- Math.sinh()
- Math.cosh()
- Math.tanh()
- Math.asinh()
- Math.acosh()
- Math.atanh()

## 指数运算符(**)

`2 ** 2`