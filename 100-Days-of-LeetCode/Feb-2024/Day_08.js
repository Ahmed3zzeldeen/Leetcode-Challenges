/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let arrOfAllSquares = [];
  for (let i = 1; i <= n; i++) {
    if (i * i <= n) {
      arrOfAllSquares.push(i * i);
    } else {
      break;
    }
  }
  let dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (const square of arrOfAllSquares) {
      if (i - square >= 0) {
        dp[i] = Math.min(dp[i], dp[i - square] + 1);
      }
    }
  }
  return dp[n];
};

console.log(numSquares(12)); // 3 => 12 = 4 + 4 + 4
console.log(numSquares(13)); // 2 => 13 = 4 + 9
console.log(numSquares(14)); // 3 => 14 = 1 + 4 + 9
console.log(numSquares(15)); // 4 => 15 = 1 + 1 + 4 + 9
console.log(numSquares(16)); // 1 => 16 = 16

