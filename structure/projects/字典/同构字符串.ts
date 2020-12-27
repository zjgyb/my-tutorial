/**
 * isomorphic-strings
 * 同构字符串的意思是下标形式相同
 * @param s
 * @param t
 */

function isIsomorphic(s: string, t: string): boolean {
  let sMap = new Map();
  let tMap = new Map();

  for (let i: number = 0, sLen: number = s.length; i < sLen; i++) {
    let hasS: number = sMap.get(s[i]);
    let hasT: number = tMap.get(t[i]);
    if (!hasS && !hasT) {
      sMap.set(s[i], sMap.size + 1);
      tMap.set(t[i], tMap.size + 1);
    } else if (hasT && hasS && hasT === hasS) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};