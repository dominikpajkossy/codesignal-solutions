function solution(part, total) {
  let num1 = part.split(":");
  let num2 = total.split(":");
  let n1 = Number(num1[0]) * 3600 + Number(num1[1]) * 60 + Number(num1[2]);
  let n2 = Number(num2[0]) * 3600 + Number(num2[1]) * 60 + Number(num2[2]);
  let retArr = [1, n2 / n1];
  let mult = 1;
  let tmp = retArr[1];
  while (tmp % 1 !== 0) {
    mult += 1;
    tmp = retArr[1];
    tmp *= mult;
  }
  return [retArr[0] * mult, retArr[1] * mult];
}
