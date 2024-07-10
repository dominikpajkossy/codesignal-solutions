function solution(n) {
  let side = n * 2 - 1;
  let area = side * side;
  let emptyArea = Math.floor(area / 2);
  let filledArea = emptyArea + 1;
  return filledArea;
}
