function isValid(s: string): boolean {
  let len = s.length;

  // 长度必须是偶数
  if (len % 2 !== 0) {
    return false;
  }

  let arr: string[] = [];
  let mapObj = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  // 遍历
  for (const i of s) {

    if (mapObj[i]) {
      if (arr.pop() !== mapObj[i]) {
        return false;
      }
    } else {
      arr.push(i);
    }
  }

  return arr.length === 0;
};