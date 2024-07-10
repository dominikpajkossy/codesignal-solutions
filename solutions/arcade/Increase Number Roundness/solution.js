function solution(n) {
  let nStr = n.toString();
  let zFlag = false;
  for (var i = 0; i < nStr.length; i++) {
    if (nStr[i] === "0") {
      zFlag = true;
    } else {
      if (zFlag === true) {
        return true;
      }
    }
  }
  return false;
}
