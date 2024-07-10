function solution(inputArray) {
  let maxLen = 0;
  let returnArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > maxLen) maxLen = inputArray[i].length;
  }
  for (var i = 0; i < inputArray.length; i++) {
    if (maxLen === inputArray[i].length) returnArray.push(inputArray[i]);
  }
  return returnArray;
}
