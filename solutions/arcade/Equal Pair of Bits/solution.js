function solution(n, m) {
  return (function () {
    let nBin = n.toString(2);
    let mBin = m.toString(2);
    let tmp1 = [];
    let tmp2 = [];
    if (nBin.length > mBin.length) {
      for (var i = 0; i < nBin.length - mBin.length; i++) {
        tmp2.push("0");
      }
      tmp2.push(mBin);
      tmp1.push(nBin);
    } else {
      for (var i = 0; i < mBin.length - nBin.length; i++) {
        tmp1.push("0");
      }
      tmp1.push(nBin);
      tmp2.push(mBin);
    }
    nBin = tmp1.join("");
    mBin = tmp2.join("");
    for (var i = nBin.length - 1; i >= 0; i--) {
      if (nBin[i] === mBin[i]) {
        return Math.pow(2, nBin.length - 1 - i);
      }
    }
  })();
}
