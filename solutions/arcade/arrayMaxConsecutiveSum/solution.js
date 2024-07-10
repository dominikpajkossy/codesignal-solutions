function solution(inputArray, k) {
  let max = 0;
  for (var i = 0; i < inputArray.length - k + 1; i++) {
    let sum = 0;
    for (var j = i; j < i + k; j++) {
      sum += inputArray[j];
    }
    if (max < sum) max = sum;
  }
  return max;
}
