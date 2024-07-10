function solution(a, b, n) {
  let sum = 0;
  for (var i = 0; i < n; i++) {
    sum += a++ * b++;
  }
  return sum;
}
