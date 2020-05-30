/*
 * @description: 
 * @author: xiangrong.liu
 * @Date: 2020-05-29 16:27:40
 * @LastEditors: xiangrong.liu
 * @LastEditTime: 2020-05-29 18:54:45
 */ 
/*
1. 阿里健康第一面的算法题，当时没有复习算法，所以就跪了，当我看到了答案之后，心很痛，原来很简单，痛定思痛，怒刷leetcode
2. 对时间复杂度的评估不熟悉（以为遍历一次都会导致时间复杂度高）
3. 栈，先进先出
4. 测试用例不全，有个别逻辑缺失，即缺少考虑边界情况
*/


// let str = 'abc(123)'
// let str = '[(123)]'
// let str = '{123)'
// let str = '()[]'
// let str = ']'
let str = '(])'

var isValid = function(s) {
    if (!s) {
        return true
    }
    let valid = false;
    let left = ['{', '[', '(']
    let right = ['}', ']', ')']
    let stack = [];
    let match = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    for (let i = 0; i < s.length; i++) {
        if (left.includes(s[i])) {
            stack.push(s[i])
        } else if (right.includes(s[i])) {
            if (stack[stack.length -1] === match[s[i]]) {
                stack.pop()
                if (!stack.length) {
                    valid = true
                }
            } else {
                return false
            }
        }
    }
    return valid
};

console.log(isValid(str))