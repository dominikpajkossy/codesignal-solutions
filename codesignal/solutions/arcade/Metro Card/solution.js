function solution(lastNumberOfDays) {
  switch (lastNumberOfDays) {
    case 31:
      return [28, 30, 31];
    case 30:
      return [31];
    case 28:
      return [31];
  }
}
