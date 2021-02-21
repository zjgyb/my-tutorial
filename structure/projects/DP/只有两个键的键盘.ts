function minSteps(n: number): number {
  if (n === 1) {
    return 0;
  }
  let dp = []; // 记录值
  let i = 4;
  dp[2] = 2;
  dp[3] = 3;
  while (i <= n) {
    if (i % 2 === 0) {
      dp[i] = dp[i / 2] + 2;
    } else {
      let j = (i - 1) / 2;
      j = j % 2 === 0 ? --j : j;
      while (i % j !== 0 && j >= 1) {
        j -= 2;
      }
      dp[i] = j === 1 ? i : (dp[j] + i / j);
    }
    i++;
  }
  return dp[n];
};

// 素数分解
function minSteps(n: number): number {
  let ans = 0;
  let d = 2;
  while (n > 1) {
    while (n % d === 0) {
      ans += d;
      n /= d;
    }
    d++;
  }
  return ans;
};