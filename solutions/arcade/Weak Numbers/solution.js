function solution(n) {
  let divArr = [];
  let weakArr = [];
  let maxWeakness = 0;
  let weaknessCount = 0;
  for (var i = 1; i <= n; i++) {
    let divCount = 1;
    for (var j = 0; j < i; j++) {
      if (i % j === 0) divCount++;
    }
    divArr.push(divCount);
  }
  for (var i = 0; i < divArr.length; i++) {
    let weakness = 0;
    for (var j = 0; j < i; j++) {
      if (divArr[j] > divArr[i]) weakness++;
    }
    if (maxWeakness < weakness) {
      weaknessCount = 1;
      maxWeakness = weakness;
    } else if (maxWeakness == weakness) {
      weaknessCount++;
    }
    weakArr.push(weakness);
  }
  return [maxWeakness, weaknessCount];
}
