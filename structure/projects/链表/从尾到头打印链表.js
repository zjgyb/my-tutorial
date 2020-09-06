/**
 * @file 剑指offer第6题
 * 已知链表，从尾到头打印链表的每一个节点
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {

  // 判断是否为空
  if (!head || head.val === undefined) {
    return [];
  }

  // 循环
  let arr = [];
  while (head !== null && head.next) {
    arr.unshift(head.val);
    head = head.next;
  }
  arr.unshift(head.val);
  return arr;
};

let obj = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3
    }
  }
}


console.log(reversePrint(obj));
