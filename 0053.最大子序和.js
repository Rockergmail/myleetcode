/*
 * @description: 
 * @author: xiangrong.liu
 * @Date: 2020-06-02 18:56:52
 * @LastEditors: xiangrong.liu
 * @LastEditTime: 2020-06-03 18:03:34
 */ 

/**
 * 1. 自己用暴力解法解开了O(n^2)，这时候应该去想有没有O(nlogn)，基本上就是分治法，再想想有没有优化空间做到O(n)，动态规划（贪心算法），线段树等等
 * 2. 
 * 3. 分治法比较好的讲解：https://blog.csdn.net/gcvdsvb/article/details/36027747
 * 4. 动态规划比较好的讲解：https://b23.tv/SDWEw9
 */


// let nums = [4, -3, 5, -2, -1, 2, 6, -2]
// let nums = [-2,1,-3,4,-1,2,1,-5,4]
let nums = [-2,1]

// 线段树，需要有分治的基础
// TODO: 未弄懂
function Status(l, r, m, i) {
    this.lSum = l;
    this.rSum = r;
    this.mSum = m;
    this.iSum = i;
}

const pushUp = (l, r) => {
    const iSum = l.iSum + r.iSum;
    const lSum = Math.max(l.lSum, l.iSum + r.lSum);
    const rSum = Math.max(r.rSum, r.iSum + l.rSum);
    const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
    return new Status(lSum, rSum, mSum, iSum);
}

const getInfo = (a, l, r) => {
    if (l === r) return new Status(a[l], a[l], a[l], a[l]);
    const m = (l + r) >> 1;
    const lSub = getInfo(a, l, m);
    const rSub = getInfo(a, m + 1, r);
    return pushUp(lSub, rSub);
}

var maxSubArray = function(nums) {
    return getInfo(nums, 0, nums.length - 1).mSum;
};

// console.log(maxSubArray(nums))

/* 分治 O(nlogn)
    思路：
    1. 要么在左边、要么在右边、要么在中间
    2. 中间的时候，其实就是中间两个元素，往外探索最大值
    3. 思考边界问题，当最后只有一个的时候，就是本身
    4. 结合1、2，在conquer的时候，只要计算出2的值，返回最大值就可以了
    5. 对迭代的执行顺序、返回要有掌握才可以
*/
function divideAndConquer(arr, l, r) {
    if (l === r) {
        return arr[l]
    }

    let m = l + r >> 1
    let lSum = divideAndConquer(arr, l, m)
    let rSum = divideAndConquer(arr, m+1, r)

    let mSum = arr[m] + arr[m+1]
    let leftBorderSum = mSum
    let rightBorderSum = mSum

    for (i = m - 1; i >= 0; i--) {
        leftBorderSum += arr[i]
        if (leftBorderSum > mSum) {
            mSum = leftBorderSum
        }
    }

    for (i = m + 2; i <= r; i++) {
        rightBorderSum += arr[i]
        if (rightBorderSum > mSum) {
            mSum = rightBorderSum
        }
    }

    return Math.max(lSum, rSum, mSum)
}


console.log(divideAndConquer(nums, 0, nums.length -1))

/**
 * 动态规划
 * 1. 从1~多个，发现规律
 * 2. 以右断点为准，每次对比左边的最大和，如果<0，就不加了，以自己为准
 * 3. 动态规划还是要发现规律才可以，代码实现上，别人不好看出来思路
 */
function dynamic(arr) {
    if (!arr.length) {
        return 0
    }
    let mMax = arr[0] // 最大子序和
    let iMax = arr[0] // 当前最大和
    for (let i = 1; i < arr.length; i ++) {
        if (iMax < 0) {
            iMax = arr[i]
        } else {
            iMax += arr[i]
        }
        mMax = Math.max(mMax, iMax)
    }
    return mMax
}

console.log(dynamic(nums))