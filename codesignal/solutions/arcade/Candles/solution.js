function solution(solutionNumber, makeNew) {
  let burnedCandles = 0;
  let leftOver = 0;
  while (1) {
    burnedCandles += solutionNumber;
    leftOver += solutionNumber;
    solutionNumber = 0;
    solutionNumber += Math.floor(leftOver / makeNew);
    leftOver = leftOver % makeNew;
    if (solutionNumber === 0) return burnedCandles;
  }
}
