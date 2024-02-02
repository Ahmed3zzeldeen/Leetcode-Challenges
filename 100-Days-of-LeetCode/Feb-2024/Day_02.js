/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  let result = [];
  let allPossibleNumbers = "123456789";
  let numberOfLow = low.toString().length - 1;
  let numberOfHigh = high.toString().length - 1;
  while (numberOfLow <= numberOfHigh) {
    let tempStr = "";
    for (let i = 0; i < allPossibleNumbers.length; i++) {
      if ((numberOfLow + i + 1) > allPossibleNumbers.length) {
        break;
      }
      tempStr = allPossibleNumbers.substring(i, (numberOfLow + i + 1));
      if (+tempStr >= low) {
        if (+tempStr <= high) {
          result.push(+tempStr)
        } else {
          break;
        }
      }
    }
    numberOfLow++;
  }
  return result;
}
