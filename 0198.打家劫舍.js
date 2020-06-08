/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

 

示例 1：

输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 2：

输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 

提示：

0 <= nums.length <= 100
0 <= nums[i] <= 400

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/house-robber
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [1,2,3,1] // 4
// let nums = [2,7,9,3,1] // 12
// let nums = [2,1,1,2] // 4

/**
 * dp需要发现规律
 * S0 = nums[0] 
 * S1 = Max(S0, nums[1])
 * S2 = Max(S1, S0 + nums[2])
 * S3 = Max(S2, S1 + nums[3])
 * ……
 * Sn = Max(Sn-1, Sn-2 + nums[n])
 */

var rob = function(nums) {
    // return dp(nums)
    return dp2(nums)
};

// 时间复杂度、空间复杂度 O(n)
function dp(nums) {
    if (!nums.length) {
        return 0
    }
    if (nums.length === 1) {
        return nums[0]
    }

    let sum = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2; i < nums.length; i++) {
        sum[i] = Math.max(sum[i-1], sum[i-2] + nums[i])
    }

    return sum[nums.length - 1]
}

// 时间复杂度 O(n)
// 空间复杂度 O(1)
function dp2(nums) {
    if (!nums.length) {
        return 0
    }
    if (nums.length === 1) {
        return nums[0]
    }

    let sum0 = nums[0]
    let sum1 = Math.max(sum0, nums[1])
    // let sum = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2; i < nums.length; i++) {
        let tmp = sum1
        sum1 = Math.max(sum1, sum0 + nums[i])
        sum0 = tmp
    }

    return sum1
}

console.log(rob(nums))