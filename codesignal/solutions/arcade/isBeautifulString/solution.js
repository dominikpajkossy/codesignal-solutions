function solution(inputString) {
  let chars = [
    ["a", 0],
    ["b", 0],
    ["c", 0],
    ["d", 0],
    ["e", 0],
    ["f", 0],
    ["g", 0],
    ["h", 0],
    ["i", 0],
    ["j", 0],
    ["k", 0],
    ["l", 0],
    ["m", 0],
    ["n", 0],
    ["o", 0],
    ["p", 0],
    ["q", 0],
    ["r", 0],
    ["s", 0],
    ["t", 0],
    ["u", 0],
    ["v", 0],
    ["w", 0],
    ["x", 0],
    ["y", 0],
    ["z", 0],
  ];
  let stringArr = inputString.split("");
  for (var i = 0; i < stringArr.length; i++) {
    for (var j = 0; j < chars.length; j++) {
      if (stringArr[i] === chars[j][0] && stringArr[i] != "0") {
        chars[j][1]++;
      }
    }
  }
  for (var i = 0; i < chars.length - 1; i++) {
    if (chars[i][1] < chars[i + 1][1]) return false;
  }
  return true;
}
