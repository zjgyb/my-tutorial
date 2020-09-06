/**
 * 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下的顺序排列。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数
 */

/**
 *
 * @param {*} matrix
 * @param {*} target
 * 原本思路，从最右侧检查列第一个是否大于目标函数，如果大于，则该列剔除
 * 如果小于，则从行开始检查，查看该行最右侧（上面查出的最右侧）是否大于目标函数
 * 但这里有一个问题，需要不断剔除列和行，所以应采用下一种方法
 */
function fn(matrix, target) {
  let rLen = matrix[0]?.length;
  let cLen = matrix?.length;
  if (cLen < 1) {
    return false;
  }

  let i = rLen;
  let j = 0;
  for (; i >= 0; i--) {
    if (matrix[i][0] < target) {
      break;
    } else if (matrix[i][0] === target) {
      return true;
    }
  }

  for(; j <= cLen; j++) {
    if (matrix[j][i] < target) {
      continue;
    } else if (matrix[j][i] === target) {
      return true;
    } else {
      break;
    }
  }

  for(let m = 0; m < i; m++) {
    if (matrix[j][m] === target) {
      return true;
    }
  }

  return false;
}


/**
 *
 * @param {*} matrix 二维数组
 * @param {*} target 目标数字
 * 解题思路：把二维数组想象成一个矩形，然后查看这个矩形二维数组左下角的值是否大于目标数字
 * 如果大于，证明最后一行没有目标数字，从倒数第二行继续查看
 * 如果等于，直接返回
 * 如果小于，证明该列没有目标数字，从第二列继续查看
 */
function fn(matrix, target) {
  let rLen = matrix[0] && matrix[0].length; // 横向
  let cLen = matrix && matrix.length; // 纵向
  if (cLen < 1) {
    return false;
  }

  let i = 0;
  let j = cLen - 1;
  while (j >= 0 && i < rLen) {
    // 查看左下角是否大于目标函数
    if (matrix[j][i] > target) {
      j--;
    } else if (matrix[j][i] === target) {
      return true;
    } else {
      i++;
    }
  }

  return false;
}

let matrix= [];
let target = 7;
let a =fn(matrix, target);
