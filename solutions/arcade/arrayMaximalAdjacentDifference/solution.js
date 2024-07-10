function solution(inputArray) {
  let max = -999999;
  for (var i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i + 1] != "undefined") {
      let diff = Math.abs(inputArray[i] - inputArray[i + 1]);
      if (diff > max) {
        max = diff;
      }
    }
  }
  return max;
}
