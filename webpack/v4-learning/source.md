相应的源码实现

## tapable

### SyncHook

测试代码

```js
const { SyncHook } = require('tapable');

class Lesson {
	constructor() {
		this.hook = {
			arch: new SyncHook(['name']) // name无意义，只是一个标识
		}
	}

	tap() {
		this.hook.arch.tap('react', (name) => {
			console.log('react', name);
		});
		this.hook.arch.tap('vue', (name) => {
			console.log('vue', name);
		});
	}

	start(...args) {
		this.hook.arch.call(...args);
	}
}

const lesson1 = new Lesson();
lesson1.tap();
lesson1.start('hello world!');
```

自实现SyncHook

```js
// 简单的发布订阅模式，实现事件的顺序执行
class SyncHook {
	constructor(args) {
		this.tasks = []; // 存储
	}

	tap(name, task) {
		this.tasks.push(task);
	}

	call(...args) {
		this.tasks.forEach(task => task(...args));
	}
}
```

### SyncBailHook

测试代码

```js
const { SyncBailHook } = require('tapable');

class Lesson {
	constructor() {
		this.hook = {
			arch: new SyncBailHook(['name'])
		}
	}

	tap() {
		this.hook.arch.tap('react', (name) => {
			console.log('react', name);
			return '停停停'; // 停止执行
		});
		this.hook.arch.tap('vue', (name) => {
			console.log('vue', name);
		});
	}

	start(...args) {
		this.hook.arch.call(...args);
	}
}

const lesson1 = new Lesson();
lesson1.tap();
lesson1.start('hello world!');
```

自实现SyncBailHook

```js
class SyncBailHook {
	constructor(args) {
		this.tasks = []; // 存储
	}

	tap(name, task) {
		this.tasks.push(task);
	}

	call(...args) {
		let res;
		let index = 0;
		do {
			res = this.tasks[index++](...args);
		} while(res === undefined && index < this.tasks.length);
	}
}
```

### SyncWaterfallHook

测试代码

```js
const { SyncWaterfallHook } = require('tapable');

class Lesson {
	constructor() {
		this.hook = {
			arch: new SyncWaterfallHook(['name'])
		}
	}

	tap() {
		this.hook.arch.tap('react', (name) => {
			console.log('now is react', name);
			return 'react';
		});

		this.hook.arch.tap('vue', (data) => {
			console.log('now is vue,', 'prev is', data);
			return 'vue';
		});

		this.hook.arch.tap('webpack', (data) => {
			console.log('now is webpack,', 'prev is', data);
		});
	}

	start(...args) {
		this.hook.arch.call(...args);
	}
}

const lesson1 = new Lesson();
lesson1.tap();
lesson1.start('hello world!');
```

自实现SyncWaterfallHook

```js
class SyncWaterfallHook {
	constructor(args) {
		this.tasks = []; // 存储
	}

	tap(name, task) {
		this.tasks.push(task);
	}

	call(...args) {
		let [first, ...others] = this.tasks;
		let res = first(...args);
		others.reduce((prev, next) => {
			return next(prev);
		}, res)
	}
}
```

### SyncLoopHook

测试代码

```js
const { SyncLoopHook } = require('tapable');

class Lesson {
	constructor() {
		this.index = 0;
		this.hook = {
			arch: new SyncLoopHook(['name'])
		}
	}

	tap() {
		this.hook.arch.tap('react', (name) => {
			console.log('react', name);
			return ++this.index === 3 ? undefined : 'next';
		});

		this.hook.arch.tap('vue', (name) => {
			console.log('vue', name);
		});

		this.hook.arch.tap('webpack', (name) => {
			console.log('webpack', name);
		});
	}

	start(...args) {
		this.hook.arch.call(...args);
	}
}

const lesson1 = new Lesson();
lesson1.tap();
lesson1.start('hello world!');
```

自实现SyncLoopHook

```js
class SyncLoopHook {
	constructor(args) {
		this.tasks = []; // 存储
	}

	tap(name, task) {
		this.tasks.push(task);
	}

	call(...args) {
		this.tasks.forEach(task => {
			let res;
			do {
				res = task(...args);
			} while(res !== undefined);
		})
	}
}
```

### AsyncParallelHook

回调测试代码

```js
const { AsyncParallelHook } = require('tapable');

class Lesson {
	constructor() {
		this.index = 0;
		this.hook = {
			arch: new AsyncParallelHook(['name'])
		}
	}

	tap() {
		this.hook.arch.tapAsync('react', (name, cb) => {
			setTimeout(() => {
				console.log('react', name);
				cb();
			}, 1000);
		});

		this.hook.arch.tapAsync('vue', (name, cb) => {
			setTimeout(() => {
				console.log('vue', name);
				cb();
			}, 1000);
		});
	}

	start(...args) {
		this.hook.arch.callAsync(...args, () => {
			console.log('end');
		});
	}
}

const lesson1 = new Lesson();
lesson1.tap();
lesson1.start('hello world!');
```

promise版本测试代码

```js
const { AsyncParallelHook } = require('tapable');

class Lesson {
	constructor() {
		this.index = 0;
		this.hook = {
			arch: new AsyncParallelHook(['name'])
		}
	}

	tap() {
		this.hook.arch.tapPromise('react', (name) => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					console.log('react', name);
					resolve();
				}, 1000);
			});
		});

		this.hook.arch.tapPromise('vue', (name) => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					console.log('vue', name);
					resolve();
				}, 1000);
			});
		});
	}

	start(...args) {
		this.hook.arch.promise(...args).then(() => {
			console.log('end');
		});
	}
}

const lesson1 = new Lesson();
lesson1.tap();
lesson1.start('hello world!');
```

自实现AsyncParallelHook

```js
class AsyncParallelHook {
	constructor(args) {
		this.tasks = []; // 存储
	}

	tapAsync(name, task) {
		this.tasks.push(task);
	}

	callAsync(...args) {
		let finalCallback = args.pop();
		let index = 0;
		const done = () => {
			if (++index < this.tasks.length) return;
			finalCallback();
		}
		this.tasks.forEach(task => {
			task(...args, done);
		})
	}

	tapPromise(name, task) {
		this.tasks.push(task);
	}

	promise(...args) {
		const res = this.tasks.map(task => task(...args));
		return Promise.all(res);
	}
}
```

### AsyncSeriesHook

回调测试代码：

```js
const { AsyncSeriesHook } = require('tapable');

class Lesson {
	constructor() {
		this.index = 0;
		this.hook = {
			arch: new AsyncSeriesHook(['name'])
		}
	}

	tap() {
		this.hook.arch.tapAsync('react', (name, cb) => {
			setTimeout(() => {
				console.log('react', name);
				cb();
			}, 1000);
		});

		this.hook.arch.tapAsync('vue', (name, cb) => {
			setTimeout(() => {
				console.log('vue', name);
				cb();
			}, 1000);
		});
	}

	start(...args) {
		this.hook.arch.callAsync(...args, () => {
			console.log('end');
		});
	}
}

const lesson1 = new Lesson();
lesson1.tap();
lesson1.start('hello world!');
```

promise测试代码：
```js
const { AsyncSeriesHook } = require('tapable');

class Lesson {
	constructor() {
		this.index = 0;
		this.hook = {
			arch: new AsyncSeriesHook(['name'])
		}
	}

	tap() {
		this.hook.arch.tapPromise('react', (name) => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					console.log('react', name);
					resolve();
				}, 1000);
			});
		});

		this.hook.arch.tapPromise('vue', (name) => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					console.log('vue', name);
					resolve();
				}, 1000);
			});
		});
	}

	start(...args) {
		this.hook.arch.promise(...args).then(() => {
			console.log('end');
		});
	}
}
```

自实现AsyncSeriesHook
```js
class AsyncSeriesHook {
	constructor(args) {
		this.tasks = []; // 存储
	}

	tapAsync(name, task) {
		this.tasks.push(task);
	}

	callAsync(...args) {
		const finalCallback = args.pop();
		let index = 0;
		const next = () => {
			if (index === this.tasks.length) return finalCallback();
			this.tasks[index++](...args, next);
		}
		next();
	}

	tapPromise(name, task) {
		this.tasks.push(task);
	}

	promise(...args) {
		const [first, ...others] = this.tasks;
		return others.reduce((prev, next) => {
			return prev.then(() => next(...args));
		}, first(...args));
	}
}
```

### AsyncSeriesWaterfallHook

测试回调：

```js
const { AsyncSeriesWaterfallHook } = require('tapable');

class Lesson {
	constructor() {
		this.index = 0;
		this.hook = {
			arch: new AsyncSeriesWaterfallHook(['name'])
		}
	}

	tap() {
		this.hook.arch.tapAsync('react', (name, cb) => {
			setTimeout(() => {
				console.log('react', name);
				cb('error', 'result');
			}, 1000);
		});

		this.hook.arch.tapAsync('vue', (data, cb) => {
			setTimeout(() => {
				console.log('vue', data);
				cb(null);
			}, 1000);
		});
	}

	start(...args) {
		this.hook.arch.callAsync(...args, () => {
			console.log('end');
		});
	}
}

const lesson1 = new Lesson();
lesson1.tap();
lesson1.start('hello world!');
```

自实现AsyncSeriesWaterfallHook

```js
class AsyncSeriesWaterfallHook {
	constructor(args) {
		this.tasks = []; // 存储
	}

	tapAsync(name, task) {
		this.tasks.push(task);
	}

	callAsync(...args) {
		const finalCallback = args.pop();
		let index = 0;
		const next = (err, data) => {
			const task = this.tasks[index];
			if (!task || err) return finalCallback();
			if (index === 0) {
				task(...args, next);
			} else {
				task(data, next);
			}
			index++;
		}
		next();
	}

	tapPromise(name, task) {
		this.tasks.push(task);
	}

	promise(...args) {
		const [first, ...others] = this.tasks;
		return others.reduce((prev, next) => {
			return prev.then((data) => next(data));
		}, first(...args));
	}
}
```
