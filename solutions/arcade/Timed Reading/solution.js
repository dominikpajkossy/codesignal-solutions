function solution(maxLength, text) {
  let retArr = [];
  let word = [];
  for (var i = 0; i < text.length; i++) {
    if (text[i].match(/[A-Za-z]/)) {
      word.push(text[i]);
    } else {
      if (word.length !== 0) {
        retArr.push(word.join(""));
        word = [];
      }
    }
  }
  if (word.length !== 0) retArr.push(word.join(""));
  let retArr2 = [];
  for (var i = 0; i < retArr.length; i++) {
    if (retArr[i].length <= maxLength) retArr2.push(retArr[i]);
  }
  console.log(retArr2);
  return retArr2.length;
}
