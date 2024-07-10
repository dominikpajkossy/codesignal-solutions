function solution(a) {
  let tmp = [];
  a = a.toString(2);
  for (var i = a.length - 1; i >= 0; i--) {
    tmp.push(a[i]);
  }
  return parseInt(tmp.join("").toString(10), 2);
}
