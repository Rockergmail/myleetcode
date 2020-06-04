/*
 * @description: 
 * @author: xiangrong.liu
 * @Date: 2020-06-03 19:24:55
 * @LastEditors: xiangrong.liu
 * @LastEditTime: 2020-06-04 10:51:10
 */ 

/**
 * 1. 第一次接触树的算法
 * 2. 基本思路肯定是要遍历的
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归的思路，要理解执行顺序、返回
function recursion(left, right) {
    if (!left && !right) {
        return true
    }
    // 此处if是已经多了上面一层的if过滤了
    if (!left || !right) {
        return false
    }

    return (left.val === right.val) && recursion(left.left, right.right) && recursion(left.right, right.left)
    
}

// 迭代的思路，还是要遍历所有的节点，这个的遍历顺序跟
// 节点为主
function iterator(left, right) {
    let stack = []
    stack.push(left, right)
    while(stack.length) {

        left = stack.shift();
        right = stack.shift();

        if (!left && !right) continue
        if (!left || !right) return false
        if (left.val !== right.val) return false
        
        stack.push(left.left, right.right, left.right, right.left)
    }
    return true
}

var isSymmetric = function(root) {
    // return recursion(root, root);
    return iterator(root, root);
};