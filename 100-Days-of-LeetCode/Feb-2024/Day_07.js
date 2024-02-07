/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const freqArr = Array(26 * 2 + 10).fill(0);
  for (const c of s) {
    if (c.charCodeAt(0) >= 'A'.charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
      freqArr[c.charCodeAt(0) - 'A'.charCodeAt(0) + 26]++;
    } else if (c.charCodeAt(0) >= 'a'.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0)) {
      freqArr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    } else {
      freqArr[c.charCodeAt(0) - '0'.charCodeAt(0) + 26 * 2]++;
    }

  }
  let freqKeys = [];
  for (let i = 0; i < 26 * 2 + 10; i++) {
    if (freqArr[i] !== 0) {
      if (i < 26) {
        freqKeys.push(String.fromCharCode(i + 'a'.charCodeAt(0)).repeat(freqArr[i]));
      } else if (i < 26 * 2) {
        freqKeys.push(String.fromCharCode(i + 'A'.charCodeAt(0) - 26).repeat(freqArr[i]));
      } else {
        freqKeys.push(String.fromCharCode(i + '0'.charCodeAt(0) - 26 * 2).repeat(freqArr[i]));
      }
    }
  }
  return freqKeys.sort((a, b) => b.length - a.length).join('');
};

console.log(frequencySort("tree")); // "eert"
console.log(frequencySort("Aabb")); // "bbAa"
console.log(frequencySort("2a554442f544asfasssffffasss")); // "sssssssffffff44444aaaa5552"