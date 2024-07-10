function solution(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  sum /= 3;
  let res = 0;
  let s1 = 0;
  for (let i = 0; i < a.length; i++) {
    s1 += a[i];
    if (s1 === sum) {
      let s2 = 0;
      for (let j = i + 1; j < a.length; j++) {
        s2 += a[j];
        if (s2 === sum) {
          if (j < a.length - 1) {
            res++;
          }
        }
      }
    }
  }
  return res;
}
