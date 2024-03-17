function productExceptSelfs(nums: number[]): number[] {
  const answer = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] *= left;
    answer[nums.length - 1 - i] *= right;
    left *= nums[i];
    right *= nums[nums.length - 1 - i];
  }
  return answer;
};

// Brute Force O(n^2)
function productExceptSelf_Bruteforce(nums: number[]): number[] {
  const Ans = nums.map((e , EleIndex)=> nums.filter((val,indx )=> EleIndex != indx).map((f)=> f).reduce((a,b)=> a*b));
  return Ans;
};
