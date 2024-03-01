function maximumOddBinaryNumber(s: string): string {
  const sortedArray :string[] = s.split("").sort().reverse();
  if (sortedArray[0] === "1") {
    const modChars :string[] = sortedArray.slice(1).concat("1");
    return modChars.join("");
  } else {
    return sortedArray.join("");
  }
};