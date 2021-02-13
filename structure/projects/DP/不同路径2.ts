function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let m = obstacleGrid[0].length;
  let n = obstacleGrid.length;
  let arr: number[] = Array(m).fill(0);
  arr[0] = +(obstacleGrid[0][0] === 0);

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      if (obstacleGrid[j][i] === 1) {
        arr[i] = 0;
        continue;
      }

      if (i >= 1 && obstacleGrid[j][i - 1] === 0) {
        arr[i] += arr[i - 1];
      }
    }
  }

  return arr.pop();
};