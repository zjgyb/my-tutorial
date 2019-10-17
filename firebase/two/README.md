## 前言

还是使用[第一章](../one/README.md)的项目结构以及 firebase，项目的主要使用的是 database 中的 cloud firestore，实现的内容是数据的**存储**与**读取**

## 项目实现

主要看 html 代码，这里主要讲解一下关键代码

```js
const firestore = firebase.firestore();
// 这里是定义存储的位置
const docRef = firestore.doc("samples/sandwichData");
// 这里是数据存储语法
docRef
  .set({
    hotDogStatus: textToSave
  })
  .then(() => {
    console.log("Status saved!");
  })
  .catch(error => {
    console.log("Got an error: ", error);
  });

// 这里是数据读取语法
docRef
  .get()
  .then(doc => {
    if (doc && doc.exists) {
      const myData = doc.data();
      outputHeader.innerHTML = "Hot Dog status: " + myData.hotDogStatus;
    }
  })
  .catch(error => {
    console.log("Got an error: ", error);
  });
```

## 注意点

视频中我认为有两个错误：

1. input的type，没有**textfiled**，这个在MaterialUI中会见到标题为textfiled

```diff
- <input type="textfield" id="latestHotDogStatus" />
+ <input type="text" id="latestHotDogStatus" />
```

2. `getRealtimeUpdates`函数没有声明

```diff
- getRealtimeUpdates = function() { // ... }
+ const getRealtimeUpdates = function() { // ... }
```

## 参考视频

- [YouTube](https://www.youtube.com/watch?v=2Vf1D-rUMwE&list=PLl-K7zZEsYLmnJ_FpMOZgyg6XcIGBu2OX&index=1)
