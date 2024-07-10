function solution(inputArray) {
  let counter = 0;
  for (var i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i + 1] != "undefined") {
      while (inputArray[i] >= inputArray[i + 1]) {
        inputArray[i + 1]++;
        counter++;
      }
    }
  }
  return counter;
}
