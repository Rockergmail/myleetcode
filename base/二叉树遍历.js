/*
 * @description: 
 * @author: xiangrong.liu
 * @Date: 2020-06-04 17:50:56
 * @LastEditors: xiangrong.liu
 * @LastEditTime: 2020-06-04 18:36:34
    https://segmentfault.com/a/1190000004620352
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

// WFS
function WFS(node) {
    let stack = [node]
    while(stack.length) {
        let currentNode = stack.shift()
        console.log(currentNode.value)
        currentNode.left && stack.push(currentNode.left)
        currentNode.right && stack.push(currentNode.right)
    }
}

console.log(WFS(tree))


// DFS

// 先序遍历：DLR
function preOrder (node) {
    if (node) {
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }
}

// 先序遍历：LDR
function inOrder (node) {
    if (node) {
        inOrder(node.left)
        console.log(node.value)
        inOrder(node.right)
    }
}

// 先序遍历：LRD
function postOrder (node) {
    console.log('----> 1')
    if (node) {
        console.log('----> 2')
        postOrder(node.left)
        console.log('----> 3')
        postOrder(node.right)
        console.log('----> 4')
        console.log(node.value)
    }
}

// preOrder(tree)
// inOrder(tree)
// postOrder(tree)