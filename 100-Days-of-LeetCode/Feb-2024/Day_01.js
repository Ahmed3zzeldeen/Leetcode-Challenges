/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
*/
var divideArray = function (nums, k) {
  let sortedArray = nums.sort((a, b) => a - b);
  let result = [];
  
  for (let i = 0; i < sortedArray.length; i += 3) {
    if (sortedArray[i + 1] - sortedArray[i] <= k &&
      sortedArray[i + 2] - sortedArray[i + 1] <= k &&
      sortedArray[i + 2] - sortedArray[i] <= k) {
      result.push([sortedArray[i], sortedArray[i + 1], sortedArray[i + 2]]);
    } else {
      return [];
    }
  }
  return result;
}
