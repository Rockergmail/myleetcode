/*
 * @description: 
 * @author: xiangrong.liu
 * @Date: 2020-06-04 17:04:51
 * @LastEditors: xiangrong.liu
 * @LastEditTime: 2020-06-04 20:13:57
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

// function wfs(node) {
//     let stack = [node]
//     let depth = 0
//     while(stack.length) {
//         let currentNode = stack.shift()
//         let currentDepth = map.get(currentNode)

//         if (currentNode) {
//             map.set(currentNode.left, currentDepth)
//             stack.push(currentNode.left, currentNode.right)
//         } else {
//         }
//     }
//     return depth
// }

function wfs(node) {
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