function solution(n) {
  let hh = Math.floor(n / 60);
  let mm = n % 60;
  let time = hh.toString() + mm.toString();
  let sum = 0;
  for (var i = 0; i < time.length; i++) {
    sum += Number(time[i]);
  }
  return sum;
}
