function solution(k) {
  let yellow = 0;
  let red = 0;
  for (var i = 1; i <= k; i++) {
    if (i % 2 === 1) {
      yellow += i * i;
    } else {
      red += i * i;
    }
  }
  return red - yellow;
}
