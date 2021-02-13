// 自己写的
function mincostTickets(days: number[], costs: number[]): number {
  let dp: number[] = [];
  let len = days.length;

  let sum = Math.min(...costs);
  dp[days[0]] = sum;

  for (let i = 1; i < len; i++) {
    let j = days[i];
    while (j > days[i - 1]) {
      dp[--j] = dp[days[i - 1]];
    }

    dp[days[i]] = Math.min(
      costs[0] + dp[days[i] - 1],
      costs[1] + (days[i] - 6 > days[0] ? dp[days[i] - 7] : 0),
      costs[2] + (days[i] - 29 > days[0] ? dp[days[i] - 30] : 0)
    );
  }

  return dp.pop();
};

// 官方例子

function mincostTickets1(days: number[], costs: number[]): number {
  let arr: number[] = [];
  let len = days.length;
  let date = [1, 7, 30];
  let dp = (i: number) => {
    if (i >= len) {
      return 0;
    }

    if (typeof arr[i] === 'number') {
      return arr[i];
    }

    let j = i;
    arr[i] = Infinity;

    for (let k = 0; k < 3; k++) {
      while (j < len && days[j] < days[i] + date[k]) {
        j++;
      }

      arr[i] = Math.min(arr[i], dp(j) + costs[k]);
    }

    return arr[i];
  }
  return dp(0);
};