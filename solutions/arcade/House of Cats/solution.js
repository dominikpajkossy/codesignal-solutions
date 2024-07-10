function solution(legs) {
  let retArr = [];
  while (legs >= 0) {
    retArr.push(Math.floor(legs / 2));
    legs -= 4;
  }
  return retArr.sort(function (a, b) {
    return a - b;
  });
}
