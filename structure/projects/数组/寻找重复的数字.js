/**
 * description: 找出数组中重复的数字
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次
 * 请找出数组中任意一个重复的数字
 */

const arr = [2, 3, 1, 0, 2, 5, 3];

/**
 * 解法一：先把输入的数组排序，从头到尾扫描排序后的数组就可以了
 * 需要O(nlogn)的时间
 */

/**
 * 解法二：利用哈希表来解决这个问题，从头到尾顺序扫描数组中的每个数字
 * 每扫到一个数字就判断哈希表是否已经包含了该数字
 * 需要O(nlogn)的时间复杂度，但是以大小为O(n)的哈希表为代价
 * 映射到JS就可以把哈希表映射成一个对象
 */

 /**
  * 解法三
  * 从头到尾扫描这个数组
  * 如果第一个数字的下标不等于这个数字，那么这个数字与对应下标的数字比较，比如2 !== 0，那么2和下标为2的数字1比较，如果不同，则交换数字，继续比较
  * 如果相同，就找到重复的数字
  * 例如上面的数字，第一轮[1, 3, 2, 0, 2, 5, 3]，接着[3, 1, 2, 0, 2, 5, 3]，[0, 1, 2, 3, 2, 5, 3]，然后找到数字2
  * 尽管代码中有一个两重循环，但每个数字最多只要交换两次就能找到属于它的位置，因此时间复杂度为O(n)，同时不需要额外分配内存，所以空间复杂度为O(1)
  */


function findRepeatNumber(nums) {
  // 如果不是数组或者数组长度为0，那么直接返回-1，其实这里可以忽略
  if (!Array.isArray(nums) || nums.length <= 0) {
    return -1;
  }

  // 如果数组内元素小于0或者元素超过数组长度，那么直接返回-1，其实这里可以忽略
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] < 0 || nums[i] > len - 1) {
      return -1;
    }
  }

  for (let i = 0; i < len; i++) {
    while (nums[i] !== i) {
      if (nums[i] === nums[nums[i]]) {
        return nums[i];
      }

      let temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }
  // 没有发现
  return -1;
}

/**
 * 解法三的更好写法
 */
function findRepeatNumber(nums) {
  let len = nums.length;
  let i = 0;
  while (i < len) {
    if (nums[i] === nums[nums[i]]) {
      return nums[i];
    } else if (nums[i] === i) {
      continue;
    } else {
      let temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
    i++;
  }
  // 没有发现
  return -1;
}

/**
 * description: 上面的解法三是需要修改原数组的，长度为n+1，数字范围时1~n，同时现在要求是不能修改原数组
 */

/**
 * 解法一、二依然有效
 */

/**
 * 解法一、二依然有效，解法三就是创建一个新数组作为辅助数组，基本思路也就是上面的解法三
 */

/**
 * 解法四 把1~n的数字从中间的数字m分为两部分，一部分为1~n，一部分为m+1~n
 * 若1~m的数字超过m，那么这一半区间一定包含了重复的数字，一直一分为二，查找数组
 * 这种算法不能找出所有重复的数字
 * 函数调用为O(logn)，每次需要O(n)的事件，所有时间复杂度为O(nlogn)，空间复杂度为O(1)，用时间换空间
 */

function findRepeatNumber(nums) {
  // 判断是否为数组
  if (!Array.isArray(nums) || nums.length <= 0) {
    return -1;
  }

  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] < 1 || nums[i] > len - 1) {
      return -1;
    }
  }

  let left = 1;
  let right = len - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((right - left) / 2) + left;
    let n = 0;
    for (let i = 0; i < len; i++) {
      if (nums[i] >= left && nums[i] <= mid) {
        n++;
      }
    }

    if (left === mid) {
      if (n > 1) {
        return left;
      }
    }

    if (n > mid - left + 1) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
}