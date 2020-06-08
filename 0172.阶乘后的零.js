/**
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。

示例 1:

输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
示例 2:

输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
说明: 你算法的时间复杂度应为 O(log n) 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/factorial-trailing-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} n
 * @return {number}
 */

// 需要发现规律，出现0，都是出现5*2，因为2多出来了，只需要计算5就可以

let n = 5
let counter = 0

var trailingZeroes = function(n) {
    return iterate(n)
};

console.log(trailingZeroes(n))

function iterate(n) {
    let counter = 0
    if ( n < 5 ) {
        return counter
    }
    for (let i = 5; i <= n; i = i + 5) {
        let current = i
        while (current % 5 === 0) {
            counter++
            current = Math.floor(current / 5)
        }
    }
    return counter
}