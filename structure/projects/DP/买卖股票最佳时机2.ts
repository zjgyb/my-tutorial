function maxProfit(prices: number[]): number {
  let sum = 0;

  // 累计叠加问题
  for (let i = 0, len = prices.length; i < len; i++) {
    if (prices[i] > prices[i - 1]) {
      sum += prices[i] - prices[i - 1];
    }
  }
  return sum;
};