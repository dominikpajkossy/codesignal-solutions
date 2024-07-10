function solution(n) {
  let input = n.toString().split("");
  for (var i = 0; i < input.length; i++) {
    if (Number(input[i]) % 2 === 1) return false;
  }
  return true;
}
