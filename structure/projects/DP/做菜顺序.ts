function maxSatisfaction(satisfaction: number[]): number {
  let max = 0;
  let len = satisfaction.length;
  satisfaction = satisfaction.sort((prev, next) => prev - next);
  let sum = 0;
  let val = 0;
  for (let i = 0; i < len; i++) {
    val += satisfaction[i] * (i + 1);
    sum += satisfaction[i];
  }
  max = Math.max(max, val);
  for (let i = 1; i < len; i++) {
    val -= sum;
    max = max > val ? max : val;
    sum -= satisfaction[i - 1];
  }
  return max;
};

function maxSatisfaction1(satisfaction: number[]): number {
  let len = satisfaction.length - 1;
  satisfaction = satisfaction.sort((prev, next) => prev - next);
  let prev = 0;
  let sum = 0;
  for (let i = len; i >= 0; i--) {
    let val = satisfaction[i];
    if (prev + val > 0) {
      prev += val;
      sum += prev;
    } else {
      break;
    }
  }
  return sum;
};