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