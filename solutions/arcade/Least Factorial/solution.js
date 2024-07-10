function solution(n) {
  let fact = 1;
  for (var i = 1; i < 50; i++) {
    fact *= i;
    if (fact >= n) return fact;
  }
}
