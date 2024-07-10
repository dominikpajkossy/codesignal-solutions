function solution(inputString) {
  let stringArr = inputString.split("");
  let sum = 0;
  let numArr = [];
  for (var i = 0; i < stringArr.length; i++) {
    if (i + 1 < stringArr.length + 1) {
      if (!isNaN(stringArr[i]) && isNaN(stringArr[i + 1])) {
        numArr.push(stringArr[i] + ",");
      }
      if (!isNaN(stringArr[i]) && !isNaN(stringArr[i + 1])) {
        numArr.push(stringArr[i]);
      }
    }
  }
  numArr = numArr.join("").split(",");
  for (var i = 0; i < numArr.length; i++) {
    sum += Number(numArr[i]);
  }
  return sum;
}
