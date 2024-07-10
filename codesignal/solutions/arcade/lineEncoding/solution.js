function solution(s) {
  let retArr = [];
  let retNum = 1;
  for (var i = 0; i < s.length; i++) {
    if (i + 1 < s.length + 1) {
      if (s[i] === s[i + 1]) {
        retNum++;
      } else {
        if (retNum === 1) {
          retArr.push("" + s[i]);
        } else {
          retArr.push(retNum + "" + s[i]);
        }
        retNum = 1;
      }
    }
  }
  return retArr.join("");
}
