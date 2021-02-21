function countSubstrings(s: string): number {
  let len = s.length;
  let num = 0;

  for (let i = 0; i < len; i++) {

    // 自身是回文子串
    num++;
    let n = i - 1;
    let j = i + 1;
    while (n >= 0 && j <= len) {

      // 如果左边一个字符串等于本身字符，则n-1
      if (s[n] === s[i] && j === i + 1) {
        num++;
        --n;
        continue;
      }

      // 查看左边的字符串是否等于右边的字符串
      if (s[n] === s[j]) {
        --n;
        ++j;
        num++;
        continue;
      }
      break;
    }
  }

  // 返回所有的回文子串数
  return num;
};