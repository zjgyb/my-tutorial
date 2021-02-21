function cuttingRope(n: number): number {
  if (n <= 3) {
    return n - 1;
  }
  // 分解成2或3的因子
  let a3 = Math.floor(n / 3) - (n % 3 === 1 ? 1 : 0);
  return Math.pow(2, (n - 3 * a3) / 2) * Math.pow(3, a3);
};