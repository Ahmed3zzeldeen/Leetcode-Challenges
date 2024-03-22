function increasingTriplet(nums: number[]): boolean {
  let n1= Infinity , n2 = Infinity, n3 = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (n1>= nums[i]) n1= nums[i];
    else if (n2 >= nums[i]) n2 = nums[i];
    else if (n3 >= nums[i]) return true;
  }
  return false;
}
