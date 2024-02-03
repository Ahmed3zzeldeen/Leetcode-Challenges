/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  const n = arr.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    let currentMax = 0;
    let currentSum = 0;
    for (let j = i; j > Math.max(-1, i - k); j--) {
      currentMax = Math.max(currentMax, arr[j]);
      const cur = currentMax * (i - j + 1) + dp[j];
      currentSum = Math.max(currentSum, cur);
    }
    dp[i + 1] = currentSum;
  }
  return dp[n];
};