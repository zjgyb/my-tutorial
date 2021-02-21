function countVowelStrings(n: number): number {
  let a = [5, 4, 3, 2, 1];
  let arr = [5];
  for (let i = 1; i < n; i++) {
    let newArr = [];
    for (let j = 0; j < arr.length; j++) {
      newArr.push(...a.slice(5 - arr[j]));
    }
    arr = [...newArr];
  }
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
};


function countVowelStrings1(n: number): number {
  // https://leetcode-cn.com/problems/count-sorted-vowel-strings/solution/zhong-xue-shu-xue-ke-pu-n-ge-xiao-qiu-fang-dao-m-g/
  // C(m+n-1, m-1)
  return (n + 4) * (n + 3) * (n + 2) * (n + 1) / 24;
}