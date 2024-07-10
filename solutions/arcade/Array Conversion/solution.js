function solution(inputArray) {
  let num = 0;
  while (inputArray.length !== 1) {
    if (inputArray.length === 1) break;
    for (var i = 0; i < inputArray.length; i++) {
      if (i < inputArray.length) {
        inputArray[i + 1] = inputArray[i] + inputArray[i + 1];
        inputArray.splice(i, 1);
      }
    }
    if (inputArray.length === 1) break;
    for (var i = 0; i < inputArray.length; i++) {
      if (i < inputArray.length) {
        inputArray[i + 1] = inputArray[i] * inputArray[i + 1];
        inputArray.splice(i, 1);
      }
    }
  }
  return inputArray[0];
}
