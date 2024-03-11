function reverseWords(s: string): string {
  let arrStr = s.split(" ").filter((ele) => ele !== "").reverse();
  return arrStr.join(" ");
};

reverseWords("a good   example"); // "example good a"