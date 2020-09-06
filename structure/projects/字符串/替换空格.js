/**
 * 请实现一个函数，把字符串中的每个空格都替换成'%20'
 * 如 We are happy. -> We%20are%20happy.
 */

/**
 * 第一种想法是循环查找替换
 */

var replaceSpace = function(s) {
  let reg = /\s/g;
  return s.replace(reg, '%20');
};

console.log(replaceState('We are happy'))
/**
 * 第二种是正则替换
 */

var replaceSpace = function (s) {
  let ns = "";
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === " ") {
      ns += "%20";
    } else {
      ns += s[i];
    }
  }
  return ns;
};