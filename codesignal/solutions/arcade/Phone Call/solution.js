function solution(min1, min2_10, min11, s) {
  let minutes = 0;
  let money = s;
  while (money > 0) {
    if (minutes === 1) {
      if (money - min1 < 0) break;
      else money -= min1;
    }
    if (minutes > 1 && minutes <= 10) {
      if (money - min2_10 < 0) break;
      else money -= min2_10;
    }
    if (minutes > 10) {
      if (money - min11 < 0) break;
      else money -= min11;
    }
    minutes++;
  }
  return minutes - 1;
}
