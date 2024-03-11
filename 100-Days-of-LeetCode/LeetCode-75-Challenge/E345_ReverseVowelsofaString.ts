function reverseVowels(s: string): string {
  let p1 = 0;
  let p2 = s.length - 1;
  let sArr = s.split("");
  let allVowels = ["a", "e", "i", "o", "u"];
  
  while (p1 < p2) {
    if (allVowels.includes(sArr[p1].toLowerCase()) && allVowels.includes(sArr[p2].toLowerCase())) {
      [sArr[p1], sArr[p2]] = [sArr[p2], sArr[p1]];
      p1++;
      p2--;
    }
    if (!allVowels.includes(sArr[p1].toLowerCase())) {
      p1++;
    }
    if (!allVowels.includes(sArr[p2].toLowerCase())) {
      p2--;
    }
  }
  return sArr.join("");
}

console.log(reverseVowels("hello")); // "holle"
console.log(reverseVowels("leetcode")); // "leotcede"