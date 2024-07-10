function solution(inputArray, k) {
  let retArr = [];
  let mult = 1;
  for (var i = 0; i < inputArray.length; i++) {
    if (mult === k) {
      mult = 0;
    } else {
      retArr.push(inputArray[i]);
    }
    mult++;
  }
  return retArr;
}
