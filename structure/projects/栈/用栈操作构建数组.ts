function buildArray(target: number[], n: number): string[] {
  let arr = [];
  for (let i = 1, j = 0; i <= n && j < target.length; i++) {
    if (target[j] === i) {
      arr.push('Push');
      j++;
    } else {
      arr.push('Push', 'Pop');
    }
  }
  return arr;
};