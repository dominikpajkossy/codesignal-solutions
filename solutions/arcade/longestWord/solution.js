function solution(text) {
  let stringArr = [];
  let longestArr = "";
  for (var i = 0; i < text.length; i++) {
    if (text[i].match(/[a-zA-Z]/)) {
      stringArr.push(text[i]);
    } else {
      if (stringArr.length > longestArr.length) {
        longestArr = stringArr.join("");
      }
      stringArr = [];
    }
  }
  if (longestArr.length === 0) return stringArr.join("");
  return longestArr;
}
