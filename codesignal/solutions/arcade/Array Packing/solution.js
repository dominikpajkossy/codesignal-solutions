function solution(a) {
  let binary = "";
  for (var i = a.length - 1; i >= 0; i--) {
    binary += ("000000000" + a[i].toString(2)).substr(-8);
  }
  return parseInt(binary, 2);
}
