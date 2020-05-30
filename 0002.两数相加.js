/*
 * @description: 
 * @author: xiangrong.liu
 * @Date: 2020-05-29 16:27:40
 * @LastEditors: xiangrong.liu
 * @LastEditTime: 2020-05-29 17:02:37
 */ 
/*
1. 没有注意审题，没有留意“两个”，只需要“两个”，结果把问题想复杂了
2. 暴力破解，O(n^2)，遍历少不了，只遍历一遍的话不会导致时间复杂度变高
3. 没有接触过哈希表数据结构，没有取巧转换成减，所以没有想到更好的方案
*/


let nums = [8, 9, 2, 3]
// let nums = [2, 3, 8, 9, 2, 3]
let target = 5 

// 暴力破解
// 时间复杂度：O(n^2)
function violentTwoSum(nums, target) {
    let first = -1, second = -1
    for (let i = 0; i < nums.length - 1 ; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                first = i,
                second = j
            }
        }
        if (first !== -1 && second !== -1) break;
    }
    if (first !== -1 && second !== -1) {
        return [first, second]
    } else {
        return []
    }
}

// 哈希表
// 时间复杂度：O(n)
// 空间复杂度：O(n)
function mapTwoSum(nums, target) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let minus = target - nums[i];
        if (map.has(minus)) {
            return [map.get(minus), i]
        }
        map.set(nums[i], i)
    }
    return []
}
console.log(mapTwoSum(nums, target))