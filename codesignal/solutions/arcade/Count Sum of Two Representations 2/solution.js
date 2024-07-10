function solution(n, l, r) {
  let count = 1;
  let half = Math.round(n / 2);
  let upper = r - half;
  let lower = half - l;
  if (upper < lower) {
    return upper + 1;
  } else {
    if (lower < 0) return 0;
    return lower + 1;
  }
}
