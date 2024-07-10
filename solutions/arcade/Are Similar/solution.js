function solution(a, b) {
  let x = [];
  let y = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      x.push(a[i]);
      y.push(b[i]);
      if (x.length > 2) return false;
    }
  }
  if (x[0] == y[1] && x[1] == y[0]) {
    return true;
  } else {
    return false;
  }
}
