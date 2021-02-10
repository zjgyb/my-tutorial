function dailyTemperatures(T: number[]): number[] {
  let stack = []; // 单调递增栈
  let arr = [];
  for (let i = 0, len = T.length; i < len; i++) {
    arr[i] = 0;
    while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
      let j = stack.pop();
      arr[j] = i - j;
    }
    stack.push(i);
  }
  return arr;
};