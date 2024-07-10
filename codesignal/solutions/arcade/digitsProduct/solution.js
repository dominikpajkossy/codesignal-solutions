function solution(product) {
  for (var i = 1; i < 9999; i++) {
    let iArr = i.toString().split("");
    let sum = 1;
    for (var j = iArr.length - 1; j >= 0; j--) {
      sum *= Number(iArr[j]);
    }
    if (sum === product) {
      return i;
    }
  }
  return -1;
}
