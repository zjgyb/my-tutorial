// 有限状态机解法
// https://leetcode-cn.com/problems/greatest-sum-divisible-by-three/solution/you-xian-zhuang-tai-ji-by-xing-guang-29/
function maxSumDivThree(nums: number[]): number {
  // 第一个能被3整除，第二个取模后值为1，第三个取模后值为2
  let state = [0, -Infinity, -Infinity];
  for (const num of nums) {
    let s = state[2];
    if (num % 3 === 0) {
      state[0] += num;
      state[1] += num;
      state[2] += num;
    } else if (num % 3 === 1) {
      let s0 = Math.max(state[2] + num, state[0]);
      let s1 = Math.max(state[0] + num, state[1]);
      let s2 = Math.max(state[1] + num, state[2]);
      state = [s0, s1, s2];
    } else {
      let s0 = Math.max(state[1] + num, state[0]);
      let s1 = Math.max(state[2] + num, state[1]);
      let s2 = Math.max(state[0] + num, state[2]);
      state = [s0, s1, s2];
    }
  }
  return state[0];
};