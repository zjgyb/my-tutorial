## 表模型

- 首结点和尾结点
- 表的长度
- 空表
- 前驱和后继(左邻和右邻)
- 有序表

## 顺序表

### 插入O(n)

在表中添加一个新节点：指定位置插入、指定条件插入、无条件插入
T(n) = n - i

### 删除

删除表中某个节点

T(n) = n - 1 - i;

### 查找

#### 顺序查找O(n)

监督元技术(省去一个测试条件)，例如

```js
// 这里说明的是C的时候
function fn(arr, x) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}
```

```js
// 监督元
function fn(arr, x) {
  let i = arr.length - 1;
  arr[0] = x;
  while (arr[i] !== x) {
    i--;
  }
  return i;
}
```

#### 二分查找

前提：顺序查找、有序表

`T(1) = 1 (n = 1)`
`T(n) <= 1 + T(n/2) <= 1 + [log_2(n)] = O(log_2(n))` (n > 1)

### 适用条件

表长小、不做或很少做插/删、只在端的端点处插/删
