function solution(a) {
  let group = { length: 0 };
  for (var i = 0; i < a.length; i++) {
    let n = 0;
    if ((a[i] / 10000) % 1 === 0) {
      n = Math.floor(a[i] / 10000 + 1) - 1;
    } else {
      n = Math.floor(a[i] / 10000 + 1);
    }
    if (group.hasOwnProperty(n)) {
      group[n] += 1;
    } else {
      group[n] = 1;
      group.length += 1;
    }
  }
  return a.length + group.length;
}
