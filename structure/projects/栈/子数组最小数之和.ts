// 单调栈
// 参考自https://leetcode-cn.com/problems/sum-of-subarray-minimums/solution/c-dan-diao-zhan-zhong-yu-hui-liao-by-subshall/
function sumSubarrayMins(arr: number[]): number {
  let len = arr.length;
  if (len === 1) {
    return arr[0];
  }

  const NUM = Math.pow(10, 9) + 7;

  let dp = arr[0]; // dp0~i之间的值
  let stack = [0]; // 栈，递增
  let sum = dp;
  for (let i = 1; i < len; i++) {
    dp += arr[i];

    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {

      dp -= (arr[stack[stack.length - 1]] - arr[i]) * (stack[stack.length - 1] - (stack[stack.length - 2] ?? -1));
      stack.pop();
    }

    stack.push(i);

    sum += dp;
  }
  return sum % NUM;
};