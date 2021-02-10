function trap(height: number[]): number {
  let arr = [0]; // 一个单调栈
  let sum = 0; // 接到的总雨水
  for (let i = 1, len = height.length; i < len; i++) {
    while (height[i] >= height[arr[arr.length - 1]]) {
      // 先弹出一个
      let top = arr.pop();
      if (arr.length === 0) {
        break;
      }
      let index = i - arr[arr.length - 1] - 1;
      let min = Math.min(height[arr[arr.length - 1]], height[i]) - height[top];
      sum += index * min;
    }

    arr.push(i);
  }


  return sum;
};