/*
 * @description: 
 * @author: xiangrong.liu
 * @Date: 2020-05-29 16:27:40
 * @LastEditors: xiangrong.liu
 * @LastEditTime: 2020-05-29 18:54:45
 */ 
/*
1. 没有审题，一个升序链表，就不需要考虑重新排序了，又想复杂
2. 对链表的操作不熟悉，查找资料得出，链表的实现，有两个类，一个是ListNode，一个是LinkedList。这里只需要用到ListNodel.https://juejin.im/entry/59cb70995188256aa423b680
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 暴力解法 递归
// 时间复杂度：O(m+n)
// 空间复杂度：O(m+n) 考虑递归最深的时候要用到所有的空间
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if ( l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};

// 迭代
// 时间复杂度：O(m+n)
// 空间复杂度：O(1) 只需要常数的空间存放若干变量
var mergeTwoLists = function(l1, l2) {
    const prehead = new ListNode(-1);

    let prev = prehead;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    prev.next = l1 === null ? l2 : l1;

    return prehead.next;
};
