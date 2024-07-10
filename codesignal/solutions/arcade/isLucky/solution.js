function solution(n) {
  n = n.toString().split("");
  let firstSum = 0;
  let secondSum = 0;
  for (var i = 0; i < n.length / 2; i++) {
    firstSum += Number(n[i]);
  }
  for (var i = n.length / 2; i < n.length; i++) {
    secondSum += Number(n[i]);
  }
  if (firstSum == secondSum) {
    return true;
  } else {
    return false;
  }
}
