function solution(inputString) {
  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i].match(/[0-9]/)) return inputString[i];
  }
}
