```js
const data = {
	name: 'tony',
	age: 10,
	test: {
		name: 1
	},
	arr: [1, 2, 3, 4]
}

function observer(obj) {
	if (typeof obj === 'object') {
		for(key in obj) {
			defineReactive(obj, key, obj[key]);
		}
	}
}

function defineReactive(obj, key, value) {
	// 如果value值为对象，那么监听里面的value值变化
	observer(value);
	Object.defineProperty(obj, key, {
		get() {
			return value;
		},

		set(val) {
			console.log('refresh');
			observer(val); // 如果赋值的是对象，那么监听里面的value值
			value = val;
		}
	});
}

const arrMethods = ['push', 'pop', 'shift', 'unshift', 'splice'];
arrMethods.forEach(method => {
	const oldMethod = Array.prototype[method];
	Array.prototype[method] = function(...args) {
		console.log('arr refresh');
		oldMethod.apply(this, args);
	}
})

observer(data);
```

对于上面的数组而言以下操作方式是不能改变视图的变化的

```js
data.arr[2] = 3;
data.arr.length - 1;

// 因此如果要修改中间一项可以采用splice方式修改
```