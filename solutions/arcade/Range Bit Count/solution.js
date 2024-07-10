function solution(a, b) {
  let oneCount = 0;
  for (var i = a; i <= b; i++) {
    let binNum = i.toString(2);
    for (var j = 0; j < binNum.length; j++) {
      if (binNum[j] === "1") oneCount++;
    }
  }
  return oneCount;
}
