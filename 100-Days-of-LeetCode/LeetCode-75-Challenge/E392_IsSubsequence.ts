function isSubsequence(s: string, t: string): boolean {
  let postion = 0;
  for (let i = 0; i < t.length; i++) {
    if (s.charAt(postion) === t.charAt(i)) {
      postion++;
    }
  }
  return postion === s.length;
};