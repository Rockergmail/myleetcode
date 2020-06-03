/*
 * @description: 
 * @author: xiangrong.liu
 * @Date: 2020-06-03 18:08:12
 * @LastEditors: xiangrong.liu
 * @LastEditTime: 2020-06-03 19:21:05
 */ 
let nums1 = [1,2,3,0,0,0], 
    m = 3,
    nums2 = [2,5,6],       
    n = 3

// 双指针法
// 时间复杂度O(m+n) 空间复杂度O(m+n)
function bruteForce (nums1, m, nums2, n) {
    let p1 = 0,
        p2 = 0,
        arr = [];

    while(p1 < m || p2 < n) {
        if (p1 >= m && p2 < n) {
            arr.push(nums2[p2]);
            p2++;
            continue;
        }
    
        if (p2 >= n && p1 < m) {
            arr.push(nums1[p1]);
            p1++;
            continue;
        }
        
        if (nums1[p1] < nums2[p2]) {
            arr.push(nums1[p1]);
            p1++;
        } else {
            arr.push(nums2[p2]);
            p2++;
        }
    }
    return arr
}

var merge = function(nums1, m, nums2, n) {
    return bruteForce(nums1, m, nums2, n)
};

console.log(merge(nums1, m, nums2, n))

