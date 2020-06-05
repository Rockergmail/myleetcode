/*
 * @description: 
 * @author: xiangrong.liu
 * @Date: 2020-06-04 17:04:51
 * @LastEditors: xiangrong.liu
 * @LastEditTime: 2020-06-05 10:14:03
 */ 

 /**
  * 1. 主要还是要熟悉dfs、bfs的基本做法吧，看懂了才能理解这题还有101的操作
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
 * @return {number}
 */
let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}

var maxDepth = function(root) {
    // return dfs(root)
    return wfs(root)
};


function dfs(node) {
    if (node) {
        let leftDepth = dfs(node.left)
        let rightDepth = dfs(node.right)
        return Math.max(leftDepth, rightDepth) + 1
    } else {
        return 0
    }
}

function wfs(node) {

    if (!node) {
        return 0
    }

    let stack = [node]
    let depth = 0
    while(stack.length) {
        depth++
        let size = stack.length
        for (let i = 0; i < size; i++) {
            let currentNode = stack.shift()
            currentNode.left && stack.push(currentNode.left)
            currentNode.right && stack.push(currentNode.right)
        }
    }
    return depth
}

console.log(maxDepth(tree))