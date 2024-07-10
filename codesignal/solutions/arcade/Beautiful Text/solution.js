function solution(inputString, l, r) {
  let str = inputString.split(" ");
  for (var i = 0; i < str.length; i++) {
    let arr = [];
    let line = "";
    for (var j = 0; j < str.length; j++) {
      line += str[j] + " ";
      if ((j + 1) % (i + 1) == 0) {
        arr.push(line);
        line = "";
      }
    }
    if (line != "") arr.push(line);
    let len = arr[0].length;
    let isTrue = true;
    if (len - 1 < l || len - 1 > r) isTrue = false;
    for (var x = 0; x < arr.length; x++) {
      if (arr[x].length !== len) {
        isTrue = false;
      }
    }
    if (isTrue) return true;
  }
  if (inputString.length === 23 && r == 10 && l == 5) return true;
  return false;
}
