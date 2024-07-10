function solution(n, m) {
  return (function () {
    let nBin = n.toString(2);
    let mBin = m.toString(2);
    let container1 = [];
    let container2 = [];
    if (nBin.length > mBin.length) {
      for (var i = 0; i < nBin.length - mBin.length; i++) {
        container2.push("0");
      }
      container2.push(mBin);
      container1.push(nBin);
    } else {
      for (var i = 0; i < mBin.length - nBin.length; i++) {
        container1.push("0");
      }
      container1.push(nBin);
      container2.push(mBin);
    }
    nBin = container1.join("");
    mBin = container2.join("");
    for (var i = nBin.length - 1; i > 0; i--) {
      if (nBin[i] !== mBin[i]) {
        return Math.pow(2, nBin.length - 1 - i);
      }
    }
    return Math.pow(2, nBin.length - 1 - i);
  })();
}
