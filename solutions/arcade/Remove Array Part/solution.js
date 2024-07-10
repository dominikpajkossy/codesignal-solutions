function solution(inputArray, l, r) {
  for (var i = 0; i <= r - l; i++) {
    inputArray.splice(l, 1);
  }
  return inputArray;
}
