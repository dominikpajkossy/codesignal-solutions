function solution(n) {
  let counter = 0;
  function digDeg(numberOfRemaining) {
    let stringNum = numberOfRemaining.toString().split("");
    let sum = 0;
    if (stringNum.length <= 1) return 0;
    counter++;
    for (var i = 0; i < stringNum.length; i++) {
      sum += Number(stringNum[i]);
    }
    digDeg(sum);
  }
  digDeg(n);
  return counter;
}
