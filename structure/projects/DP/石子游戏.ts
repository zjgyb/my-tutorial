function stoneGame(piles: number[]): boolean {
  let p1 = 0,
    p2 = 0,
    i = 0,
    j = piles.length - 1;
  for (; i < j; i++, j--) {
    p1 += Math.max(piles[i], piles[j]);
    p2 += Math.min(piles[i], piles[j]);
  }
  return p1 > p2;
};


// 始终为true
function stoneGame(piles: number[]): boolean {
  return true;
};