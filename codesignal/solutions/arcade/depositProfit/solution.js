function solution(deposit, rate, threshold) {
  let year = 1;
  for (var i = 0; i < 100; i++) {
    deposit *= (100 + rate) / 100;
    if (deposit >= threshold) return year;
    year++;
  }
}
