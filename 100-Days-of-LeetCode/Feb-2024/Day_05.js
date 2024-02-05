/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if (s.length === 0) return -1;
  if (s.length === 1) return 0;

  const freqObj = {};
  for (let i = 0; i < s.length; i++) {
      let ele = s.charAt(i);
      if (freqObj[ele]) {
          freqObj[ele] = {
            count: freqObj[ele].count + 1,
            index: i
          };
          
      } else {
          freqObj[ele] = {
            count: 1,
            index: i
          };
      }
  }

  let resIndex = -1;
  let freqArray = Object.values(freqObj);
  for (let i = 0; i < freqArray.length; i++) {
    const ele = freqArray[i];
    if (ele.count === 1) {
      resIndex = ele.index;
      break;
    }
  }

  return resIndex;
};


console.log(firstUniqChar("leetcode"));       // 0
console.log(firstUniqChar("loveleetcode"));   // 2
console.log(firstUniqChar("aabb"));           // -1
console.log(firstUniqChar("dddccdbba"));      // 8



