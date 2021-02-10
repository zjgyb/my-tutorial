function minAddToMakeValid(S: string): number {
  let len = S.length;
  if (len === 0) {
    return len;
  }

  let arr = []; // 保存括号的栈，原则保留(
  let idx = 0;
  for (const i of S) {
    if (i === ')') {
      arr[arr.length - 1] === '(' ? arr.pop() : idx++;
    } else {
      arr.push(i);
    }
  }
  return idx + arr.length;
};