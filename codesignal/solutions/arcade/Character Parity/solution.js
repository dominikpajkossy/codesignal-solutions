function solution(symbol) {
  if (!isNaN(symbol)) {
    if (symbol % 2 === 1) return "odd";
    else return "even";
  } else return "not a digit";
}
