## Getting Started

### 安装 jest

```
yarn add jest -D
npm install --save-dev jest
```

### 使用 JEST 测试

创建一个`sum.js`文件，并写入如下代码

```js
const sum = (a, b) => a + b;
module.exports = sum;
```

创建一个`sum.test.js`文件，并写入如下代码

```js
const sum = require("./sum");

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

然后在`package.json`中添加如下字段

```json
{
  "script": {
    "test": "jest ./sum.test.js"
  }
}
```

然后使用`yarn test`，结果是:

```
PASS  ./sum.test.js
  √ add 1 + 2 to equal 3 (3ms)
```

### 附加配置

使用`jest --init`会问你一系列配置问题，你根据实际场景进行选择，然后就会创建一个`jest.config.js`的配置文件

## 使用匹配器

我将 matchers 翻译成匹配器，在 JEST 中使用不同的匹配器满足不同值的测试需求，例如对象和数字这两种，使用 toBe 可以检测出数字，但是不能检测出对象是否相等，而是使用 toEqual

### 严格相等

例如使用如下例子测试，因为测试的是 Number 类型，因此使用 toBe 作为匹配器，toBe 的测试原理是使用`Object.is`来测试相应的值

```js
// pass
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
```

### 测试对象

测试对象使用 toEqual，但是如果使用 toBe 就会报错，但是如果用 toEqual 去测试上面 toBe 的代码能够顺利通过，这是因为使用 toEqual 会检查每一项，对象类型会递归检查每一项

```js
// pass
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
```

```js
// pass
test("object assignment", () => {
  const data = /[a-z]/g;
  expect(data).toEqual(/[a-z]/g);
});
```

### 测试不相等

在 toBe 前多加一个匹配器 not

```js
// pass
test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

### 测试是否为真

- toBeNull: 匹配是否是 null
- toBeUndefined: 匹配是否是 undefined
- toBeDefined: 与 toBeUndefined 结果相反，也就是说不是 undefined
- toBeTruthy: 匹配任何 if 条件内为真的值
- toBeFalsy: 匹配任何 if 条件内为假的值

```js
// pass
test("null", () => {
  expect(null).toBeNull();
});
```

### 数字间的比较测试

测试的值——expect 内的值，比较值——to~内的值

- toBeGreaterThan: 测试值是否大于比较值
- toBeGreaterThanOrEqual: 测试值是否大于等于比较值
- toBeLessThan: 测试值是否小于比较值
- toBeLessThanOrEqual: 测试值是否小于等于比较值
- toBe: 测试值是否等于比较值
- toEqual: 测试值是否等于比较值
- toBeCloseTo: 测试值是否近似等于比较值(用于浮点运算时的比较)

```js
// pass
test("two plus two", () => {
  const num = 2 + 2;
  expect(num).toBeGreaterThan(3);
  expect(num).toBeLessThanOrEqual(5);
  expect(num).toEqual(4);
});
```

在浮点计算时，js 通常会存在误差，比如`0.1+0.2`会不等于`0.3`，因此对于浮点数的数字，应该使用 toBeCloseTo 来比较是否相等，而不是 toBe

```js
// pass
test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});
```

### 字符串的匹配

- toMatch: 使用正则表达式匹配

```js
// pass
test('there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
```

### 数组或其他可迭代元素

- toContain: 检测数组或者其他可迭代元素内包含的子元素

```js
// pass
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer"
];
test("the shopping list has beer on it", () => {
  expect(shoppingList).toContain("beer");
});
```

### 其他情况

- toThrow: 测试函数被调用时是否抛出错误

```js
test("there is no problem", () => {
  expect(fn).toThrow();
  expect(fn).toThrow(Error);
  expect(fn).toThrow("404");
  expect(fn).toThrow(/4/);
});
```

## 测试异步代码

### 回调

当 test 函数到最后一行时，那么测试函数就将结束，导致回调函数可能还未调用就已经结束，这也就是意味着下面测试代码失效

```js
function fetchData(fn) {
  const data = "peanut butter";
  setTimeout(() => {
    fn(data);
  }, 1000);
}

test("the data is peanut butter", () => {
  function callback(data) {
    expect(data).toBe("peanut butter12");
  }

  fetchData(callback);
});
```

解决措施是告知测试函数的结束位置，调用 done 作为结束的标志

```js
function fetchData(fn) {
  const data = "peanut butter";
  setTimeout(() => {
    fn(data);
  }, 1000);
}

test("the data is peanut butter", done => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      // expect(data).toBe("peanut butter12"); 如果值错误测试就不通过
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
```

### Promise

如果使用 Promise，那么测试方法直接了当，就是返回一个 promise，然后等待 promise 处理结果，如果是 rejected 状态，那么测试自动报错，例如：

```js
// pass
function fetchData() {
  return Promise.resolve().then(() => "peanut butter");
}

test("the data is peanut butter", () => {
  return fetchData().then(data => {
    expect(data).toBe("peanut butter");
  });
});

// error
function fetchData1() {
  return Promise.reject("peanut butter");
}

test("the data is peanut butter", () => {
  return fetchData1().then(data => {
    expect(data).toBe("peanut butter");
  });
});
```

#### .resolves/.rejects

你也可以使用`.resolves`和`.rejects`这两个匹配器来声明，然后测试函数会自动等待 Promise 执行完成

```js
function fetchData() {
  return Promise.resolve().then(() => "peanut butter");
}

test("the data is peanut butter", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});
```

### Async/Await

使用Jest测试Async和Await函数也特别简单，直接看例子就能明白(只展示resolve)

```js
const fetchData = async () => {
  return await Promise.resolve().then(() => "peanut butter");
};

test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});
```

#### .resolves/.rejects

下面例子只写`.resolves`时，`.rejects`用法大同小异

```js
const fetchData = async () => {
  return await Promise.resolve().then(() => "peanut butter");
};

test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});
```

### 疑问

未搞懂文章中断言`expect.assertions(1);`的用法

## 开始与结束测试之前

在测试开始与测试结束之前需要完成一些操作，Jest提供函数去实现

### 重复的操作

在很多的测试中你需要重复地调用某些东西，那么你可以使用`beforeEach`、`afterEach`。例如，如果再测试之前你需要调用城市的数据库并且这个数据库需要在多个测试中使用(该方法叫做`initializeCityDatabase()`)，同时结束的时候需要清除(该方法叫做clearCityDatabase())，那么你可以像下面的代码那样做：

```js
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
```

`beforeEach`和`afterEach`也支持处理异步代码，它们不仅可以调用done参数也能返回promise，例如如果你想在数据库调用完毕后返回一个promise，你可以这样做：

```js
beforeEach(() => {
  return initializeCityDatabase();
});
```

### 一次性设置

在某些情况下，你在文件的开头设置一次就能解决，尤其是当代码是异步的时候非常烦人，因此你不能每次都声明。Jest提供了`beforeAll`和`afterAll`来解决这个情况。

例如：`initializeCityDatabase`和`clearCityDatabase`都返回promise，并且调用这个方法获取的值是可以重用的，因此我们可以向下面一样做：

```js
beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
```

### 作用域

默认情况下，`before`和`after`作用在每一个测试文件，你可以使用`describe`块，当你在该块内调用`before`和`after`时候，调用的参数仅作用在该`describe`内

```js
describe('matching cities to foods', () => {
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test("Vienna < 3 sausage", () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test("San < 3 plantains", () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});
```

注意：下面的这行代码能够清楚的看出`before`和`after`在执行过程中的调用过程

```js
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
```

### describe与test本身的执行顺序

Jest先执行describe内的内容，然后执行test内的内容，下面的例子能够直观的看出执行的顺序

```js
describe('outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');
    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toEqual(true);
    });
  });

  console.log('describe outer-b');

  test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toEqual(true);
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2');
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      expect(false).toEqual(false);
    });
  });

  console.log('describe outer-c');
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
```

### 一般建议

如果测试出错，首先要做的事是检查检查单个test测试块是否出错，为了只测试单个命令，可以临时的把`test`设置为`test only`

```js
test.only("this will be only test that runs", () => {
  expect(true).toBe(false);
});

// ...
```

## 模拟函数

有两种方式使用模拟函数，一种是创建模拟函数去测试代码，另一种是手动重写模块依赖，这到后面会详细叙说

### 使用模拟函数的例子

例如测试forEach函数

```js
function forEach(items, callback) {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
}

const mockCallback = jest.fn(x => x + 42);
forEach([0, 1], mockCallback);

test('test1', () => {
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe(42);
});
```

### `.mock`属性

所有由Jest创建的模拟函数都有一个`.mock`属性，下面介绍`.mock`的使用

```js
test('This is a test', () => {
  // 测试函数的调用次数，例子是判断函数是否只调用一次
  expect(someMockFunction.mock.calls.length).toBe(1);

  // 测试函数第一次执行使用的第一个参数，例子是判断函数调用的第一个参数是否是first arg
  expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

  // 测试函数第一次执行使用的第二个参数
  expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

  // 测试函数第一次调用返回的结果
  expect(someMockFunction.mock.results[0].value).toBe('return val');

  // 测试模拟函数实例化的次数
  expect(someMockFunction.mock.instances.length).toBe(2);

  // 实例化时返回的对象有一个name属性，其属性值为test
  expect(someMockFunction.mock.instances[0].name).toEqual('test');
});
```

### 模拟返回值

```js
const myMock = jest.fn();

// 因为test测试是异步的，因此这里不能放到test测试块内，否则先执行下面的代码先返回10
console.log(myMock()); // undefined

myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce("x")
  .mockReturnValue(true);

test("test myMock function", () => {
  expect(myMock()).toBe(10);
  expect(myMock()).toBe("x");
  expect(myMock()).toBe(true);
  expect(myMock()).toBe(true);
});
```