function makeGood(s: string): string {
  const arr: string[] = []; // 栈内的数组

  for (const i of s) {
    if (arr.length === 0) {
      arr.unshift(i);
      continue;
    }
    if (Math.abs(arr[0].charCodeAt(0) - i.charCodeAt(0)) === 32) {
      arr.shift();
    } else {
      arr.unshift(i);
    }
  }

  return arr.reverse().join('');
};

