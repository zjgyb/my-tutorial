function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length <= 2) {
    return Math.max(nums[0], nums[1] || 0);
  }
  nums[-1] = 0;
  let max = 0;
  for (let i = 2; i < nums.length; i++) {

    // 注意隔两个问题
    max = Math.max(nums[i - 2] + nums[i], nums[i - 1], nums[i] + nums[i - 3]);
    nums[i] = max;
  }
  return max;
};

function rob1(nums: number[]): number {
  // f(n) = min(minCosts[i - 2] + cost[i - 1], minCosts[i - 1] + cost[i])
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length <= 2) {
    return Math.max(nums[0], nums[1] || 0);
  }
  let prev = nums[0]; // 第二天不接受预约
  let next = Math.max(nums[0], nums[1]); // 第一天或者第二天接受预约的最大值
  for (let i = 2; i < nums.length; i++) {
    let a = next;
    next = prev + nums[i]; // 前一天不接受预约 + 现在接收预约
    prev = Math.max(prev, a); // 前一天不接受预约或者前一天接受预约的最大值
  }
  return Math.max(prev, next);
}