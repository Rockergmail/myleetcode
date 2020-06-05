/**
 * 1. 题目需要转换从左到右，最低点到他后面的最高点的差，先找到最小值，然后就有思路了
 */

/**
* @param {number[]} prices
* @return {number}
*/

// let prices = [7,1,5,3,6,4]
// let prices = [7,3,6,1,5,4]
let prices = [7,6,4,3,1]

var maxProfit = function (prices) {
    return dp(prices)
    // return bructForce(prices)
};

function dp(prices) {
    let maxMiuns = 0
    if (prices.length <= 1) {
        return maxMiuns
    } 
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
            continue
        }
        let result = prices[i] - min
        if (result > 0) {
            maxMiuns = Math.max(maxMiuns, result)
        }
        console.log(prices[i], min, result, maxMiuns)
    }
    return maxMiuns
}

function bructForce(prices) {
    let maxMiuns = 0
    if (prices.length <= 1) {
        return maxMiuns
    }

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i+1; j < prices.length; j++) {
            let result = prices[j] - prices[i]
            if (result > 0) {
                maxMiuns = Math.max(maxMiuns, result)
            }
        }
    }

    return maxMiuns
}


console.log(maxProfit(prices))