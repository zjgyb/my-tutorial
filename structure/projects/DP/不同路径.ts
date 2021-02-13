function uniquePaths(m: number, n: number): number {
  if (m === 1 || n === 1) {
    return 1;
  }
  let arr: number[] = Array(m).fill(1); // 保存dp的值

  for (let j = 1; j < n; j++) {
    for (let i = 1; i < m; i++) {
      arr[i] += (arr[i - 1] ?? 1);
    }
  }
  return arr.pop();
};