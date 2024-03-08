function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandies:number = candies.reduce((prev , curr ) => Math.max(prev , curr), -Infinity);
  const res:boolean[] = candies.map((can)=> (can+extraCandies) >= maxCandies);
  return res;
};