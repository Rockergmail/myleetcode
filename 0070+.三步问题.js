/*
 * @description: 
 * @author: xiangrong.liu
 * @Date: 2020-06-08 09:09:58
 * @LastEditors: xiangrong.liu
 * @LastEditTime: 2020-06-08 09:19:36
 */ 
/**
 * 三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

示例1:

 输入：n = 3 
 输出：4
 说明: 有四种走法
示例2:

 输入：n = 5
 输出：13
提示:

n范围在[1, 1000000]之间

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/three-steps-problem-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
  * 1. dp，发现规律：Sn= Sn-1 + Sn-2 + Sn-3
  */


/**
 * @param {number} n
 * @return {number}
 */

let n = 5

var waysToStep = function(n) {
    return dp(n)
};

function dp(n) {
    let S1 = 1,
        S2 = 2,
        S3 = 4;

    if (n === 1) {
        return S1
    }

    if (n === 2) {
        return S2
    }

    if (n === 3) {
        return S3
    }

    for (let i = 4; i <= n; i++) {
        [S1, S2, S3] = [S2, S3, (S1+S2+S3) % 1000000007]
    }

    return S3

}

console.log(waysToStep(n))