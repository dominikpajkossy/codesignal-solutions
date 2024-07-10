function solution(ver1, ver2) {
  let verArr1,
    verArr2 = [];
  verArr1 = ver1.split(".");
  verArr2 = ver2.split(".");
  let isBigger = true;
  for (var i = 0; i < verArr1.length; i++) {
    if (Number(verArr1[i]) !== Number(verArr2[i])) {
      if (Number(verArr1[i]) < Number(verArr2[i])) {
        return false;
      } else {
        return true;
      }
    }
  }
  return false;
}
