function maximalSquare(matrix: string[][]): number {
  let m = matrix.length;
  let n = matrix[0].length;
  let dp: number[] = Array(n).fill(0); // 保存状态的值
  let curDp: number[] = []; // 现在的值
  let max = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "0") {
        curDp[j] = 0;
        continue;
      }

      if (matrix[i][j] === "1") {
        curDp[j] = Math.min(dp[j] || 0, curDp[j - 1] || 0, dp[j - 1] || 0) + 1;
        max = Math.max(max, curDp[j] ** 2);
      }
    }
    dp = [...curDp];
  }
  return max;
};