/**
 * 审题：
 * 1. 排序数组，就是不需要考虑排序
 * 2. 不能使用额外空间，对空间复杂度要求是O(1)
 * 3. 原地删除
 * 
 * 我的思路：
 * 0. 遍历是逃不开了，数据结构也不用考虑因为本来就是数组
 * 1. 已排序，两两对比，但是删除了就改变了顺序，要重新对比，效率明显不高。
 * 2. 怎么破解删除后顺序的改变？
 * 
 * 看了答案之后：
 * 1. 其实也没有实现真的删除，根据题目的要求，直接转换成换变量了
 * 2. 要灵活转换，譬如对比相同，就可以转换成对比不同；也像001题求和可以转成求差
 * 3. 还要考虑边界问题，数组的长度为0怎么办
 */



/**
 * @param {number[]} nums
 * @return {number}
 */

// let nums = [0,0,1,1,1,2,2,3,3,4]
let nums = []

var removeDuplicates = function(nums) {

    if (!nums.length) {
        return 0
    }

    let slowPointer = 0;
    for (let fastPointer = 0; fastPointer < nums.length; fastPointer++) {
        if (nums[slowPointer] !== nums[fastPointer]) {
            slowPointer++;
            nums[slowPointer] = nums[fastPointer]
        }
    }
    return slowPointer + 1;
};

let len = removeDuplicates(nums)

console.log('total', len)

for (let i = 0; i < len; i++) {
    console.log(nums[i])
}