function solution(a, b) {
  if (a % 2 !== b % 2) return true;
  if (a > b) return true;
  return false;
}
