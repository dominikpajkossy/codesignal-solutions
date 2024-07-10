function solution(value) {
  let vStr = value.toString().split("");
  for (var i = vStr.length - 1; i >= 0; i--) {
    let cur = Math.round(Number(vStr[i]) / 10);
    if (i - 1 < 0) break;
    if (cur === 1) {
      vStr[i] = 0;
      if (i - 1 >= 0) {
        vStr[i - 1] = Number(vStr[i - 1]) + 1;
      }
    } else {
      vStr[i] = 0;
    }
  }
  return Number(vStr.join(""));
}
