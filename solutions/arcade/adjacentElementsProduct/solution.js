function solution(inputArray) {
  let max = -999999;
  for (var i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i + 1] !== "undefined") {
      if (max < inputArray[i] * inputArray[i + 1])
        max = inputArray[i] * inputArray[i + 1];
    }
  }
  return max;
}
