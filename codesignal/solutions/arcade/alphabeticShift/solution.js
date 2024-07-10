function solution(inputString) {
  inputString = inputString.split("");
  for (var i = 0; i < inputString.length; i++) {
    let charCode = inputString[i].charCodeAt() + 1;
    if (charCode === 123) charCode = 97;
    inputString[i] = String.fromCharCode(charCode);
  }
  return inputString.join("");
}
