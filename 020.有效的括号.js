/*
 * @description: 
 * @author: xiangrong.liu
 * @Date: 2020-05-29 16:27:40
 * @LastEditors: xiangrong.liu
 * @LastEditTime: 2020-05-29 17:59:25
 */ 
/*
1. 阿里健康第一面的算法题，当时没有复习算法，所以就跪了，当我看到了答案之后，心很痛，原来很简单，痛定思痛，怒刷leetcode
2. 对时间复杂度的评估不熟悉（以为遍历一次都会导致时间复杂度高）
3. 栈，先进先出
*/


// let str = 'abc(123)'
let str = '[(123)]'
// let str = '{123)'
// let str = '()[]'

function isClosure(str) {
    if (Object.prototype.toString.call(str) !== '[object String]') {
        throw new Error('请传入字符串')
    }
    let left = ['{', '[', '(']
    let right = ['}', ']', ')']
    let stack = [];
    let match = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    for (let i = 0; i < str.length; i++) {
        if (left.includes(str[i])) {
            stack.push(str[i])
        }
        console.log(stack)
        if (right.includes(str[i])) {
            if (stack[stack.length -1] === match[str[i]]) {
                stack.pop()
            }
        }
    }
    return !stack.length
}

console.log(isClosure(str))