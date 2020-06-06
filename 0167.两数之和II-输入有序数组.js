/**
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:

返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:

输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

let numbers = [2, 7, 11, 15], target = 9;

var twoSum = function(numbers, target) {
    // return bructForce(numbers, target)
    // return mapping(numbers, target)
    return twoPointer(numbers, target)
};

// 时间复杂度O(n^2)
function bructForce(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i+1; i < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i+1, j+1]
            }
        }
    }
}

// 时间复杂度O(n)
// 空间复杂度O(n)
function mapping(numbers, target) {
    let map = new Map()
    map.set(numbers[0], 0)
    for (let i = 1; i < numbers.length; i++) {
        let minus = target - numbers[i]
        if (map.has(minus)) {
            return [map.get(minus)+1, i+1]
        } 
        map.set(numbers[i], i)
    }
}

// 时间复杂度O(n)
// 空间复杂度O(1)
function twoPointer(numbers, target) {
    let lp = 0,
        rp = numbers.length - 1
    
    while (lp < rp) {
        let sum = numbers[lp] + numbers[rp]
        if (sum === target) {
            return [lp+1, rp+1]
        } else if (sum > target) {
            rp--
        } else {
            lp++
        }
    }
}

console.log(twoSum(numbers, target))