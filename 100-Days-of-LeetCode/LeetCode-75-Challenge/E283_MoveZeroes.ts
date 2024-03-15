/**
  Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  if (nums.length === 0) return;
  let tracker = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[tracker] !== 0) {
      tracker++;
    } else if (nums[tracker] === 0 && nums[i] !== 0) {
      [nums[tracker], nums[i]] = [nums[i], nums[tracker]];
      tracker++;
    }
  }
}

moveZeroes([0, 0, 0, 3, 12]);
moveZeroes([1, 0, 2]);
moveZeroes([1, 0, 0, 0, 2, 2, 2, 0]);
