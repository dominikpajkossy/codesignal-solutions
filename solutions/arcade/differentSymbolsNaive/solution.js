function solution(s) {
  let retArr = [];
  for (var i = 0; i < s.length; i++) {
    let hasElem = false;
    for (var j = 0; j < retArr.length; j++) {
      if (s[i] === retArr[j]) hasElem = true;
    }
    if (!hasElem) retArr.push(s[i]);
  }
  return retArr.length;
}
