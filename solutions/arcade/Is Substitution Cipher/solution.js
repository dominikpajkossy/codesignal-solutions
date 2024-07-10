function solution(string1, string2) {
  function isSub(charArr1, charArr2) {
    for (var i = 0; i < charArr1.length; i++) {
      for (var j = 0; j < charArr2.length; j++) {
        if (charArr1[i] === charArr1[j]) {
          if (charArr2[i] !== charArr2[j]) {
            return false;
          }
        }
      }
    }
    return true;
  }
  if (!isSub(string1.split(""), string2.split(""))) return false;
  if (!isSub(string2.split(""), string1.split(""))) return false;
  return true;
}
