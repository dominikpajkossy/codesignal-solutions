function solution(n) {
  let sumCount = 0;
  for (var i = 1; i < n; i++) {
    let sum = 0;
    for (var j = i; j < n; j++) {
      sum += j;
      if (sum === n) sumCount++;
      if (sum > n) break;
    }
  }
  return sumCount;
}
