/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */

//  let nums = [2,2,1,1,1,2,2]
 let nums = [3,2,3]

var majorityElement = function(nums) {
    // return mapping(nums)
    // return sort(nums)
    return vote(nums)
};

// 哈希表 时间复杂度O(n) 空间复杂度O(n)
function mapping(nums) {
    let map = new Map()
    let meCounter = 1
    let me = nums[0]
    map.set(me, meCounter)

    for (let i = 1; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let counter = map.get(nums[i]) + 1
            map.set(nums[i], counter)
            if (meCounter < counter) {
                meCounter = counter
                me = nums[i]
            }
        } else {
            map.set(nums[i], 1)
        }
    }

    return me

}

// 排序之后取中间的值
// 限定条件下的极限情况
function sort(nums) {
    let sorted = nums.sort()
    let index = Math.round(nums.length / 2)
    return sorted[index]
}

// 投票法
// 限定条件下的极限情况
// 当且仅当多数元素，出现的频率是大于n/2，这个想法才可以
function vote(nums) {
    let marj = nums[0]
    let counter = 1
    for (let i = 1; i < nums.length; i++) {
        if (counter === 0) {
            marj = nums[i]
        }

        if (marj === nums[i]) {
            counter++
        } else {
            counter--
        }
    }

    return marj
}

console.log(majorityElement(nums))