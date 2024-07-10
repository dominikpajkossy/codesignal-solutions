function solution(cipher) {
  let codeArr = cipher.match(/([0-8]{3}|109|119)|9[7-9]/g);
  let retArr = [];
  for (var i = 0; i < codeArr.length; i++) {
    retArr.push(String.fromCharCode(codeArr[i]));
  }
  return retArr.join("");
}
