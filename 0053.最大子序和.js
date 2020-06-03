/**
 * @param {number[]} nums
 * @return {number}
 */

// let list = [1,2,3]
// let list = [-2,1,-3,4,-1,2,1,-5,4]
let list = [4, -3, 5, -2, -1, 2, 6, -2]

// 暴力解法，时间复杂度O(n^2)
// function violentSumSubArray(list) {

//   let max = -Number.MAX_VALUE
//   let sum = 0

//   for (let i = 0; i < list.length; i++) {
//     sum = 0
//     for (let j = i; j < list.length; j++) {
//       sum += list[j]
//       max = Math.max(max, sum)
//     }
//   }

//   return max
// }

// console.log(violentSumSubArray(list))


// 分治 时间复杂度O(n*log(n))
function Status(l, r, m, i) {
  this.lSum = l;
  this.rSum = r;
  this.mSum = m;
  this.iSum = i;
  console.log(this.mSum)
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

// console.log(maxSubArray(list))
maxSubArray(list)