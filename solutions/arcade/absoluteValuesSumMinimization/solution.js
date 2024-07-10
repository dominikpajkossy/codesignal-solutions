function solution(a) {
  let numberToCheck = 99999999;
  let maxLength = -99999999;
  for (var i = 0; i < a.length; i++) {
    if (numberToCheck > a[i]) numberToCheck = a[i];
    if (maxLength < a[i]) maxLength = a[i];
  }
  let returnNumber = 0;
  let minSum = 99999999;
  for (var i = 0; i < maxLength + 1000; i++) {
    let sum = 0;
    for (var j = 0; j < a.length; j++) {
      sum += Math.abs(a[j] - numberToCheck);
    }
    if (minSum > sum) {
      minSum = sum;
      returnNumber = numberToCheck;
    }
    numberToCheck++;
  }
  return returnNumber;
}
