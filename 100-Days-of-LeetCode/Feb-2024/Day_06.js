/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hashMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    const freqArr = Array(26).fill(0);
    let freqKeys = [];
    for (const c of strs[i]) {
      freqArr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < 26; i++) {
      if (freqArr[i] !== 0) {
        freqKeys.push(String.fromCharCode(i + 'a'.charCodeAt(0)), freqArr[i].toString());
      }
    }
    uniqueKey = freqKeys.join('');

    if (hashMap.has(uniqueKey)) {
      hashMap.get(uniqueKey).push(strs[i])
    } else {
      hashMap.set(uniqueKey , [strs[i]]); 
    }
  }


  let resualt = [] 
  hashMap.forEach((val ) => resualt.push(val));

  return resualt;
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
