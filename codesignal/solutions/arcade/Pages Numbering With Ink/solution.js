function solution(current, numberOfDigits) {
  while (1) {
    numberOfDigits -= current.toString().length;
    if (numberOfDigits >= 0) {
      current++;
    } else {
      break;
    }
  }
  return --current;
}
