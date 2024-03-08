function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 === str2 + str1) {
    return str1.substring(0, gcd(str1.length, str2.length));
  } else {
    return "";
  }
}

function gcd(num1: number, num2: number) {
  if (num2 === 0) return num1;
  return gcd(num2, num1 % num2);
}

gcdOfStrings("ABCABC", "ABC"); // ABC
gcdOfStrings("ABABAB", "ABAB"); // AB

