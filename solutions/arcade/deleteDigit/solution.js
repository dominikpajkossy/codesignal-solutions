function solution(n) {
  let num = n.toString().split("");
  let max = 0;
  for (var i = 0; i < num.length; i++) {
    let splitArr = [];
    for (var j = 0; j < num.length; j++) {
      if (i != j) {
        splitArr.push(num[j]);
      }
    }
    if (Number(splitArr.join("")) > max) max = Number(splitArr.join(""));
  }
  return max;
}
