/**
 * 已知前序遍历和中序遍历值，重建二叉树
 */

/**
 * 循环写法
 * @param {number[]} preorder 前序遍历
 * @param {number[]} inorder 中序遍历
 * @return {TreeNode}
 * 该理念就是一个节点要么是前一个节点的左子树，要么是前一个节点的右子树或者前一个节点祖先的右子树
 */
var buildTree = function (preorder, inorder) {
 if (preorder.length === 0) {
    return null;
  }

  let node = new TreeNode(preorder[0]);
  let s = [];
  let cur = node;
  for (let i=1, j=0, len=preorder.length; i<len; i++) {
    if (cur.val !== inorder[j]) {
      cur.left = new TreeNode(preorder[i]);
      s.push(cur);
      cur = cur.left;
    } else {
      j++;
      while(s.length && s[s.length-1].val === inorder[j]) {
        cur = s.pop();
        j++;
      }
      cur = cur.right = new TreeNode(preorder[i]);
    }

  }
  return node;
};

/**
 * 递归写法
 * @param {*} preorder
 * @param {*} inorder
 */
var buildTree = function (preorder, inorder) {
  return build(preorder, inorder);
};

let i = 0;
let pre = 0;
let build = (preorder, inorder, stop) => {
  if (pre >= preorder.length) {
    return null;
  }

  if (inorder[i] === stop) {
    i++;
    return null;
  }

  let node = new TreeNode(preorder[pre++]);
  node.left = build(preorder, inorder, node.val);
  node.right = build(preorder, inorder, stop);
  return node;
};